<template>
  <b-container>
    <b-row class="text-center">
      <b-col class="d-flex justify-content-center align-items-center">
        <b-col v-if="this.$root.store.username">
          <WelcomUser/>
        </b-col>
        <b-col v-else>
          <!-- <b-card class="custom-card"> -->
            <LoginForm v-if="showLoginForm" :toggle-form="toggleForm" />
            <RegisterForm v-else :toggle-form="toggleForm" />
          <!-- </b-card> -->
          <!-- <LoginForm v-if="showLoginForm" :toggle-form="toggleForm" />
          <RegisterForm v-else :toggle-form="toggleForm" /> -->
        </b-col>
      </b-col>
      <b-col>
        <RecipePreviewList title="Explore"></RecipePreviewList>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue"; // Adjust the path if necessary
  import RecipePreviewList from "../components/RecipePreviewList.vue";
  import RegisterForm from "../components/RegisterForm.vue";
  import WelcomUser from "../components/WelcomUser.vue";

  export default {
    components: {
      LoginForm,
      RegisterForm,
      RecipePreviewList,
      WelcomUser,
    },
    data() {
      return {
        showLoginForm: true, // Boolean state to toggle between forms
      };
    },
    methods: {
      toggleForm() {
        this.showLoginForm = !this.showLoginForm;
      },
    },
  };
</script>

<style lang="scss" scoped>
//   .custom-card {
//   background-color: rgba(248, 245, 237, 0.90) !important; /* Cream color similar to your navbar */
//   border: none; /* Optional: remove the border if not needed */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add subtle shadow for depth */
//   color: #1e3a8a; /* Optional: text color */
//   border-radius: 32px;
// }
</style>
