export function validateIngredients(ingredients) {
    if (!Array.isArray(ingredients) || ingredients.length === 0) {
        throw new Error('Ingredients must be a non-empty array.');
    }
    return ingredients.map(ingredient => ingredient.trim()).filter(Boolean);
}

export function generateRecipe(ingredients) {
    return `Recipe with: ${ingredients.join(', ')}`;
}