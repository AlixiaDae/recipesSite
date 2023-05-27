import Feast from '../images/feast.jpg'

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const feastImage = document.createElement("img")
    feastImage.src = Feast
    feastImage.classList.add("feast-image")

    const subHeaderWrapper = document.createElement("div")
    subHeaderWrapper.classList.add("subheader-wrapper")

    const subheaderOneWrapper = document.createElement("div")
    subheaderOneWrapper.classList.add("subheader-one-wrapper")

    const subheaderOne = document.createElement("h2")
    subheaderOne.textContent = "From Asgard's Finest"

    const subheaderOneContent = document.createElement("p")
    subheaderOneContent.classList.add("subheader-one-content")
    subheaderOneContent.textContent = "Straight from the fields of Freyr, only the freshest and most delicious of ingredients and recipes for the Einherjar"


    //home.appendChild(feastImage)
    home.appendChild(subHeaderWrapper)
    subHeaderWrapper.appendChild(subheaderOneWrapper)
    subheaderOneWrapper.appendChild(subheaderOne)
    subheaderOneWrapper.appendChild(subheaderOneContent)
  
    return home;
  }

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
  
  export default loadHome;