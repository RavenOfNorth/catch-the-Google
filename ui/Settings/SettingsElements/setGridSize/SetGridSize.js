export function setGridSize() {
    const element = document.createElement("select")
    element.setAttribute("id", '01')

    const options = ["4x4", "5x5", "7x7", "8x8"];

    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        element.appendChild(option);
    })
    return element;
}

export function setGridSizeTitle() {
    const element = document.createElement("label");
    element.setAttribute("for", "01");
    element.append('Grid Size');

    return element
}