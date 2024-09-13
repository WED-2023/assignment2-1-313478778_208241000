<!-- AddRecipeModal.vue -->
<template>
  <div>
    <b-modal id="add-recipe-modal" title="Add New Recipe" centered>
      <!-- Your modal content and form here -->
      <b-form @submit.prevent="createRecipe" @reset.prevent="onReset">
        <!-- Image URL -->
        <b-form-group label="Image:" label-for="image">
          <b-form-input
            id="image"
            v-model="form.image"
            type="text"
            :state="validateState('image')"
            placeholder="Image URL"
          ></b-form-input>
          <b-form-invalid-feedback :state="validateState('image')">
            Image is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <!-- Title -->
        <b-form-group label="Recipe Name:" label-for="title">
          <b-form-input
            id="title"
            v-model="$v.form.title.$model"
            type="text"
            :state="validateState('title')"
            placeholder="Enter recipe name"
          ></b-form-input>
        </b-form-group>

        <!-- Ready Minutes -->
        <b-form-group label="Preparation Time:" label-for="readyInMinutes">
          <b-form-input
            id="readyInMinutes"
            v-model="$v.form.readyInMinutes.$model"
            type="text"
            :state="validateState('readyInMinutes')"
            placeholder="Enter preparation time in minutes"
          ></b-form-input>
        </b-form-group>

        <!-- Dietary Options -->
        <b-form-checkbox v-model="$v.form.glutenFree.$model" switch>Gluten free?</b-form-checkbox>
        <b-form-checkbox v-model="$v.form.vegan.$model" switch>Vegan?</b-form-checkbox>
        <b-form-checkbox v-model="$v.form.vegetarian.$model" switch>Vegetarian?</b-form-checkbox>

        <!-- Ingredients -->
        <b-form-group label="Ingredients:" label-for="ingredients">
          <b-form-textarea
            id="ingredients"
            v-model="$v.form.ingredients.$model"
            :state="validateState('ingredients')"
            placeholder="Enter ingredients separated by ','"
            rows="4"
          ></b-form-textarea>
        </b-form-group>

        <!-- Preparation Instructions -->
        <b-form-group label="Preparation Instructions:" label-for="prepInstructions">
          <b-form-textarea
            id="prepInstructions"
            v-model="$v.form.prepInstructions.$model"
            :state="validateState('prepInstructions')"
            placeholder="Enter instructions separated by ','"
            rows="4"
          ></b-form-textarea>
        </b-form-group>

        <!-- Number of Dishes -->
        <b-form-group label="Number of Dishes:" label-for="numberOfDishes">
          <b-form-input
            id="numberOfDishes"
            v-model="$v.form.numberOfDishes.$model"
            type="text"
            :state="validateState('numberOfDishes')"
            placeholder="Enter number of servings"
          ></b-form-input>
        </b-form-group>

        <b-button class="btn-primary" type="reset" pill>Reset</b-button>
        <b-button pill type="submit" class="btn-info">Create Recipe</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        image: "",
        title: "",
        readyInMinutes: "",
        glutenFree: false,
        vegan: false,
        vegetarian: false,
        ingredients: "",
        prepInstructions: "",
        numberOfDishes: "",
      },
    };
  },
  validations: {
    form: {
      image: { required },
      title: { required },
      readyInMinutes: { required, digit: (p) => p && /\d/.test(p) },
      ingredients: { required },
      prepInstructions: { required },
      numberOfDishes: { required, digit: (p) => p && /\d/.test(p) },
    },
  },
  methods: {
    async createRecipe() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // Handle recipe creation logic here
    },
    onReset() {
      this.form = {
        image: "",
        title: "",
        readyInMinutes: "",
        glutenFree: false,
        vegan: false,
        vegetarian: false,
        ingredients: "",
        prepInstructions: "",
        numberOfDishes: "",
      };
      this.$v.$reset();
    },
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
  },
};
</script>

<style scoped>
.container {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
</style>
