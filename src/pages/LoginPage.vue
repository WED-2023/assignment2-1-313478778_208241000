<template>
  <LoginForm :toggleForm="toggleForm"/>
</template>

<script>
  import LoginForm from "../components/LoginForm.vue"; // Adjust the path if necessary

  export default {
    components: {
      LoginForm
    },
    methods: {
      toggleForm() {
        console.log("Toggle form called");
      }
    }
  };
</script>

<style lang="scss" scoped>  
</style>