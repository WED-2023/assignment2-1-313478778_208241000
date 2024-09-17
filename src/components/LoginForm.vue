<template>
  <!-- <b-container> -->
    <b-card class="custom-card">
      <h1 class="title mb-4">Login</h1>
      <b-form @submit.prevent="onLogin">
        <b-form-group
          id="input-group-Username"
          label-cols-sm="4"
          label="Username:"
          label-for="Username"
        >
          <b-form-input
            id="Username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
          ></b-form-input>
          <b-form-invalid-feedback>
            Username is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-Password"
          label-cols-sm="4"
          label="Password:"
          label-for="Password"
        >
          <b-form-input
            id="Password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
          ></b-form-input>
          <b-form-invalid-feedback>
            Password is required
          </b-form-invalid-feedback>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          style="width:100px;display:block;"
          class="mx-auto w-100"
          >Login</b-button
        >
        <div class="mt-4">
          Do not have an account yet?
          <span
            style="cursor: pointer; text-decoration: underline; color: #0000EE"
            @click="handleToggleForm"
            >Register here
          </span>
        </div>
      </b-form>
      <b-alert
        class="mt-4"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Login failed: {{ form.submitError }}
      </b-alert>
    </b-card>
    
  <!-- </b-container> -->
</template>

<script>
  import { required } from "vuelidate/lib/validators";
  import { mockLogin } from "../services/auth.js";

  export default {
    name: "LoginForm",
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
          password: "",
          submitError: undefined,
        },
      };
    },
    validations: {
      form: {
        username: {
          required,
        },
        password: {
          required,
        },
      },
    },
    methods: {
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      async Login() {
        try {
          const success = true; // modify this to test the error handling
          const response = mockLogin(
            this.form.username,
            this.form.password,
            success
          );

          this.$root.store.login(this.form.username);
          this.$router.push("/");
        } catch (err) {
          this.form.submitError = err.response.data.message;
        }
      },
      onLogin() {
        this.form.submitError = undefined;
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        this.Login();
      },
      handleToggleForm() {
        const currentRoute = this.$route.path;
        if (currentRoute === "/") {
          this.toggleForm();
        } else if (currentRoute === "/login") {
          this.$router.push("/register");
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .form-group label {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #1e3a8a; /* Apply your blue color */
  }

  .form-control {
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    color: #1e3a8a; /* Apply your blue color */
  }
  .title {
    text-align: center;
    margin-bottom: 1rem;
    font-family: 'Assistant', sans-serif; /* Apply custom font */
    font-size: 2.5rem;
    color: #1e3a8a; /* Apply your blue color */
  }
  .custom-card {
    background-color: rgba(248, 245, 237, 0.90) !important; /* Cream color similar to your navbar */
    border: none; /* Optional: remove the border if not needed */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add subtle shadow for depth */
    color: #1e3a8a; /* Optional: text color */
    border-radius: 32px;
    max-width: 500px; /* Adjust this value as needed */
    margin: 0 auto; /* Center the card horizontally */
  }
</style>
