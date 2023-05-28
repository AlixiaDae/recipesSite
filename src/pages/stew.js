import Stew from '../images/stew.jpg'

function createStew() {
    const stewWrapper = document.createElement("div")
    stewWrapper.classList.add("stew-wrapper")

    const stewHeader = document.createElement("h2")
    stewHeader.classList.add("stew-header")
    stewHeader.textContent = "Hearty Viking Stew"
    
    const stewSubWrapper = document.createElement("div")
    stewSubWrapper.classList.add("stew-subwrapper")

    const stewContentWrapper = document.createElement("div")
    stewContentWrapper.classList.add("stew-content-wrapper")

    const ingredientsHeader = document.createElement("div")
    ingredientsHeader.classList.add("ingredients-header")
    ingredientsHeader.textContent = "Ingredients"
    
    const ingredientsGrid = document.createElement("div")
    ingredientsGrid.classList.add("ingredients-grid")
    
    ingredientsGrid.appendChild(appendIngredients("1 lb beef or venison, cubed"))
    ingredientsGrid.appendChild(appendIngredients("2 onions, chopped"))
    ingredientsGrid.appendChild(appendIngredients("3 carrots, chopped"))
    ingredientsGrid.appendChild(appendIngredients("2 parsnips, chopped"))
    ingredientsGrid.appendChild(appendIngredients("2 turnips, chopped"))
    ingredientsGrid.appendChild(appendIngredients("4 cups beef broth"))
    ingredientsGrid.appendChild(appendIngredients("2 tbsp butter"))
    ingredientsGrid.appendChild(appendIngredients("1 tbsp salt"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp ground black pepper"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp dried thyme"))
    ingredientsGrid.appendChild(appendIngredients("1 tsp dried sage"))
    
    const instructionsWrapper = document.createElement("div")
    instructionsWrapper.classList.add("instructions-wrapper")
    
    const instructionsHeader = document.createElement("div")
    instructionsHeader.classList.add("instructions-header")
    instructionsHeader.textContent = "Instructions"

    const instructionsGrid = document.createElement("div")
    instructionsGrid.classList.add("instructions-grid")

    instructionsGrid.appendChild(appendInstructions("In a large pot, melt the butter over medium heat. Add the onions and cook until softened."))
    
    instructionsGrid.appendChild(appendInstructions("Add the meat and cook until browned on all sides."))

    instructionsGrid.appendChild(appendInstructions("Stir in the carrots, parsnips, turnips, salt, pepper, thyme, sage, and rosemary."))

    instructionsGrid.appendChild(appendInstructions("Pour in the beef broth, bring to a boil, then reduce the heat and let it simmer for 1-2 hours, or until the meat is tender and the vegetables are cooked through."))

    instructionsGrid.appendChild(appendInstructions("Serve hot with a side of Viking Flatbread or rustic rye bread."))

    const stewImage = document.createElement("img")
    stewImage.classList.add("stew-image")
    stewImage.src = Stew
    stewImage.alt = "Hearty Viking Stew"
    
    stewWrapper.appendChild(stewHeader)
    stewWrapper.appendChild(stewSubWrapper)
    stewSubWrapper.appendChild(stewContentWrapper)
    stewContentWrapper.appendChild(ingredientsHeader)
    stewContentWrapper.appendChild(ingredientsGrid)
    stewContentWrapper.appendChild(instructionsWrapper)
    stewContentWrapper.appendChild(instructionsHeader)
    stewContentWrapper.appendChild(instructionsGrid)
    stewSubWrapper.appendChild(stewImage)

    return stewWrapper
}

function appendIngredients(name) {
    const ingredientName = document.createElement("li")
    ingredientName.classList.add("ingredient")
    ingredientName.textContent = name

    return ingredientName
}

function appendInstructions(text) {
    const instructionList = document.createElement("ol")

    const instruction = document.createElement("li")
    instruction.classList.add("instruction")
    instruction.textContent = text

    instructionList.appendChild(instruction)

    return instructionList
}


export default createStew
