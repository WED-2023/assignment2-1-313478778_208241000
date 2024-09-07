<template>
  <div>
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
      <b-button type="reset" variant="danger" style="width: 80px;">Reset</b-button>
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
          style="cursor: pointer; text-decoration: underline; color: #0000EE"
          @click="handleToggleForm"
          >Login here</span
        >
      </div>
    </b-form>
  </div>
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
  .form-group {
    margin-bottom: 1rem;
  }
  .title {
    text-align: center;
    margin-bottom: 1rem;
  }
  .mt-3 {
    margin-top: 1rem;
  }
</style>
