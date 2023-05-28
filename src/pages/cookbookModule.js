import { Recipe } from "./recipeClass"

export class Cookbook {
    constructor() {
        this.recipes = []
    }

    addRecipe(newRecipe) {
        this.recipes.push(newRecipe)
    }

    getRecipes() {
        return this.recipes
    }

    getRecipe(chosenRecipe) {
        return chosenRecipe
    }
}