function creatFlatbread() {
    const flatbreadWrapper = document.createElement("div")
    flatbreadWrapper.classList.add("flatbread-wrapper")

    const flatbreadHeader = document.createElement("div")
    flatbreadHeader.textContent = "Viking Flatbread"
    flatbreadWrapper.appendChild(flatbreadHeader)

    return flatbreadWrapper
}


export default creatFlatbread