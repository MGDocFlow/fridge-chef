const aiTool = require('ai-tool');

function generateRecipes(ingredients) {
  // Use the AI tool to generate recipes based on the provided ingredients
  const recipes = aiTool.generateRecipes(ingredients);
  return recipes;
}

module.exports = generateRecipes;
