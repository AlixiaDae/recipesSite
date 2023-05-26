import Stew from '../images/stew.jpg'

function createStew() {
    const stewWrapper = document.createElement("div")
    stewWrapper.classList.add("stew-wrapper")

    const stewSubWrapper = document.createElement("div")
    stewSubWrapper.classList.add("stew-subwrapper")
    stewWrapper.appendChild(stewSubWrapper)

    const stewHeader = document.createElement("div")
    stewHeader.classList.add("stew-header")
    stewHeader.textContent = "Hearty Viking Stew"
    stewSubWrapper.appendChild(stewHeader)

    const ingredientsHeader = document.createElement("div")
    ingredientsHeader.classList.add("ingredients-header")
    ingredientsHeader.textContent = "Ingredients"
    stewSubWrapper.appendChild(ingredientsHeader)

    const ingredientsGrid = document.createElement("div")
    ingredientsGrid.classList.add("ingredients-grid")
    stewSubWrapper.appendChild(ingredientsGrid)

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
    ingredientsGrid.appendChild(appendIngredients("1 tsp dried rosemary"))

    const instructionsWrapper = document.createElement("div")
    instructionsWrapper.classList.add("instructions-wrapper")
    stewSubWrapper.appendChild(instructionsWrapper)

    const instructionsHeader = document.createElement("div")
    instructionsHeader.classList.add("instructions-header")
    instructionsHeader.textContent = "Instructions"
    instructionsWrapper.appendChild(instructionsHeader)


    const stewImage = document.createElement("img")
    stewImage.classList.add("stew-image")
    stewImage.src = Stew
    stewImage.alt = "Hearty Viking Stew"
    stewWrapper.appendChild(stewImage)

    return stewWrapper
}

function appendIngredients(name) {
    const ingredientName = document.createElement("li")
    ingredientName.classList.add("ingredient")
    ingredientName.textContent = name

    return ingredientName
}


export default createStew
