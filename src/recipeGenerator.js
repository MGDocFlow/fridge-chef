export default function generateRecipes(ingredients) {
  if (!ingredients || ingredients.length === 0) {
    return [];
  }

  const recipes = [
    { name: 'Pasta al Pomodoro', ingredients: ['pasta', 'pomodoro', 'basilico'] },
    { name: 'Insalata Mista', ingredients: ['lattuga', 'pomodoro', 'carote'] },
    { name: 'Riso con Pollo', ingredients: ['riso', 'pollo', 'broccoli'] }
  ];

  return recipes.filter(recipe =>
    ingredients.some(ingredient => recipe.ingredients.includes(ingredient))
  );
}
