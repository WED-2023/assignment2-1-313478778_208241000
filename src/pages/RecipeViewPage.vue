<template>
  <div class="container my-5">
    <div v-if="recipe" class="recipe-container">
      <div class="recipe-header mb-4 text-center">
        <h1 class="display-4 mb-3">{{ recipe.title }}</h1>
        <img
          :src="recipe.image"
          class="img-fluid rounded shadow-sm"
          alt="Recipe image"
        />
      </div>
      <div class="recipe-body">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="col-md-6 mb-4">
            <div class="p-4 border rounded shadow-sm">
              <h4>Details</h4>
              <p>
                <strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes
              </p>
              <p><strong>Likes:</strong> {{ recipe.aggregateLikes }} likes</p>
              <h5 class="mt-3">Ingredients</h5>
              <ul class="list-unstyled">
                <li
                  v-for="(ingredient, index) in recipe.extendedIngredients"
                  :key="index"
                  class="mb-2"
                >
                  <i class="fas fa-check-circle text-success"></i>
                  {{ ingredient.original }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="p-4 border rounded shadow-sm">
              <h4>Instructions</h4>
              <ol class="pl-3">
                <li
                  v-for="(step, index) in recipe._instructions"
                  :key="index"
                  class="mb-2"
                >
                  {{ step.step }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mockGetRecipeFullDetails } from "../services/recipes.js";
  export default {
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
  /* .recipe-header{

} */
</style>
