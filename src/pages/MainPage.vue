<template>
  <b-container class="bv-example-row">
    <b-col class="my-4">
      <h1 class="text-center">Site Title</h1>
    </b-col>

    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col>
          <RecipePreviewList title="Title"></RecipePreviewList>
        </b-col>
        <b-col class="d-flex justify-content-center align-items-center">
          <b-card style="border-radius: 32px;">
            <LoginForm v-if="showLoginForm" :toggle-form="toggleForm" />
            <RegisterForm v-else :toggle-form="toggleForm" />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue"; // Adjust the path if necessary
  import RecipePreviewList from "../components/RecipePreviewList.vue";
  import RegisterForm from "../components/RegisterForm.vue";

  export default {
    components: {
      LoginForm,
      RegisterForm,
      RecipePreviewList,
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
  /* Add your custom styles here if necessary */
</style>
