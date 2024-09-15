<template>
    <div>
      <b-overlay
        :show="isVisible"
        class="d-flex align-items-center justify-content-center"
        @click="closeModal"
        style="background: rgba(0, 0, 0, 0.6); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1050;"
      >
        <b-card class="add-recipe-popup" @click.stop>
          <!-- Close Button styled as a red X -->
          <b-button
  variant="link"
  @click="closeModal"
  class="close-button"
>
  close
</b-button>


          
          <b-card-title>Add New Recipe</b-card-title>
          <b-card-body>
            <!-- Toast for Feedback -->
            <b-toast
              id="recipe-toast"
              :title="toastTitle"
              :visible="toastVisible"
              @hidden="toastVisible = false"
              :variant="toastVariant"
              auto-hide-delay="3000"
              solid
              toaster="b-toaster-top-center"
            >
              {{ toastMessage }}
            </b-toast>
  
            <!-- Recipe Form -->
            <b-form @submit.prevent="createRecipe" @reset.prevent="onReset">
              <!-- Title (Recipe Name) -->
              <b-form-group label="Recipe Name:" label-for="title">
                <b-form-input
                  id="title"
                  v-model="$v.form.title.$model"
                  type="text"
                  :state="validateState('title')"
                  placeholder="Enter recipe name"
                ></b-form-input>
              </b-form-group>
  
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
  
              <!-- Preparation Time -->
              <b-form-group label="Preparation Time:" label-for="readyInMinutes">
                <b-form-input
                  id="readyInMinutes"
                  v-model="$v.form.readyInMinutes.$model"
                  type="text"
                  :state="validateState('readyInMinutes')"
                  placeholder="Enter preparation time in minutes"
                ></b-form-input>
              </b-form-group>
  
              <b-form-checkbox v-model="$v.form.glutenFree.$model" switch>
                Gluten free
              </b-form-checkbox>
              <b-form-checkbox v-model="$v.form.vegetarian.$model" switch>
                Vegetarian
              </b-form-checkbox>
              <b-form-checkbox v-model="$v.form.vegan.$model" switch>
                Vegan
              </b-form-checkbox>
              
  
              <!-- Ingredients -->
              <b-form-group label="Ingredients:" label-for="ingredients">
                <b-form-textarea
                  id="ingredients"
                  v-model="$v.form.ingredients.$model"
                  :state="validateState('ingredients')"
                  placeholder="Enter ingredients separated by ' , ' . For example: chicken - 1 kg, beer - 1 cup."
                  rows="2"
                ></b-form-textarea>
              </b-form-group>
  
              <!-- Instructions -->
              <b-form-group label="Preparation Instructions:" label-for="prepInstructions">
                <b-form-textarea
                  id="prepInstructions"
                  v-model="$v.form.prepInstructions.$model"
                  :state="validateState('prepInstructions')"
                  placeholder="Enter instructions separated by ' , ' . For example: Preheat oven to 350°F, Mix dry ingredients."
                  rows="2"
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
  
              <div class="d-flex justify-content-end">
                <b-button type="reset" pill class="btn-primary">Reset</b-button>
                <b-button variant="primary" vartype="submit" pill class="ml-3 w-70">Create Recipe</b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card>
      </b-overlay>
    </div>
  </template>
  
  <script>
  import { required } from 'vuelidate/lib/validators';
  
  export default {
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        form: {
          image: '',
          title: '',
          readyInMinutes: '',
          glutenFree: false,
          vegan: false,
          vegetarian: false,
          ingredients: '',
          prepInstructions: '',
          numberOfDishes: '',
        },
        toastTitle: '',
        toastMessage: '',
        toastVariant: 'success',
        toastVisible: false,
        validated: false,
      };
    },
    validations: {
      form: {
        image: { required },
        title: { required },
        readyInMinutes: { required, digit: (p) => p && /\d/.test(p) },
        glutenFree: { required },
        vegan: { required },
        vegetarian: { required },
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
        try {
          const response = await this.axios.post(`${this.$root.store.server_domain}/users/my_recepies`, {
            image: this.form.image,
            title: this.form.title,
            readyInMinutes: this.form.readyInMinutes,
            glutenFree: this.form.glutenFree,
            vegan: this.form.vegan,
            vegetarian: this.form.vegetarian,
            ingredients: this.form.ingredients,
            instructions: this.form.prepInstructions,
            numberOfDishes: this.form.numberOfDishes,
          },
          { withCredentials: true });
          this.toastTitle = 'Success';
          this.toastMessage = `Recipe "${this.form.title}" created successfully!`;
          this.toastVariant = 'success';
          this.toastVisible = true;
          this.onReset();
          this.$emit('close');
        } catch (err) {
          console.log(err.response);
          this.toastTitle = 'Error';
          this.toastMessage = err.response ? err.response.data : 'Failed to create recipe';
          this.toastVariant = 'danger';
          this.toastVisible = true;
        }
      },
      onReset() {
        this.form = {
          image: '',
          title: '',
          readyInMinutes: '',
          glutenFree: false,
          vegan: false,
          vegetarian: false,
          ingredients: '',
          prepInstructions: '',
          numberOfDishes: '',
        };
        this.$nextTick(() => {
          this.$v.$reset();
        });
      },
      closeModal() {
        this.$emit('close');
      },
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
    },
  };
  </script>
  
  <style scoped>
  .add-recipe-popup {
  width: 90%; /* Change width to a percentage for responsiveness */
  max-width: 600px; /* Set a maximum width */
  max-height: 90vh; /* Restrict height to 90% of the viewport height */
  overflow-y: auto; /* Add vertical scrolling if content overflows */
  background: white;
  padding: 20px;
  z-index: 1051;
  position: relative; /* To position the close button correctly */
}

  
  
  .add-recipe-popup,
  .add-recipe-popup * {
    font-family: 'Assistant', sans-serif; /* Consistent font family */
    color: #1e3a8a; /* Consistent text color */
  }
  .btn-primary,
.btn-info {
  color: #ffffff !important; /* Set font color to white */
}
  .b-card-title {
    font-size: 2rem; /* Adjusted for a prominent title */
    font-weight: 600; /* Semi-bold to match the other pages */
    color: #1e3a8a; /* Consistent color */
    text-align: center; /* Centered title */
    margin-bottom: 20px;
  }
  
  .b-form-group label {
    font-weight: 600; /* Bold labels for form inputs */
    color: #1e3a8a; /* Matching color */
  }
  
  .b-button {
    font-family: 'Assistant', sans-serif;
    color: #ffffff; /* White text color for contrast */
    background-color: #1e3a8a; /* Matching button color */
  }
  
  .b-button:hover {
    background-color: #0c4a6e; /* Darker blue on hover */
  }
  
  .close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem; /* Font size */
  color: black; /* White color for the X */
  border: none; /* No border */
  /* border-radius: 50%; Rounded shape for the button */
  padding: 5px; /* Padding for better appearance */
  cursor: pointer;
  text-decoration: none; /* Remove underline */
}

.close-button:hover {
  background-color: rgb(189, 2, 2); /* Darker red on hover */
  color: white;
  text-decoration: none; /* Remove underline */
}

  </style>
  