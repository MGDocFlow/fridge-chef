import { describe, it, expect, beforeEach, test } from 'vitest';
import { setRecipeVisible, setCurrentRecipe, getState } from '@src/stateManager';

describe('State Manager', () => {
  beforeEach(() => {
    // Reset the state before each test
    setRecipeVisible(false);
    setCurrentRecipe(null);
  });

  test('should set recipe visibility', () => {
    setRecipeVisible(true);
    expect(getState().recipeVisible).toBe(true);
  });

  test('should set current recipe', () => {
    const recipe = { id: 1, name: 'Test Recipe' };
    setCurrentRecipe(recipe);
    expect(getState().currentRecipe).toEqual(recipe);
  });
});