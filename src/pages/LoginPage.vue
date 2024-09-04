<template>
  <div>
    <login-form />
  </div>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue"; // Adjust the path if necessary

  export default {
    components: {
      "login-form": LoginForm,
    },
  };
</script>

<style scoped>
  /* Add your styles here if needed */
</style>
