import About from '../images/about.jpg'

function createAbout() {
    const about = document.createElement("div")
    about.classList.add("about")

    const subWrapper = document.createElement("img")
    subWrapper.src = About
    subWrapper.alt = "Fjordgard"

    const secondSubWrapper = document.createElement("div")
    secondSubWrapper.classList.add("about-page-second-subwrapper")

    const secondSubWrapperContent = document.createElement("div")
    secondSubWrapperContent.classList.add("about-page-second-subwrapper-content")
    secondSubWrapperContent.textContent = "Mead Hall is a small site created for OdinProject's Javascript course."

    about.appendChild(subWrapper)
    about.appendChild(secondSubWrapper)
    secondSubWrapper.appendChild(secondSubWrapperContent)

    return about
}

function loadAbout() {
    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createAbout())
}

export default loadAbout