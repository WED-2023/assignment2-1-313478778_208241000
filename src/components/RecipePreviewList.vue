<template>
  <!-- Main container for the component -->
  <b-container>
    <!-- Flex container for title and icon -->
    <b-row class="d-flex align-items-center justify-content-between">
      <b-col>
        <!-- Title section -->
        <h3>{{ title }}</h3>
      </b-col>
      <b-col class="text-right">
        <!-- Hover and click icon aligned to the right -->
        <b-iconstack @click="refreshRecipes" class="rotate-on-hover" font-scale="2.8">
          <b-icon stacked icon="circle-fill" variant="success"></b-icon>
          <b-icon stacked icon="arrow-repeat" scale="0.8" variant="white"></b-icon>
        </b-iconstack>
      </b-col>
    </b-row>

    <!-- Recipe previews displayed in a row -->
    <b-row class="mt-4" v-for="r in recipes" :key="r.id">
      <RecipePreview :recipe="r" />
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";

export default {
  name: "RecipePreviewList", // Component name
  components: {
    RecipePreview, // Registering the RecipePreview component
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
        const amountToFetch = 10; // Number of recipes to fetch
        const response = mockGetRecipesPreview(amountToFetch);
        const recipes = response.data.recipes;

        // Shuffle recipes
        const shuffledRecipes = this.shuffleArray(recipes);

        // Select the number of recipes you want to display
        const numberOfRecipesToDisplay = 3;
        this.recipes = shuffledRecipes.slice(0, numberOfRecipesToDisplay);
      } catch (error) {
        console.log(error);
      }
    },
    shuffleArray(array) {
      // Fisher-Yates (Knuth) Shuffle
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    refreshRecipes() {
      this.updateRecipes(); // Fetch 3 new random recipes when the icon is clicked
    }
  }
};
</script>

<style lang="scss" scoped>
/* Additional optional styling */
.rotate-on-hover {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.rotate-on-hover:hover {
  transform: rotate(360deg) scale(1.2);
}
</style>
