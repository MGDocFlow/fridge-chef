const state = {
    recipeVisible: false,
    currentRecipe: null,
};

export function setRecipeVisible(visible) {
    state.recipeVisible = visible;
}

export function setCurrentRecipe(recipe) {
    state.currentRecipe = recipe;
}

export function getState() {
    return { ...state };
}