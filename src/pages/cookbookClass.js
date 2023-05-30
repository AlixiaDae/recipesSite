export class CookBook {
    constructor() {
        this.recipes = []
    }

    addRecipe(newRecipe) {
        return this.recipes.push(newRecipe)
    }

    getRecipe(recipeName) {
        return this.recipes.find(recipe => recipe.name === recipeName)
    }

}