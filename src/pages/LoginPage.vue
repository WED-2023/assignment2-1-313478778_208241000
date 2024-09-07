<template>
  <div>
    <!-- <login-form /> -->
    <LoginForm :toggleForm="toggleForm"/>
  </div>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue"; // Adjust the path if necessary

  export default {
    components: {
      LoginForm
    },
    methods: {
      toggleForm(){
        console.log("Toggle form called")
      }
    }
  };
</script>

<style scoped>
  /* Add your styles here if needed */
</style>
