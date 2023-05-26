function createYogurt() {
    const yogurtWrapper = document.createElement("div")
    yogurtWrapper.classList.add("yogurt-wrapper")

    const yogurtHeader = document.createElement("div")
    yogurtHeader.textContent = "Skyr with Honey and Nuts"
    yogurtWrapper.appendChild(yogurtHeader)

    return yogurtWrapper
}


export default createYogurt