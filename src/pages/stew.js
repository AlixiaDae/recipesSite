function createStew() {
    const stewWrapper = document.createElement("div")
    stewWrapper.classList.add("stew-wrapper")

    const stewHeader = document.createElement("div")
    stewHeader.textContent = "Hearty Viking Stew"
    stewWrapper.appendChild(stewHeader)

    return stewWrapper
}


export default createStew
