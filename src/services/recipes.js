import recipeFullView from "../assets/mocks/recipe_full_view.json";
import recipePreviews from "../assets/mocks/recipe_preview.json";

export function mockGetRecipesPreview(amount = 6) {
  let recipes = [];
  for (let i = 0; i < amount && i < recipePreviews.length; i++) {
    recipes.push(recipePreviews[i]);
  }

  // If the requested amount is greater than available recipes, loop through the previews
  while (recipes.length < amount) {
    recipes.push(...recipePreviews);
  }

  // Trim the array to the requested amount in case we added too many
  recipes = recipes.slice(0, amount);

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  // Find the full details based on recipeId from the full view JSON
  const recipe = recipeFullView.find((r) => r.id === recipeId);
  return { data: { recipe: recipe || recipeFullView[0] } }; // Fallback to the first recipe if not found
}
