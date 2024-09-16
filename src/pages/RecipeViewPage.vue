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
          const response = await mockGetRecipeFullDetails(
            this.$route.params.recipeId
          );
  
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
  
          const _instructions = analyzedInstructions
            .map((fstep) => {
              fstep.steps[0].step = fstep.name + fstep.steps[0].step;
              return fstep.steps;
            })
            .reduce((a, b) => [...a, ...b], []);
  
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
  
          this.recipe = _recipe;
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
  