import inputIngredients from './ingredientInput';
import generateRecipes from '../recipeGenerator';
import displayRecipe from './recipeDisplay';
import { setRecipeVisible, setCurrentRecipe } from '../stateManager';
import { showElement, updateElementText } from '../domUtils';
import { validateIngredients, generateRecipe } from '../recipeManager';

export function renderUI() {
  const appContainer = document.createElement('div');
  appContainer.style.display = 'flex';
  appContainer.style.flexDirection = 'column';
  appContainer.style.alignItems = 'center';
  appContainer.style.backgroundColor = '#e0f7e9';
  appContainer.style.padding = '20px';
  appContainer.style.borderRadius = '10px';
  appContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

  const title = document.createElement('h1');
  title.textContent = 'Fridge Chef';
  title.style.fontFamily = 'sans-serif';
  title.style.color = '#2e7d32';

  const inputLabel = document.createElement('label');
  inputLabel.textContent = 'Enter your ingredients (comma separated):';
  inputLabel.style.fontFamily = 'sans-serif';
  inputLabel.style.color = '#2e7d32';

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.style.margin = '10px 0';
  inputField.style.padding = '10px';
  inputField.style.borderRadius = '5px';
  inputField.style.border = '1px solid #2e7d32';

  const generateButton = document.createElement('button');
  generateButton.textContent = 'Generate Recipe';
  generateButton.style.margin = '10px 0';
  generateButton.style.padding = '10px 20px';
  generateButton.style.borderRadius = '5px';
  generateButton.style.border = 'none';
  generateButton.style.backgroundColor = '#2e7d32';
  generateButton.style.color = '#ffffff';
  generateButton.style.fontFamily = 'sans-serif';
  generateButton.style.cursor = 'pointer';

  generateButton.addEventListener('click', () => {
    const ingredients = inputField.value.split(',').map(ingredient => ingredient.trim());
    try {
      const validIngredients = validateIngredients(ingredients);
      const recipe = generateRecipe(validIngredients);
      setCurrentRecipe(recipe);
      setRecipeVisible(true);
      updateElementText('.recipe', recipe);
      showElement('.recipe');
    } catch (error) {
      alert(error.message);
    }
  });

  appContainer.appendChild(title);
  appContainer.appendChild(inputLabel);
  appContainer.appendChild(inputField);
  appContainer.appendChild(generateButton);
  document.body.appendChild(appContainer);
}

export function updateRecipeContainer(recipe) {
  const recipeContainer = document.querySelector('.recipe');
  if (recipeContainer) {
    recipeContainer.style.display = 'block';
    recipeContainer.textContent = recipe;
  } else {
    console.error('Recipe container not found');
  }
}