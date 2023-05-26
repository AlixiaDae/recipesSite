function createPorridge() {
    const porridgeWrapper = document.createElement("div")
    porridgeWrapper.classList.add("porridge-wrapper")

    const porridgeHeader = document.createElement("div")
    porridgeHeader.textContent = "Viking Barley Porridge"
    porridgeWrapper.appendChild(porridgeHeader)

    return porridgeWrapper
}


export default createPorridge