export default function displayRecipe(recipe) {
  const recipeContainer = document.createElement('div');
  recipeContainer.style.display = 'flex';
  recipeContainer.style.flexDirection = 'column';
  recipeContainer.style.alignItems = 'center';
  recipeContainer.style.backgroundColor = '#e0f7e9';
  recipeContainer.style.padding = '20px';
  recipeContainer.style.borderRadius = '10px';
  recipeContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

  const title = document.createElement('h2');
  title.textContent = recipe.title;
  title.style.fontFamily = 'sans-serif';
  title.style.color = '#2e7d32';

  const ingredientsList = document.createElement('ul');
  ingredientsList.style.listStyleType = 'none';
  ingredientsList.style.padding = '0';

  recipe.ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.style.fontFamily = 'sans-serif';
    listItem.style.color = '#2e7d32';
    ingredientsList.appendChild(listItem);
  });

  const instructions = document.createElement('p');
  instructions.textContent = recipe.instructions;
  instructions.style.fontFamily = 'sans-serif';
  instructions.style.color = '#2e7d32';

  recipeContainer.appendChild(title);
  recipeContainer.appendChild(ingredientsList);
  recipeContainer.appendChild(instructions);

  document.body.appendChild(recipeContainer);
}
