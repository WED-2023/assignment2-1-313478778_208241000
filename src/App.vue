<template>
  <div id="app">
    <NavBar/>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: 'Assistant', sans-serif; /* Apply Assistant font globally */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: 
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('@/assets/background6.webp') center center / cover no-repeat;
  background-attachment: fixed; /* Keeps the image fixed when scrolling */
  overflow: hidden; /* Ensure content doesn't overflow */
}

.content {
  padding-top: 80px; /* Adjust based on navbar height */
  position: relative; /* Ensure proper stacking context */
}
</style>
