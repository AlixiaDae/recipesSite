import book from "./cookbook"

function createRecipe() {
    const wrappper = document.createElement("div")
    wrappper.classList.add("recipe-page-wrapper")

    const header = document.createElement("div")
    header.classList.add("recipe-page-header")
    header.textContent = "Recipes"

    const recipeGridWrapper = document.createElement("div")
    recipeGridWrapper.classList.add("recipe-grid-wrapper")

    wrappper.appendChild(header)
    wrappper.appendChild(recipeGridWrapper)
    recipeGridWrapper.appendChild(showRecipes(book))
    

    return wrappper
    
}

function showRecipes(cookbook) {
    const bookArray = cookbook.getRecipes()
    const grid = document.createElement("div")
    grid.classList.add("recipe-page-grid")

    for(let i = 0; i< bookArray.length; i++) {
        const card = document.createElement("div")
        card.classList.add("recipe-card")

        const cardImage = document.createElement("img")
        cardImage.src = bookArray[i].getImageSrc()

        const cardName = document.createElement("div")
        cardName.textContent = bookArray[i].getName()

        grid.appendChild(card)
        card.appendChild(cardImage)
        card.appendChild(cardName)
    }

    return grid
}

function loadRecipe() {
    const main = document.getElementById("main")
    main.textContent = ""

    main.appendChild(createRecipe())

    return main
}

export default loadRecipe