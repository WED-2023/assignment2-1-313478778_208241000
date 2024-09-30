<template>
  <div class="container my-5">
    <div v-if="recipe" class="recipe-container">
      <recipe-preview :recipe="recipe" :isFullView="true"></recipe-preview>
      <div class="recipe-body">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="col-md-6 mb-4">
            <b-container class="recipe-fullview-container">
              <h4><strong>Ingredients:</strong></h4>
              <ul class="indented-list">
                <li
                  v-for="(ingredient, index) in recipe.extendedIngredients"
                  :key="index"
                  class="mb-2"
                >
                  <i class="fas fa-check-circle text-success"></i>
                  {{ ingredient.original }}
                </li>
              </ul>
            </b-container>
          </div>
          <div class="col-md-6 mb-4">
            <b-container class="recipe-fullview-container">
              <h4><strong>Instructions:</strong></h4>
              <ol class="indented-list">
                <li
                  v-for="(step, index) in recipe._instructions"
                  :key="index"
                  class="mb-2"
                >
                  {{ step.step }}
                </li>
              </ol>
            </b-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from '../components/RecipePreview.vue';
import { mockGetRecipeFullDetails } from "../services/recipes.js";

export default {
  components: { RecipePreview },
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    try {
      // Step 1: Try to retrieve the recipe from sessionStorage
      const savedRecipe = sessionStorage.getItem('currentRecipe');

      if (savedRecipe) {
        // If a saved recipe is found, parse it
        const savedRecipeParsed = JSON.parse(savedRecipe);

        // Apply the same instruction processing logic
        const _instructions = savedRecipeParsed.analyzedInstructions.length
          ? savedRecipeParsed.analyzedInstructions.flatMap(fstep => 
              fstep.steps.map(step => ({
                step: `${fstep.name ? fstep.name + ": " : ""}${step.step}`
              }))
            )
          : [{ step: "No instructions available." }];

        // Set the recipe data with processed instructions
        this.recipe = { ...savedRecipeParsed, _instructions };
      } else {
        // Step 2: If not found, make an API call to fetch the recipe
        const response = await mockGetRecipeFullDetails(this.$route.params.recipeId);

        const {
          analyzedInstructions,
          instructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          servings,
          image,
          title,
          id,
          vegetarian,
          vegan,
          glutenFree,
          summary,
        } = response.data.recipe;

        // Process instructions similarly to before
        const _instructions = analyzedInstructions.length
          ? analyzedInstructions.flatMap(fstep => 
              fstep.steps.map(step => ({
                step: `${fstep.name ? fstep.name + ": " : ""}${step.step}`
              }))
            )
          : [{ step: "No instructions available." }];

        // Create the complete recipe object
        const _recipe = {
          instructions,
          _instructions,
          analyzedInstructions,
          extendedIngredients,
          aggregateLikes,
          readyInMinutes,
          servings,
          image,
          title,
          id,
          vegetarian,
          vegan,
          glutenFree,
          summary,
        };

        // Step 3: Set the recipe data and save it in sessionStorage for future use
        this.recipe = _recipe;
        sessionStorage.setItem('currentRecipe', JSON.stringify(_recipe));
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
  .wrapper {
    display: flex;
  }
  .wrapped {
    width: 50%;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
.recipe-fullview-container {
  background-color: rgba(248, 245, 237, 0.90); /* Matches the jumbotron color */
  padding: 30px 30px; /* Adds padding similar to jumbotron */
  border-radius: 20px; /* Optional: rounds the corners for a softer look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  margin-top: 20px; /* Space above the container */
}
</style>
