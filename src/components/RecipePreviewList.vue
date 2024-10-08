<template>
  <!-- Main container for the component -->
  <b-container class="recipe-preview-container">
    <!-- Flex container for title and icon -->
    <b-row class="d-flex align-items-center justify-content-between">
      <b-col>
        <!-- Title section -->
        <h3>{{ title }}</h3>
      </b-col>
      <b-col class="text-right">
        <!-- Conditionally render icons based on the current page name -->
        <div v-if="parentPageName === 'main'">
          <!-- Main page: Hover and click icon aligned to the right -->
          <b-iconstack @click="refreshRecipes" class="rotate-on-hover" font-scale="2.8">
            <b-icon stacked icon="circle-fill" variant="success"></b-icon>
            <b-icon stacked icon="arrow-repeat" scale="0.8" variant="white"></b-icon>
          </b-iconstack>
        </div>
        <div v-else-if="parentPageName === 'favorites' || parentPageName === 'private'">
          <!-- Favorites or Private page: Left and right arrows for navigation -->
          <b-icon
            icon="arrow-left-circle-fill"
            :variant="hasPreviousPage ? 'success' : 'secondary'"
            font-scale="2.8"
            class="mr-2"
            :class="hasPreviousPage ? 'rotate-on-hover' : ''"
            @click="previousPage"
            style="cursor: pointer;"
          ></b-icon>
          <b-icon
            icon="arrow-right-circle-fill"
            :variant="hasNextPage ? 'success' : 'secondary'" 
            font-scale="2.8"
            class="mr-2"
            :class="hasNextPage ? 'rotate-on-hover' : ''"
            @click="nextPage"
            style="cursor: pointer;"
          ></b-icon>
        </div>
      </b-col>
    </b-row>
    <!-- Recipe previews displayed in a row -->
    <b-row class="mt-4" v-for="r in displayedRecipes" :key="r.id">
      <RecipePreview :recipe="r" @favorite-toggled="handleFavoriteToggle"/> 
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
      required: true, // Title prop is required
    },
  },
  data() {
    return {
      recipes: [], // Array to hold fetched recipes
      displayedRecipes: [], // Recipes to be displayed in the current view
      currentPage: 0, // Current page index
      pageSize: 3, // Number of recipes per page
      parentPageName: "", // Page identifier
    };
  },
  computed: {
    // Determine if there's a previous page
    hasPreviousPage() {
      return this.currentPage > 0;
    },
    // Determine if there's a next page
    hasNextPage() {
      const totalRecipes = this.recipes.length;
      const totalPages = Math.ceil(totalRecipes / this.pageSize);
      return this.currentPage < totalPages - 1;
    },
    
  },
  mounted() {
    this.determineParentPageName(); // Set pageType based on the current route
    this.updateRecipesBackEnd(); // Fetch recipes when the component is mounted
  },
  methods: {
    /**
     * Transforms a string of ingredients into an array of ingredient objects.
     */
    transformIngredients(ingredientsString) {
      return ingredientsString.split(",").map((ingredient) => ({
        original: ingredient.trim(),
        name: ingredient.trim(),
        amount: 1, // Default amount; adjust if known
        unit: "", // Default unit; adjust if known
      }));
    },

    /**
     * Transforms summary into analyzedInstructions format.
     */
    transformInstructions(summary) {
      return [
        {
          name: "", // Default name for instruction step
          steps: [
            {
              number: 1,
              step: summary, // Use summary as the single step of the recipe
            },
          ],
        },
      ];
    },

    /**
     * Transforms private recipes to match the format of public recipes.
     */
    transformPrivateRecipes(privateRecipes) {
      return privateRecipes.map((recipe) => {
        return {
          id: recipe.id,
          title: recipe.title,
          readyInMinutes: recipe.readyInMinutes,
          image: recipe.image,
          // Map diet preferences
          vegetarian: recipe.diet.vegetarian,
          vegan: recipe.diet.vegan,
          glutenFree: recipe.diet.glutenFree,
          // Transform ingredients into the expected format
          extendedIngredients: this.transformIngredients(recipe.ingredients),
          // Transform summary to analyzedInstructions
          analyzedInstructions: this.transformInstructions(recipe.summary),
          // Additional fields with default or derived values
          aggregateLikes: 0, // Default value
          servings: 1, // Default serving size
        };
      });
    },

    async updateRecipesBackEnd() {
      try {
        // Fetch recipes based on the current page
        if (this.parentPageName === "main") {
          const numberOfRecipesToDisplay = 3;
          const response = await this.axios.get(
            `${this.$root.store.server_domain}/recipes/random`,
            {
              params: { number: numberOfRecipesToDisplay },
            },
            { withCredentials: true }
          );
          this.recipes = response.data; // Set recipes to the fetched data
        } else if (this.parentPageName === "favorites") {
          const response = await this.axios.get(
            `${this.$root.store.server_domain}/user/favorites/show`,
            { withCredentials: true }
          );
          this.recipes = response.data; // Set recipes to the fetched favorite recipes
        } else if (this.parentPageName === "private") { 
          const response = await this.axios.get(
            `${this.$root.store.server_domain}/user/PrivateRecipes`,
            { withCredentials: true }
          );
          this.recipes = this.transformPrivateRecipes(response.data);  // Transform searched recipes
        // }else if (this.parentPageName === "search") { 
        //   const response = await this.axios.get(
        //     `${this.$root.store.server_domain}/recipes/search`,
        //     { withCredentials: true }
        //   );
          // this.recipes = this.transformPrivateRecipes(response.data);  // Transform private recipes
        }
        else {
          // Use mock data or other logic for non-main pages
          const response = mockGetRecipesPreview(10);
          this.recipes = response.data.recipes;
        }
        this.updateDisplayedRecipes(); // Set initial displayed recipes
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    },

    updateDisplayedRecipes() {
      // Calculate the start and end indices for the recipes to display
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.displayedRecipes = this.recipes.slice(startIndex, endIndex);
    },
    nextPage() {
      // Navigate to the next page if there's a next page
      if (this.hasNextPage) {
        this.currentPage += 1;
        this.updateDisplayedRecipes();
      }
    },
    previousPage() {
      // Navigate to the previous page if there's a previous page
      if (this.hasPreviousPage) {
        this.currentPage -= 1;
        this.updateDisplayedRecipes();
      }
    },
    refreshRecipes() {
      // Refresh recipes (for main page)
      this.updateRecipesBackEnd();
    },
    determineParentPageName() {
      // Determine the page type based on the current route
      const routeName = this.$route.name;
      if (routeName === "main") {
        this.parentPageName = "main";
      } else if (routeName === "favorites") {
        this.parentPageName = "favorites";
      } else if (routeName === "private") { // Ensure this matches the route name for the private page
        this.parentPageName = "private";
      } else if (routeName === "search") {
        this.parentPageName = "search";
      }
    },
    handleFavoriteToggle(recipeId) {
      if (this.parentPageName === 'favorites') {
        const recipeIndex = this.recipes.findIndex(r => r.id === recipeId);
        
        // If the recipe is found in the favorites
        if (recipeIndex !== -1) {
          // Remove the recipe from the favorites list
          this.recipes.splice(recipeIndex, 1); // Remove from the full favorites list
          
          // Now check if the recipe is in the currently displayed list
          const displayedIndex = this.displayedRecipes.findIndex(r => r.id === recipeId);
          
          // If the recipe is displayed, remove it from the displayed list
          if (displayedIndex !== -1) {
            this.displayedRecipes.splice(displayedIndex, 1); // Remove from displayed list
            
            // Now, we need to check if we can fill the gap
            this.fillDisplayedRecipes();
          }
        } else {
          // If the recipe is not found, it means it was already removed (if applicable)
          console.warn('Recipe not found in favorites:', recipeId);
        }
      }
    },
    fillDisplayedRecipes() {
      // Calculate how many more recipes are needed
      const numberOfNeededRecipes = this.pageSize - this.displayedRecipes.length;
      
      if (numberOfNeededRecipes > 0) {
        // Start filling from the next recipe in the full list
        const startIndex = this.currentPage * this.pageSize;
        
        // Loop through the remaining recipes and add them to displayedRecipes
        for (let i = startIndex + this.pageSize; i < this.recipes.length && numberOfNeededRecipes > 0; i++) {
          this.displayedRecipes.push(this.recipes[i]); // Add next available recipe
          numberOfNeededRecipes--; // Decrease the count of needed recipes
        }
      }
      
      // Update the current page if displayedRecipes is empty
      if (this.displayedRecipes.length === 0 && this.hasPreviousPage) {
        this.previousPage(); // Navigate to the previous page
      }
      
      // If necessary, you may call updateDisplayedRecipes() if needed to ensure state consistency
      this.updateDisplayedRecipes();
    },
  },
};
</script>


<style lang="scss" scoped>
.rotate-on-hover {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.rotate-on-hover:hover {
  transform: rotate(360deg) scale(1.2);
}

.recipe-preview-container {
  background-color: rgba(248, 245, 237, 0.9);
  padding: 22px 36px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
</style>
