import loadHome from "./home"

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

    return main
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    const copyright = document.createElement("p")
    copyright.textContent = `Copyright © ${new Date().getFullYear()} AlixiaDae`

    footer.appendChild(copyright)

    return footer
}

function initializeWebsite() {
    const content = document.querySelector(".content")

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())
    loadHome()
}

export default initializeWebsite