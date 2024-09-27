<template>
  <b-container>
    <b-row class="text-center">
      <b-col class="d-flex justify-content-center align-items-center">
        <WelcomUser 
          welcomeMessage="Welcome to Your Favorite Recipes!"
          mainText="Here, you can easily revisit all the delicious recipes you've saved. Whether you want to recreate a classic dish or
          experiment with something new, your favorites are just a click away.
          Enjoy the convenience of having all your go-to recipes in one place,
          making meal planning and cooking a breeze. Dive back into your culinary creations and let your taste buds explore!"
        />
      </b-col>
      <b-col>
        <RecipePreviewList title="Your Favorites:" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
import WelcomUser from "../components/WelcomUser.vue";

export default {
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
        "You must be logged in to access the favorites page.", 
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
