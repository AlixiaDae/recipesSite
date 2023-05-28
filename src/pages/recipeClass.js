export class Recipe {
    constructor(name) {
        this.name = name
        this.ingredients = []
        this.instructions = []
    }

    addIngredients(newIngredient) {
        this.ingredients.push(newIngredient)
    }

    getIngredients() {
        return this.ingredients
    }

    addInstructions(newInstruction) {
        this.instructions.push(newInstruction)
    }

    getInstructions() {
        return this.instructions
    }
}