function appendRecipe(recipe) {
    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

    const recipeHeader = document.createElement("div")
    recipeHeader.classList.add("recipe-header")
    recipeHeader.textContent = recipe.getName()

    const recipeSubWrapper = document.createElement("div")
    recipeSubWrapper.classList.add("recipe-subwrapper")

    const recipeContentWrapper = document.createElement("div")
    recipeContentWrapper.classList.add("recipe-content-wrapper")

    const recipeImage = document.createElement("img")
    recipeImage.classList.add("recipe-image")
    recipeImage.src = recipe.getImageSrc()
    
    wrapper.appendChild(recipeHeader)
    wrapper.appendChild(recipeSubWrapper)
    recipeSubWrapper.appendChild(recipeContentWrapper)
    recipeContentWrapper.appendChild(appendRecipeCard(recipe))
    recipeSubWrapper.appendChild(recipeImage)

    return wrapper
    
}
function appendRecipeCard(recipe) {
    const recipeCardWrapper = document.createElement("div")
    recipeCardWrapper.classList.add("recipe-card-wrapper")

    //Ingredients

    const ingredientsHeader = document.createElement("div")
    ingredientsHeader.classList.add("ingredients-header")
    ingredientsHeader.textContent = "Ingredients"

    const ingredientsGrid = document.createElement("div")
    ingredientsGrid.classList.add("ingredients-grid")

    const ingredientsArray = recipe.getIngredients()

    for(let i = 0; i < ingredientsArray.length; i++) {
        const ingredient = document.createElement("li")
        ingredient.textContent = ingredientsArray[i]

        ingredientsGrid.appendChild(ingredient)
    }

    //Instructions

    const instructionsHeader = document.createElement("div")
    instructionsHeader.classList.add("instructions-header")
    instructionsHeader.textContent = "Instructions"

    const instructionsGrid = document.createElement("div")
    instructionsGrid.classList.add("instructions-grid")

    const instructionsWrapper = document.createElement("ol")

    const instructionsArray = recipe.getInstructions()

    for(let i = 0; i < instructionsArray.length; i++) {
        const instruction = document.createElement("li")
        instruction.textContent = instructionsArray[i]

        instructionsWrapper.appendChild(instruction)
    }

    recipeCardWrapper.appendChild(ingredientsHeader)
    recipeCardWrapper.appendChild(ingredientsGrid)
    recipeCardWrapper.appendChild(instructionsHeader)
    recipeCardWrapper.appendChild(instructionsGrid)
    instructionsGrid.appendChild(instructionsWrapper)

    return recipeCardWrapper
    
}


export default appendRecipe