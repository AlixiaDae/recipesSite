import Feast from '../images/feast.jpg'
import Stew from '../images/stew.jpg'
import Star from '../images/star.jpg'

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const subHeaderWrapper = document.createElement("div")
    subHeaderWrapper.classList.add("subheader-wrapper")

    const mottoWrapper = document.createElement("div")
    mottoWrapper.classList.add("motto-wrapper")

    const motto = document.createElement("h2")
    motto.textContent = "From Asgard's Finest"

    const mottoContent = document.createElement("p")
    mottoContent.classList.add("motto-content")
    mottoContent.textContent = "Straight from the fields of Freyr, only the most delicious of recipes for our brave Einherjar"

    const todayWrapper = document.createElement("div")
    todayWrapper.classList.add("today-wrapper")

    const todaySpecial = document.createElement("h2")
    todaySpecial.textContent = "Today's Special!!!"

    const todayRecipeWrapper = document.createElement("div")
    todayRecipeWrapper.classList.add("today-recipe-wrapper")

    todayRecipeWrapper.appendChild(createTodayRecipe("Hearty Viking Stew", Stew, Star, '"A stew fit for a warrior after a long day\'s battle"'))

    home.appendChild(subHeaderWrapper)
    home.appendChild(todayWrapper)
    subHeaderWrapper.appendChild(mottoWrapper)
    mottoWrapper.appendChild(motto)
    mottoWrapper.appendChild(mottoContent)
    todayWrapper.appendChild(todaySpecial)
    home.appendChild(todayRecipeWrapper)
  
    return home;
  }
  
function createTodayRecipe(name, imageSrc, starSrc, description) {
    const wrapper = document.createElement("div")
    wrapper.classList.add("special-wrapper")
    
    const todayCard = document.createElement("div")
    todayCard.classList.add("today-card")

    const recipeImage = document.createElement("img")
    recipeImage.src = imageSrc
    recipeImage.alt = name

    const recipeName = document.createElement("div")
    recipeName.textContent = name

    const descriptionWrapper = document.createElement("div")
    descriptionWrapper.classList.add("description-wrapper")

    const recipeDescription = document.createElement("div")
    recipeDescription.classList.add("description")
    recipeDescription.textContent = description

    const starRating = document.createElement("img")
    starRating.src = starSrc
    
    wrapper.appendChild(todayCard)
    wrapper.appendChild(descriptionWrapper)
    descriptionWrapper.appendChild(recipeDescription)
    descriptionWrapper.appendChild(starRating)
    todayCard.appendChild(recipeImage)
    todayCard.appendChild(recipeName)

    return wrapper
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
  
  export default loadHome;