import Feast from './images/feast.jpg'

function createHome() {
    const home = document.createElement("div")
    home.classList.add("home")

    const feastImage = document.createElement("img")
    feastImage.classList.add("feast-image")
    feastImage.src = Feast
    feastImage.alt = "Feast"
    home.appendChild(feastImage)

    const recipeGrid = document.createElement("div")
    recipeGrid.classList.add("recipe-grid")
    home.appendChild(recipeGrid)

    return home
}

function loadHome() {
    const main = document.getElementById("main")
    main.appendChild(createHome())
}

export default loadHome