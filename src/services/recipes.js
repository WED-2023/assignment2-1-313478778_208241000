import recipeFullView from "../assets/mocks/recipe_full_view.json";
import GetRecipeInformation from "../assets/mocks/GetRecipeInformation.json";
import recipePreviews from "../assets/mocks/recipe_preview.json";
import NotFoundPage from "../pages/NotFoundPage.vue";

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

// export function mockGetRecipeFullDetails(recipeId) {
//   console.log("recipeId: ", recipeId)
//   // Find the full details based on recipeId from the full view JSON
//   // const recipe = recipeFullView.find((r) => r.id === recipeId);
//   const recipe = GetRecipeInformation.find((r) => r.id === recipeId);

//   console.log("recipeName: ", recipe)
//   return { data: { recipe: recipe || NotFoundPage } }; // Fallback to the first recipe if not found
// }
export const mockGetRecipeFullDetails = async (recipeId) => {
  // Convert the object values (recipes) into an array
  const recipes = Object.values(GetRecipeInformation);

  // Find the recipe by ID
  const recipe = recipes.find(r => r.id === Number(recipeId));

  if (!recipe) {
    throw new Error("Recipe not found");
  }

  return { data: { recipe } }; // Wrap it as response data to match your usage
};
