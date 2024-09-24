<template>
  <!-- Login card component -->
  <b-card class="custom-card">
    <!-- Title for the login form -->
    <h1 class="title mb-4">Login</h1>

    <!-- Login form with prevent default submit behavior -->
    <b-form @submit.prevent="onLogin">
      <!-- Username input field with validation -->
      <b-form-group
        id="input-group-Username"
        label-cols-sm="4"
        label="Username:"
        label-for="username"
      >
        <!-- Input bound to Vuelidate's $model for validation -->
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <!-- Error message shown when username validation fails -->
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Password input field with validation -->
      <b-form-group
        id="input-group-Password"
        label-cols-sm="4"
        label="Password:"
        label-for="Password"
      >
        <!-- Input bound to Vuelidate's $model for validation -->
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <!-- Error message shown when password validation fails -->
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Submit button that is disabled while the form is submitting -->
      <b-button
        :disabled="isSubmitting"
        type="submit"
        variant="primary"
        style="width:100px;"
        class="mx-auto w-100"
      >
        Login
      </b-button>

      <!-- Option to switch to the registration form -->
      <div class="mt-4">
        Do not have an account yet?
        <span
          class="register-prompt"
          @click="handleToggleForm"
        >Register here
        </span>
      </div>
    </b-form>

    <!-- Alert box for displaying login errors -->
    <b-alert
      class="mt-4"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }} <!-- Error message -->
    </b-alert>
  </b-card>
</template>

<script>
  // Import the 'required' validation from Vuelidate and mockLogin function for login
  import { required } from "vuelidate/lib/validators";
  import { mockLogin } from "../services/auth.js";

  export default {
    name: "LoginForm", // Component name
    props: {
      // Prop to allow toggling between login and register forms
      toggleForm: {
        type: Function,
        // required: true,
      },
    },
    data() {
      return {
        // Form data and submission error state
        form: {
          username: "", // Input for the username
          password: "", // Input for the password
          submitError: undefined, // Error message for submission failures
        },
        isSubmitting: false, // State to handle disabling the submit button during the request
      };
    },
    validations: {
      // Vuelidate validation rules for the form
      form: {
        username: {
          required, // Username is required
        },
        password: {
          required, // Password is required
        },
      },
    },
    methods: {
      /**
       * Helper method to return the validation state of a form field.
       * It checks if the field has been touched and whether there are any errors.
       * @param {String} param - The field name to validate (username or password)
       * @returns {Boolean|null} - Returns `true` if valid, `false` if invalid, `null` if untouched
       */
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null; // Returns null for untouched, false for invalid, true for valid
      },

      /**
       * Handles the login process. Sends a POST request to the authentication API.
       * If the login is successful, it updates the store and navigates to the home page.
       * If there's an error, it sets the error message in the form.
       */
      async Login() {
        try {
          // API request to authenticate the user
          const response = await this.axios.post(
            `${this.$root.store.server_domain}/auth/login`,
            {
              username: this.form.username,
              password: this.form.password,
            },
            { withCredentials: true }
          );

          // If login is successful, redirect to the home page
          if (response.data.success) {
            this.$root.store.login(this.form.username); // Save the username in store
            this.$router.push("/").catch((err) => { // Redirect to the home page
              if (err.name !== "NavigationDuplicated") {
                console.error(err);
              }
            });
          } else {
            // Set error message if login fails
            this.form.submitError = response.data.message || 'Login failed';
          }
        } catch (err) {
          // Handle any errors during the login attempt
          this.form.submitError = err.response?.data?.message || 'An error occurred during login. Please try again.';
        }
      },

      /**
       * Called when the form is submitted. It validates the form, disables the button,
       * and attempts the login process. The button is re-enabled after the request is done.
       */
      onLogin() {
        this.form.submitError = undefined; // Clear previous error
        this.$v.form.$touch(); // Mark all fields as touched for validation
        if (this.$v.form.$anyError) {
          return; // Return early if there are validation errors
        }
        this.isSubmitting = true; // Disable the button while submitting
        this.Login().finally(() => {
          this.isSubmitting = false; // Re-enable the button after the login attempt
        });
      },

      /**
       * Handles toggling between login and register forms.
       * If the current route is "/", it toggles using the provided prop function.
       * If on the login page, it navigates to the register page.
       */
      handleToggleForm() {
        const currentRoute = this.$route.path;
        if (currentRoute === "/") {
          this.toggleForm(); // Toggle form in case on home route
        } else if (currentRoute === "/login") {
          this.$router.push("/register"); // Navigate to the register page
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  /* Custom styles for form elements and login card */
  .form-group label {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #1e3a8a; /* Apply your blue color */
  }

  .form-control {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #1e3a8a; /* Apply your blue color */
  }

  /* Title styling */
  .title {
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    font-size: 2.5rem;
    color: #1e3a8a; /* Apply your blue color */
  }

  /* Card styling for the login form */
  .custom-card {
    background-color: rgba(248, 245, 237, 0.90) !important; /* Cream color similar to your navbar */
    border: none; /* Optional: remove the border if not needed */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for depth */
    color: #1e3a8a; /* Optional: text color */
    border-radius: 32px;
    max-width: 500px; /* Adjust this value as needed */
    margin: 0 auto; /* Center the card horizontally */
  }

  .register-prompt {
    cursor: pointer;
    text-decoration: underline;
    color: #0000EE; /* Apply your blue color */
    font-family: 'Assistant', sans-serif; /* Apply custom font */
  }
</style>
