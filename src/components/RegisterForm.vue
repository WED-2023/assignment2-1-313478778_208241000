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
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          Your password should be <strong>strong</strong>.
          <br />
          For that, your password should be also:
        </b-form-text>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.length"
        >
          Have length between 5-10 characters long
        </b-form-invalid-feedback>
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
        type="submit"
        variant="primary"
        style="width:370px;"
        class="ml-3 w-70"
      >
        Register
      </b-button>

      <!-- Login Prompt -->
      <div class="mt-3">
        You have an account already?
        <span
          class="login-prompt"
          @click="handleToggleForm"
          >Login here</span
        >
      </div>
    </b-form>
  </b-card>
</template>

<script>
  import {
    required,
    minLength,
    maxLength,
    alpha,
    sameAs,
  } from "vuelidate/lib/validators";
  import countries from "../assets/countries";

  export default {
    name: "RegisterForm",
    props: {
      toggleForm: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        form: {
          username: "",
          country: null,
          password: "",
          confirmedPassword: "",
        },
        countries: [{ value: null, text: "", disabled: true }],
      };
    },
    validations: {
      form: {
        username: {
          required,
          length: (u) => minLength(3)(u) && maxLength(8)(u),
          alpha,
        },
        country: {
          required,
        },
        password: {
          required,
          length: (p) => minLength(5)(p) && maxLength(10)(p),
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
      onRegister() {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        this.$emit("submit", this.form);
      },
      onReset() {
        this.form = {
          username: "",
          country: null,
          password: "",
          confirmedPassword: "",
        };
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
    color: #1e3a8a; /* Apply your blue color */
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
