<template>
  <div class="family-container">
    <h1 class="family-title">Family Recipes</h1>
    <p class="family-description">
      Explore cherished family recipes from Itay's and Amit's family, perfect for special occasions and holidays.
    </p>

    <div class="recipe-gallery">
      <div
        v-for="(recipe, index) in familyRecipes"
        :key="index"
        class="recipe-card"
        @click="showRecipeDetails(index)"
      >
        <img :src="recipe.image" :alt="recipe.title" class="recipe-image" />
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.madeBy }} | {{ recipe.occasion }}</p>
      </div>
    </div>

    <!-- Modal for Recipe Details -->
    <div v-if="selectedRecipe !== null" class="modal-overlay" @click="closeRecipeDetails">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <img :src="selectedRecipe.image" :alt="selectedRecipe.title" class="modal-image" />
          <h2 class="modal-title">{{ selectedRecipe.title }}</h2>
        </div>
        <p class="modal-text"><strong>Made by:</strong> {{ selectedRecipe.madeBy }}</p>
        <p class="modal-text"><strong>Occasion:</strong> {{ selectedRecipe.occasion }}</p>
        <h3 class="modal-subtitle">Ingredients:</h3>
        <ul class="modal-list">
          <li v-for="(ingredient, index) in selectedRecipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
        <h3 class="modal-subtitle">Instructions:</h3>
        <ol class="modal-list">
          <li v-for="(step, index) in selectedRecipe.instructions" :key="index">{{ step }}</li>
        </ol>
        <button @click="closeRecipeDetails" class="close-button">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FamilyPage",
  data() {
    return {
      familyRecipes: [],
      selectedRecipe: null,
    };
  },
  created() {
    this.loadFamilyRecipes();
  },
  methods: {
    loadFamilyRecipes() {
      import('@/assets/mocks/family_recipes.json')
        .then((module) => {
          this.familyRecipes = module.default.map((recipe) => ({
            ...recipe,
            image: require(`@/assets/family/${recipe.image.split('/').pop()}`), // Adjusting image path
          }));
        })
        .catch((error) => {
          console.error("Error loading family recipes:", error);
        });
    },
    showRecipeDetails(index) {
      this.selectedRecipe = this.familyRecipes[index];
    },
    closeRecipeDetails() {
      this.selectedRecipe = null;
    },
  },
};
</script>

<style scoped>
.family-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background: rgba(248, 245, 237, 0.90); /* Match background color */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Assistant', sans-serif; /* Use the same font as "Hello user" */
}

.family-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1e3a8a; /* Same blue color as used in the navbar */
  font-weight: 600; /* Semi-bold to match style */
}

.family-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #1e3a8a; /* Consistent text color */
  font-family: 'Assistant', sans-serif;
}

.recipe-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.recipe-card {
  position: relative;
  flex: 1 1 30%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.9); /* Slightly lighter background */
  color: #1e3a8a; /* Consistent text color */
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  font-family: 'Assistant', sans-serif;
}

.recipe-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipe-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  text-align: left;
}

.modal-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
  text-align: center;
}

.modal-title {
  margin-left: 10px;
  text-align: center;
  flex-grow: 1;
  font-family: 'Assistant', sans-serif; /* Use same font */
  color: #1e3a8a; /* Matching color */
  font-weight: 600; /* Semi-bold style */
}

.modal-subtitle {
  font-family: 'Assistant', sans-serif;
  color: #1e3a8a;
  font-weight: 600;
  margin-top: 20px;
}

.modal-text {
  font-family: 'Assistant', sans-serif;
  color: #1e3a8a;
}

.modal-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.modal-list {
  text-align: left;
  padding-left: 20px;
  font-family: 'Assistant', sans-serif;
  color: #1e3a8a;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border: none;
  background: #1e3a8a;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Assistant', sans-serif;
}

.close-button:hover {
  background: #0c4a6e;
}
</style>
