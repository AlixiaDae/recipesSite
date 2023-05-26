import Feast from './images/feast.jpg'
import Stew from './images/stew.jpg'
import Yogurt from './images/yogurt.jpg'
import Porridge from './images/porridge.jpg'
import Flatbread from './images/flatbread.png'

function createHome() {
    const home = document.createElement("div")
    home.classList.add("home")

    const feastImage = document.createElement("img")
    feastImage.classList.add("feast-image")
    feastImage.src = Feast
    feastImage.alt = "Feast"
    home.appendChild(feastImage)

    const recipeWrapper = document.createElement("div")
    recipeWrapper.classList.add("recipe-wrapper")
    home.appendChild(recipeWrapper)

    const recipeSubheader = document.createElement("div")
    recipeSubheader.classList.add("recipe-subheader")
    recipeSubheader.textContent = "Today's Specials"
    recipeWrapper.appendChild(recipeSubheader)

    //Recipe Grid

    const recipeGrid = document.createElement("div")
    recipeGrid.classList.add("recipe-grid")
    recipeWrapper.appendChild(recipeGrid)

    recipeGrid.appendChild(createRecipeCard("Hearty Viking Stew", Stew))

    recipeGrid.appendChild(createRecipeCard("Viking Flatbread", Flatbread))

    recipeGrid.appendChild(createRecipeCard("Skyr with Honey and Nuts", Yogurt))

    recipeGrid.appendChild(createRecipeCard("Viking Barley Porridge", Porridge))

    /*const firstRecipe = document.createElement("div")
    firstRecipe.classList.add("recipe-card")
    recipeGrid.appendChild(firstRecipe)

    const firstImage = document.createElement("img")
    firstImage.src = Stew
    firstImage.alt = "Hearty Viking Stew"
    firstRecipe.appendChild(firstImage)

    const firstText

    const secondRecipe = document.createElement("div")
    secondRecipe.classList.add("recipe-card")
    recipeGrid.appendChild(secondRecipe)

    const thirdRecipe = document.createElement("div")
    thirdRecipe.classList.add("recipe-card")
    recipeGrid.appendChild(thirdRecipe)

    const fourthRecipe = document.createElement("div")
    fourthRecipe.classList.add("recipe-card")
    recipeGrid.appendChild(fourthRecipe)*/

    return home
}

function createRecipeCard(name, imageSrc) {
    const recipeCard = document.createElement("div")
    recipeCard.classList.add("recipe-card")

    const recipeImage = document.createElement("img")
    recipeImage.src = imageSrc
    recipeImage.alt = name
    recipeCard.appendChild(recipeImage)

    const recipeName = document.createElement("div")
    recipeName.textContent = name
    recipeCard.appendChild(recipeName)
    
    return recipeCard
}

function loadHome() {
    const main = document.getElementById("main")
    main.appendChild(createHome())
}

export default loadHome