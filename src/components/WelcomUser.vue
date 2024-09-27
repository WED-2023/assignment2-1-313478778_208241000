<template>
  <div>
    <b-jumbotron
      :bg-variant="bgVariant"
      :text-variant="textVariant"
      class="custom-jumbotron"
    >
      <template #header>
        <span class="main-hello">{{ greetingMessage }}</span> <!-- Use computed property for greeting -->
      </template>
      <template #lead> {{ welcomeMessage }} </template>
      <p>{{ mainText }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "WelcomeUser",
  props: {
    welcomeMessage: {
      type: String,
      default: "Welcome to Recipedia!", // Default welcome message
    },
    mainText: {
      type: String,
      default: "Explore a world of delicious recipes, from quick meals to gourmet dishes, curated by top chefs. Whether you're a beginner or a seasoned cook, you'll find inspiration, tips, and ideas to create unforgettable meals for every occasion.", // Default main paragraph text
    },
    bgVariant: {
      type: String,
      default: "", // Jumbotron background variant (can be empty or customized)
    },
    textVariant: {
      type: String,
      default: "dark", // Jumbotron text variant (default is dark text)
    },
  },
  computed: {
    greetingMessage() {
      return this.$root.store.username ? `Hello ${this.$root.store.username}` : "Hello Guest"; // Compute greeting based on user state
    },
  },
};
</script>

<style scoped>
/* Custom Jumbotron Styles */
.custom-jumbotron {
  background-color: rgba(248, 245, 237, 0.90) !important; /* Match the navbar's background color */
  color: #1e3a8a !important; /* Use the same blue color as the navbar text */
  border: 1px solid rgba(228, 218, 202, 0.9); /* Optional: Add a subtle border */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}

.custom-jumbotron h1,
.custom-jumbotron .lead {
  color: #1e3a8a !important; /* Ensuring header and lead text use the same blue color */
}

.main-hello {
  font-weight: 600 !important; /* Make the "Hello" text bold */
  color: #1e3a8a; /* Ensure it matches your desired color */
}
</style>
