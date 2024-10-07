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
        this.processRecipe(savedRecipeParsed);
      } else {
        // Step 2: If not found in sessionStorage, fetch recipe based on public or private
        if (this.isPrivateRecipe()) {
          await this.fetchPrivateRecipe(this.$route.params.recipeId);
        } else {
          await this.fetchPublicRecipe(this.$route.params.recipeId);
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // Determine if the recipe is private
    isPrivateRecipe() {
      return this.$route.name === 'privateRecipe'; // Adjust based on how you detect private recipes
    },

    // Fetch private recipe details
    async fetchPrivateRecipe(recipeId) {
      try {
        const response = await this.axios.get(`${this.$root.store.server_domain}/user/PrivateRecipes/`, { withCredentials: true });
        this.processRecipe(response.data);
      } catch (error) {
        console.error('Error fetching private recipe:', error);
      }
    },

    // Fetch public recipe details
    async fetchPublicRecipe(recipeId) {
      const response = await mockGetRecipeFullDetails(recipeId);
      this.processRecipe(response.data.recipe);
    },

    // Process and transform recipe data
    processRecipe(rawRecipe) {
      // Determine if the recipe is private based on structure
      const isPrivate = rawRecipe.instructions && typeof rawRecipe.instructions === 'string';

      // Process instructions and ingredients based on recipe type
      let _instructions = [];
      let extendedIngredients = [];

      if (isPrivate) {
        // Process private recipe data
        _instructions = rawRecipe.instructions.split(',').map(step => ({ step: step.trim() }));
        extendedIngredients = rawRecipe.ingredients.split(',').map(ingredient => ({ original: ingredient.trim() }));
      } else {
        // Process public recipe data
        _instructions = rawRecipe.analyzedInstructions.length
          ? rawRecipe.analyzedInstructions.flatMap(fstep => 
              fstep.steps.map(step => ({
                step: `${fstep.name ? fstep.name + ": " : ""}${step.step}`
              }))
            )
          : [{ step: "No instructions available." }];
        extendedIngredients = rawRecipe.extendedIngredients;
      }

      // Set the recipe data in the component state
      this.recipe = { ...rawRecipe, _instructions, extendedIngredients };

      // Save in sessionStorage for future use
      sessionStorage.setItem('currentRecipe', JSON.stringify(this.recipe));
    },
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

