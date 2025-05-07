import { validateIngredients, generateRecipe } from '@src/recipeManager';
import { describe, it, expect } from 'vitest';

describe('recipeManager', () => {
  it('should validate ingredients correctly', () => {
    const ingredients = [' tomato ', ' cheese '];
    const validated = validateIngredients(ingredients);
    expect(validated).toEqual(['tomato', 'cheese']);
  });

  it('should generate a recipe string', () => {
    const ingredients = ['tomato', 'cheese'];
    const recipe = generateRecipe(ingredients);
    expect(recipe).toBe('Recipe with: tomato, cheese');
  });
});