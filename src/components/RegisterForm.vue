<template>
  <b-card class="custom-card">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <!-- Username Input -->
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username should be alphabetic
        </b-form-invalid-feedback>
      </b-form-group>


      <!-- First Name Input -->
      <b-form-group
        id="input-group-firstname"
        label-cols-sm="3"
        label="First Name:"
        label-for="firstname"
      >
        <b-form-input
          id="firstname"
          v-model="$v.form.firstname.$model"
          type="text"
          :state="validateState('firstname')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstname.required">
          First name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.firstname.alpha">
          First name should contain only alphabetic characters
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Last Name Input -->
      <b-form-group
        id="input-group-lastname"
        label-cols-sm="3"
        label="Last Name:"
        label-for="lastname"
      >
        <b-form-input
          id="lastname"
          v-model="$v.form.lastname.$model"
          type="text"
          :state="validateState('lastname')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastname.required">
          Last name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.lastname.alpha">
          Last name should contain only alphabetic characters
        </b-form-invalid-feedback>
      </b-form-group>
      
      <!-- Email Input -->
      <b-form-group
        id="input-group-email"
        label-cols-sm="3"
        label="Email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="$v.form.email.$model"
          type="email"
          :state="validateState('email')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">
          Email is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.email.email">
          Please enter a valid email address
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Country Input -->
      <b-form-group
        id="input-group-country"
        label-cols-sm="3"
        label="Country:"
        label-for="country"
      >
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback v-if="!$v.form.country.$model">
          Country is required
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Password Input -->
      <b-form-group
        id="input-group-password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          @input="checkPasswordStrength"
          :state="validateState('password')"
        ></b-form-input>

        <!-- Feedback for empty password -->
        <b-form-invalid-feedback v-if="passwordStrength === 'Password is required'">
          Password is required
        </b-form-invalid-feedback>

        <!-- General instruction for password requirements -->
        <b-form-text>
          Password must be 5 - 10 characters long, including at least 1 number and 1 special character.
        </b-form-text>

        <!-- Feedback for weak password -->
        <b-form-invalid-feedback v-if="passwordStrength === 'Too weak'">
          Your password is too weak.
        </b-form-invalid-feedback>

        <!-- Feedback for too many characters -->
        <b-form-invalid-feedback v-if="passwordStrength === 'Too many characters'">
          Your password has too many characters.
        </b-form-invalid-feedback>

        <!-- Feedback for medium password -->
        <b-form-invalid-feedback v-if="passwordStrength === 'Medium'">
          Your password is medium. Ensure it has at least 1 number and 1 special character.
        </b-form-invalid-feedback>

        <!-- Feedback for strong password -->
        <b-form-text v-if="passwordStrength === 'Strong'" text-variant="success">
          Your password is strong!
        </b-form-text>
      </b-form-group>


      <!-- Confirm Password Input -->
      <b-form-group
        id="input-group-confirmedPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmedPassword"
      >
        <b-form-input
          id="confirmedPassword"
          type="password"
          v-model="$v.form.confirmedPassword.$model"
          :state="validateState('confirmedPassword')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
          Password confirmation is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmedPassword.sameAsPassword"
        >
          The confirmed password is not equal to the original password
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Buttons -->
      <b-button type="reset" variant="secondary" style="width: 80px;">Reset</b-button>
      <b-button
        :disabled="isSubmitting"
        type="submit"
        variant="primary"
        style="width:370px;"
        class="ml-3 w-70"
      >
        Register
      </b-button>

      <!-- Login Prompt -->
      <div class="mt-4">
        You have an account already?
        <span
          class="login-prompt"
          @click="handleToggleForm"
          >Login here</span
        >
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
      Register failed: {{ form.submitError }}
    </b-alert>
    <b-alert
    class="mt-2"
    v-if="isSubmitting"
    variant="info"
    show>
      Registering, please wait...
    </b-alert>
  </b-card>
</template>

<script>
  import {
    required,
    minLength,
    maxLength,
    alpha,
    sameAs,
    email,
  } from "vuelidate/lib/validators";

  import countries from "../assets/countries";
  import { mockRegister } from "../services/auth";

  export default {
    name: "RegisterForm",
    props: {
      toggleForm: {
        type: Function,
        // required: true,
      },
    },
    data() {
      return {
        form: this.form = this.initialFormState(),
        countries: [{ value: null, text: "Select your country", disabled: true }, ...countries],
        isSubmitting: false, // State to handle disabling the submit button during the request
        passwordStrength: ''
      };
    },
    validations: {
      form: {
        username: {
          required,
          length: (u) => minLength(3)(u) && maxLength(8)(u),
          alpha,
        },
        firstname:{
          required,
          alpha,
        },
        lastname:{
          required,
          alpha,
        },
        email:{
          required,
          email,
        },
        country: {
          required,
        },
        password: {
          required,
          length: (p) => minLength(5)(p) && maxLength(10)(p),
          hasNumber: (p) => /\d/.test(p), // Check for at least one number
          hasSpecialChar: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), // Check for at least one special character
        },
        confirmedPassword: {
          required,
          sameAsPassword: sameAs("password"),
        },
      },
    },
    mounted() {
      this.countries.push(...countries);
    },
    methods: {
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      async Register() {
        try {
          // API request to register the user
          const response = await this.axios.post(
            `${this.$root.store.server_domain}/auth/register`,
            {
              username: this.form.username,
              firstname: this.form.firstname,
              lastname: this.form.lastname,
              email: this.form.email,
              country: this.form.country,
              password: this.form.password,

            },
            { withCredentials: true } // Include credentials if needed
          );

          // If registration is successful, redirect to the login page
          if (response.data.success) {
            this.$root.toast("Register", "User registered successfully! Please login.", "success");
            this.$router.push("/login").catch((err) => {
              if (err.name !== "NavigationDuplicated") {
                console.error(err);
              }
            });
          } else {
            // Set error message if registration fails
            this.form.submitError = response.data.message || "Registration failed";
          }
        } catch (err) {
          // Handle any errors during the registration attempt
          this.form.submitError = err.response?.data?.message || "An error occurred during registration. Please try again.";
        }
      },
      onRegister() {
        this.form.submitError = undefined; // Clear previous erro
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        this.isSubmitting = true;
        this.Register().finally(()=> {
          this.isSubmitting=false;
        });
      },
      initialFormState() {
        return {
          username: "",
          firstname: "",
          lastname: "",
          email: "",
          country: null,
          password: "",
          confirmedPassword: "",
        };
      },
      onReset() {
        this.form = this.initialFormState();
        this.$nextTick(() => {
          this.$v.$reset();
        });
      },
      handleToggleForm() {
        const currentRoute = this.$route.path;
        if (currentRoute === "/") {
          this.toggleForm();
        } else if (currentRoute === "/register") {
          this.$router.push("/login");
        }
      },
      checkPasswordStrength() {
        const password = this.form.password;
        
        if (password.length === 0) {
          this.passwordStrength = 'Password is required';
        } else if (password.length < 5) {
          this.passwordStrength = 'Too weak';
        } else if (password.length > 10) {
          this.passwordStrength = 'Too many characters';
        } else {
          const hasNumber = /\d/.test(password); // Check for at least one number
          const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Check for at least one special character

          if (hasNumber && hasSpecialChar) {
            this.passwordStrength = 'Strong';
          } else {
            this.passwordStrength = 'Medium';
          }
        }
        // console.log(this.passwordStrength) //debug tool
      },
    },
  };
</script>

<style scoped>
  .title {
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    font-size: 2.5rem;
    color: #1e3a8a; /* Apply your blue color */
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #1e3a8a; /* Apply your blue color */
  }

  .form-control {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #1e3a8a; /* Apply your blue color */
  }

  .b-form-invalid-feedback {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #e74c3c; /* Keep feedback in a distinct color, typically red for errors */
  }

  .login-prompt {
    cursor: pointer;
    text-decoration: underline;
    color: #0000EE; /* Apply your blue color */
    font-family: 'Assistant', sans-serif; /* Apply custom font */
  }

  .mt-3 {
    margin-top: 1rem;
  }

  .b-button {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    font-weight: 600; /* Semi-bold for buttons */
  }
  .custom-card {
    background-color: rgba(248, 245, 237, 0.90) !important; /* Cream color similar to your navbar */
    border: none; /* Optional: remove the border if not needed */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add subtle shadow for depth */
    color: #1e3a8a; /* Optional: text color */
    border-radius: 32px;
    max-width: 520px; /* Adjust this value as needed */
    margin: 0 auto; /* Center the card horizontally */
  }
</style>
