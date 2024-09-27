<template>
  <b-container>
    <b-row class="text-center">
      <b-col class="d-flex justify-content-center align-items-center">
          <WelcomUser welcomeMessage="Welcome to Your Private Recipes!"
          mainText="In this space, you can easily manage and revisit the recipes you’ve crafted.
          Whether you want to tweak a beloved dish or embark on a new cooking adventure, your personal collection awaits.
          Take advantage of this organized hub to share your culinary passion and create memorable meals!" />
      </b-col>
      <b-col>
        <RecipePreviewList title="Your Recipes:"></RecipePreviewList>
      </b-col>
    </b-row>
  </b-container>
</template>
  
<script>
  import RecipePreviewList from "../components/RecipePreviewList.vue";
  import WelcomUser from "../components/WelcomUser.vue";

  export default 
  {
    components: {
      RecipePreviewList,
      WelcomUser,
    },
    data() {
      return {};
    },
    computed: {
      isLoggedIn() {
      return !!this.$root.store.username; // Return true if the user is logged in
      },
    },
    methods: {
    showLoginRequiredToast() {
      this.$root.toast(
        "Access Denied", 
        "You must be logged in to access the private page.", 
        "warning",
      );
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.showLoginRequiredToast();
      this.$router.push("/login"); // Change 'LoginPage' to the actual name of your login route
    }
  },
};
</script>

<style lang="scss" scoped>
/* Your existing styles */
</style>
