<template>
  <div class="container">
    <h1 class="title">Search Page</h1>

    <!-- Small Buttons Above Search Input -->
    <div class="mt-3">
      <h6 class="mb-2 font-weight-bold">Amount of results</h6>
      <b-button-group>
        <b-button
          v-for="result in results"
          :key="result"
          :variant="result === selectedResult ? 'primary' : 'outline-primary'"
          @click="selectResult(result)"
          class="btn-lg"
        >
          {{ result }}
        </b-button>
      </b-button-group>
    </div>

    <!-- Search Input with Buttons -->
    <div class="d-flex justify-content-between align-items-center mt-3">
      <b-form-input v-model="text" placeholder="Look for a recipe..." class="w-75 taller-input mr-2"></b-form-input>
      <div>
        <b-button variant="success" class="btn-lg">Search</b-button> <!-- Larger button -->
        <b-button variant="secondary" class="ml-2 btn-lg" @click="resetSearch">Reset</b-button> <!-- Smaller button -->
      </div>
    </div>

    <!-- Select Dropdowns -->
    <div class="row mt-3">
      <div v-for="(select, index) in selects" :key="index" class="col-sm-4">
        <h6 class="mb-2 font-weight-bold">{{ select.title }}</h6>
        <b-form-select v-model="select.selected" :options="select.options" size="sm" class="mt-1"></b-form-select>
      </div>
    </div>

    <!-- Selected Value Display -->
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
import { BFormSelect, BFormInput, BButton, BButtonGroup } from 'bootstrap-vue';
import { cuisines } from '@/services/cuisines.js'; // Adjust the path according to your file structure
import { diets } from '@/services/diets.js'; 
import { intolerances } from '../services/intolerances';

export default {
  components: {
    BFormSelect,
    BFormInput,
    BButton,
    BButtonGroup
  },
  data() {
    return {
      text: '',
      selectedResult: '5', // Set default value here
      selects: [
        { title: 'Cuisine', selected: null, options: [] },
        { title: 'Diet', selected: null, options: [] },
        { title: 'Intolerance', selected: null, options: [] }
      ]
    };
  },
  computed: {
    selected() {
      return this.selects.map(select => select.selected);
    },
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
    selectResult(result) {
      this.selectedResult = result;
      // Perform any other actions when selecting a result
    },
    resetSearch() {
      this.text = '';
      this.selects.forEach(select => {
        select.selected = null;
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}

.title {
  margin-bottom: 20px;
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
</style>
