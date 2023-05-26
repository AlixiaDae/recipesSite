import Github from './images/github-mark-white.png'
import Feast from './images/feast.jpg'
import Stew from './images/stew.jpg'
import Yogurt from './images/yogurt.jpg'
import Porridge from './images/porridge.jpg'
import Flatbread from './images/flatbread.png'

function createHeader() {
    const header = document.createElement("header")
    header.classList.add("header")

    const siteName = document.createElement("h1")
    siteName.classList.add("site-name")
    siteName.textContent = "Odin's Recipes"

    header.appendChild(siteName)

    return header
}

function createMain() {
    const main = document.createElement("main")
    main.classList.add("main")
    main.setAttribute("id", "main")

    const feastImage = document.createElement("img")
    feastImage.classList.add("feast-image")
    feastImage.src = Feast
    feastImage.alt = "Feast"
    main.appendChild(feastImage)

    const recipeWrapper = document.createElement("div")
    recipeWrapper.classList.add("recipe-wrapper")
    main.appendChild(recipeWrapper)

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

    return main
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    const copyright = document.createElement("p")
    copyright.classList.add("copyright")
    copyright.textContent = `Copyright © ${new Date().getFullYear()} AlixiaDae`
    footer.appendChild(copyright)

    const githubLink = document.createElement("a")
    githubLink.setAttribute("target", "blank")
    githubLink.href = "https://github.com/AlixiaDae"
    footer.appendChild(githubLink)

    const githubIcon = document.createElement("img")
    githubIcon.src = Github
    githubLink.appendChild(githubIcon)

    return footer
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

function setActiveCard(card) {
    const recipeCards = document.querySelectorAll(".recipe-card")

    recipeCards.forEach(recipeCard => {
        if(recipeCard !== this) {
            recipeCard.classList.remove("active")
        }
    });

    card.classList.add("active")
}

function initializeWebsite() {
    const content = document.querySelector(".content")

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())
}

export default initializeWebsite