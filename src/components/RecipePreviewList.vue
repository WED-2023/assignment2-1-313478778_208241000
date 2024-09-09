<template>
  <b-container class="recipe-preview-container">
    <h3>{{ title }}</h3>
    <b-row class="mt-4" v-for="recipe in recipes" :key="recipe.id">
      <RecipePreview :recipe="recipe" />
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  name: "RecipePreviewList", // Compnent name
  components: {
    RecipePreview // Registering the RecipePreview component
  },
  props: {
    title: {
      type: String,
      required: true // Title prop is required
    }
  },
  data() {
    return {
      recipes: [] // Array to hold fetched recipes
    };
  },
  mounted() {
    this.updateRecipes(); // Fetch recipes when the component is mounted
  },
  methods: {
    async updateRecipes() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.server_domain + "/recipes/random",
        // );

        const amountToFetch = 3; // Number of recipes to fetch
        const response = mockGetRecipesPreview(amountToFetch); // Fetching recipes from mock service

        console.log(response); // Log the response for debugging
        const recipes = response.data.recipes; // Extract recipes from response
        console.log(recipes); // Log the recipes for debugging
        
        this.recipes = []; // Reset the recipes array
        this.recipes.push(...recipes); // Populate the recipes array
      } catch (error) {
        console.log(error); // Log any errors that occur during fetch
      }
    }
  }
};
</script>

<style scoped>
.recipe-preview-container {
  background-color: rgba(248, 245, 237, 0.90); /* Matches the jumbotron color */
  padding: 34px; /* Adds padding similar to jumbotron */
  border-radius: 20px; /* Optional: rounds the corners for a softer look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  margin-top: 20px; /* Space above the container */
}
</style>

