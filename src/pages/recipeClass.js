export class Recipe {
    constructor(name, imageSrc, description) {
        this.name = name
        this.src = imageSrc
        this.description = description
        this.ingredients = []
        this.instructions = []
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
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

    getImageSrc() {
        return this.src
    }
}

