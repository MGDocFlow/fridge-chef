export default function inputIngredients(ingredients) {
  if (!Array.isArray(ingredients)) {
    throw new Error('Input must be a list of ingredients');
  }

  ingredients.forEach(ingredient => {
    if (typeof ingredient !== 'string') {
      throw new Error('Each ingredient must be a string');
    }
  });

  return ingredients;
}
