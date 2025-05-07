import { describe, it, expect } from 'vitest';
import generateRecipes from '@src/recipeGenerator';

describe('generateRecipes', () => {
  it('should generate a list of recipes', () => {
    const ingredients = ['chicken', 'rice', 'broccoli'];
    const recipes = generateRecipes(ingredients);
    expect(recipes).toBeInstanceOf(Array);
    expect(recipes.length).toBeGreaterThan(0);
  });

  it('should return an empty array if no ingredients are provided', () => {
    const ingredients = [];
    const recipes = generateRecipes(ingredients);
    expect(recipes).toEqual([]);
  });

  it('should generate recipes that include the provided ingredients', () => {
    const ingredients = ['chicken', 'rice'];
    const recipes = generateRecipes(ingredients);
    recipes.forEach(recipe => {
      expect(recipe.ingredients).toEqual(expect.arrayContaining(ingredients));
    });
  });
});