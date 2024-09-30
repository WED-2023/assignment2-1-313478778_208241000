<template>
  <!-- Main container for the component -->
  <b-container class="recipe-preview-container">
    <!-- <h3>{{ title }}</h3> -->
    <!-- Flex container for title and icon -->
    <b-row class="d-flex align-items-center justify-content-between">
      <b-col>
        <!-- Title section -->
        <h3 >{{ title }}</h3>
      </b-col>
      <b-col class="text-right">
        <!-- Hover and click icon aligned to the right -->
        <div v-if="parentPageName === 'main'">
          <!-- Main page: Hover and click icon aligned to the right -->
          <b-iconstack @click="refreshRecipes" class="rotate-on-hover" font-scale="2.8">
            <b-icon stacked icon="circle-fill" variant="success"></b-icon>
            <b-icon stacked icon="arrow-repeat" scale="0.8" variant="white"></b-icon>
          </b-iconstack>
        </div>
        <div v-else-if="parentPageName === 'favorites' || parentPageName === 'private'">
          <!-- Favorites or Private page: Left and right arrows -->
          <b-icon icon="arrow-left-circle-fill" variant="success" font-scale="2.8" class="mr-2"></b-icon>
          <b-icon icon="arrow-right-circle-fill" variant="success" font-scale="2.8" class="mr-2"></b-icon>
        </div>
      </b-col>
    </b-row>
    <!-- Recipe previews displayed in a row -->
      <b-row class="mt-4" v-for="r in recipes" :key="r.id">
        <RecipePreview :recipe="r"/>
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
  props:{
    title: {
      type: String,
      required: true // Title prop is required
    },
  },
  data() {
    return {
      recipes: [], // Array to hold fetched recipes
      parentPageName: '',
    };
  },
  mounted() {
    this.determineParentPageName(); // Set pageType based on the current route
    this.updateRecipesBackEnd(); // Fetch recipes when the component is mounted
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
    async updateRecipesBackEnd() {
      try {
        // If on the main page, fetch recipes from the backend
        if (this.parentPageName === "main") {
          const numberOfRecipesToDisplay = 3; // Number of recipes to display
          const response = await this.axios.get(
            `${this.$root.store.server_domain}/recipes/random`, {
            params: { number: numberOfRecipesToDisplay },
          }, {withCredentials: true});
          this.recipes = response.data; // Set recipes to the fetched data
        } else if (this.parentPageName === "favorites") {
            const response = await this.axios.get(`${this.$root.store.server_domain}/user/favorites/show`, {withCredentials: true});
            this.recipes = response.data; // Set recipes to the fetched favorite recipes
        }
         else {
          // Use mock data or other logic for non-main pages (if needed)
          const response = mockGetRecipesPreview(3);
          this.recipes = response.data.recipes;
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
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
      // this.updateRecipes(); // Fetch 3 new random recipes when the icon is clicked
      this.updateRecipesBackEnd(); // Fetch 3 new random recipes when the icon is clicked
    },
    determineParentPageName() {
      const routeName = this.$route.name;
      if (routeName === 'main') {
        this.parentPageName = 'main';
      } else if (routeName === 'favorites') {
        this.parentPageName = 'favorites';
      } else if (routeName === 'private') {
        this.parentPageName = 'private';
      }
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

.recipe-preview-container {
  background-color: rgba(248, 245, 237, 0.90); /* Matches the jumbotron color */
  padding: 22px 36px; /* Adds padding similar to jumbotron */
  border-radius: 20px; /* Optional: rounds the corners for a softer look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  margin-top: 20px; /* Space above the container */
  // font-family: 'Assistant', sans-serif; -> to do - add font to title
  // color: #1e3a8a;
}
</style>
