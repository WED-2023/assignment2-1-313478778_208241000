<template>
  <b-container>
    <register-form @submit="register"></register-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
    <b-alert class="mt-2" v-if="loading" variant="info" show>
      Registering, please wait...
    </b-alert>
  </b-container>
</template>

<script>
  import RegisterForm from "../components/RegisterForm.vue";
  import { mockRegister } from "../services/auth.js";

  export default {
    name: "RegisterPage",
    components: {
      RegisterForm,
    },
    data() {
      return {
        form: {
          submitError: undefined,
        },
        loading: false,
      };
    },
    methods: {
      async register(formData) {
        this.loading = true;
        this.form.submitError = undefined; // Clear previous errors
        try {
          await mockRegister(formData);
          this.$router.push("/login");
        } catch (err) {
          this.form.submitError =
            err.response?.data.message || "Register failed.";
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
