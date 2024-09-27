<template>
  <b-container>
    <b-row class="text-center">
      <b-col class="d-flex justify-content-center align-items-center">
        <b-col v-if="this.$root.store.username">
          <WelcomUser/>
        </b-col>
        <b-col v-else>
            <LoginForm v-if="showLoginForm" :toggle-form="toggleForm" />
            <RegisterForm v-else :toggle-form="toggleForm" />
        </b-col>
      </b-col>
      <b-col>
        <RecipePreviewList title="Explore:"></RecipePreviewList>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue";
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
</style>
