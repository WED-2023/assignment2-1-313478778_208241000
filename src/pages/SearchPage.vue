<template>
  <b-card class="custom-card">
    <h1 class="title">Search Page</h1>

    <!-- Small Buttons Above Search Input -->
    <div class="mt-3">
      <h6 class="mb-2 font-weight-bold result-header">Amount of results</h6>
      <b-button-group>
        <b-button
          v-for="result in results"
          :key="result"
          :variant="result === selectedResult ? 'custom-active' : 'outline-custom'"
          @click="selectResult(result)"
          class="btn-lg result-button"
        >
          {{ result }}
        </b-button>
      </b-button-group>
    </div>

    <!-- Search Input with Buttons -->
    <div class="d-flex justify-content-between align-items-center mt-3">
      <b-form-input v-model="text" placeholder="Look for a recipe..." class="w-75 taller-input mr-2"></b-form-input>
      <div>
        <b-button class="btn-lg search-button" @click="performSearch">Search</b-button>
        <b-button variant="secondary" class="ml-2 btn-lg" @click="resetSearch">Reset</b-button>
      </div>
    </div>

    <!-- Select Dropdowns -->
    <div class="row mt-3">
      <div v-for="(select, index) in selects" :key="index" class="col-sm-4">
        <h6 class="mb-2 font-weight-bold">{{ select.title }}</h6>
        <b-form-select v-model="select.selected" :options="select.options" size="sm" class="mt-1"></b-form-select>
      </div>
    </div>

    <!-- Recipe Preview List -->
    <RecipePreviewList :numberOfRecipes="parseInt(selectedResult)" :recipes="recipes" v-if="recipes.length > 0" />
  </b-card>
</template>

<script>
import axios from "axios";
import RecipePreviewList from "../components/RecipePreviewList.vue";
import { cuisines } from "@/services/cuisines.js"; 
import { diets } from "@/services/diets.js";
import { intolerances } from "@/services/intolerances.js";

export default {
  components: {
    RecipePreviewList,
  },
  data() {
    return {
      text: '',
      selectedResult: '5', // Default number of results
      selects: [
        { title: 'Cuisine', selected: null, options: [] },
        { title: 'Diet', selected: null, options: [] },
        { title: 'Intolerance', selected: null, options: [] }
      ],
      recipes: [], // To store search results
    };
  },
  computed: {
    results() {
      return ['5', '10', '15'];
    }
  },
  mounted() {
    // Populate options for each select
    this.selects.forEach((select, index) => {
      switch (index) {
        case 0:
          select.options = [
            { value: null, text: 'Please select a cuisine' },
            ...cuisines.map(cuisine => ({ value: cuisine.toLowerCase(), text: cuisine }))
          ];
          break;
        case 1:
          select.options = [
            { value: null, text: 'Please select a diet' },
            ...diets.map(diet => ({ value: diet.value, text: diet.text }))
          ];
          break;
        case 2:
          select.options = [
            { value: null, text: 'Please select an intolerance' },
            ...intolerances.map(intolerance => ({ value: intolerance.toLowerCase(), text: intolerance }))
          ];
          break;
        default:
          select.options = [];
      }
    });
  },
  methods: {
    async performSearch() {
      if (this.text.trim() === '') {
        this.searchQueryEmpty = true;
        return;
      }
      this.searchQueryEmpty = false;

      try {
        const response = await axios.get("http://localhost:3000/recipes/search", {
          params: {
            recipeName: this.text,
            cuisine: this.selects[0].selected ? this.selects[0].selected : null,
            diet: this.selects[1].selected ? this.selects[1].selected : null,
            intolerance: this.selects[2].selected ? this.selects[2].selected : null,
            number: this.selectedResult
          }
        });

        const results = response.data;
        const allRecipes = [];

        // Fetch details for each recipe
        for (const result of results) {
          const currentId = result.id;
          const currentRecipeInfo = await axios.get(`http://localhost:3000/recipes/${currentId}/information`);
          allRecipes.push(currentRecipeInfo.data);
        }

        this.recipes = allRecipes;
        this.searchPerformed = true;
        this.noResultsFound = allRecipes.length === 0;
      } catch (error) {
        console.error("Search failed:", error);
        this.noResultsFound = true;
      }
    },
    selectResult(result) {
      this.selectedResult = result;
    },
    resetSearch() {
      this.text = '';
      this.selects.forEach(select => {
        select.selected = null;
      });
      this.recipes = [];
      this.searchPerformed = false;
      this.noResultsFound = false;
    }
  }
};
</script>



<style scoped>
.container {
  margin: 20px;
}

.title {
  font-size: 3rem;
  font-family: 'Assistant', sans-serif;
  color: #1e3a8a;
  margin-bottom: 20px;
}

.result-header {
  font-family: 'Assistant', sans-serif;
  color: #1e3a8a;
  font-weight: 600; /* Semibold */
}

.result-button {
  font-family: 'Assistant', sans-serif !important; /* Apply custom font */
  font-weight: 600; /* Semi-bold */
  color: #1e3a8a !important; /* Match button text color */
  border-color: #1e3a8a !important; /* Match border color */
  background-color: transparent !important; /* Ensure no background fill */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  margin: 2px;
}

/* Active state class from the HTML: Ensuring it matches the hover state */
.btn-custom-active {
  background-color: #1e3a8a !important; /* Same as hover effect */
  color: rgba(248, 245, 237, 0.90) !important; /* Light text color */
  border-color: #1e3a8a !important; /* Consistent border color */
}

.result-button:hover,
.btn-custom-active {
  background-color: #1e3a8a !important; /* Hover and active effect */
  color: rgba(248, 245, 237, 0.90) !important; /* Consistent text color */
}
.search-button {
  background-color: #1e3a8a !important; /* Blue color for button */
  color: rgba(248, 245, 237, 0.90) !important; /* Light text color */
  border-color: #1e3a8a !important; /* Blue border */
  font-family: 'Assistant', sans-serif !important; /* Apply the same font */
  font-weight: 600; /* Make text semi-bold */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
}

.search-button:hover {
  background-color: #0c4a6e !important; /* Slightly darker blue on hover */
  color: rgba(248, 245, 237, 0.90) !important; /* Keep text color light */
}
.outline-custom {
  border-color: #1e3a8a !important; /* Outline button border color */
  color: #1e3a8a !important; /* Outline button text color */
  font-family: 'Assistant', sans-serif !important; /* Consistent font */
}

.mb-2 {
  margin-bottom: 0.5rem; /* Adjust margin as needed */
}

.mt-1 {
  margin-top: 0.25rem; /* Adjust margin as needed */
}

.w-75 {
  width: 90%; /* Adjust width as needed */
}

.taller-input {
  height: 66px; /* Adjust height as needed */
}
.custom-card {
    background-color: rgba(248, 245, 237, 0.90) !important; /* Cream color similar to your navbar */
    border: none; /* Optional: remove the border if not needed */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add subtle shadow for depth */
    color: #1e3a8a; /* Optional: text color */
    border-radius: 32px;
    max-width: 1000px; /* Adjust this value as needed */
    margin: 0 auto; /* Center the card horizontally */
  }
</style>
