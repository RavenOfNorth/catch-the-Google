export function setGridSize() {
    const gridSizeSelect = document.createElement("select")
    gridSizeSelect.classList.add("dropdown")

    const options = ["4x4", "5x5", "6x6", "7x7", "8x8"];

    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        gridSizeSelect.appendChild(option);
    })
    return gridSizeSelect;
}

export function setWinPoint() {
    const winPointSelect = document.createElement("select")
    winPointSelect.classList.add("dropdown")

    const options = ["20", "40", "50", "60", "70"];

    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        winPointSelect.appendChild(option);
    })
    return winPointSelect;
}

export function setLosePoint() {
    const losePointSelect = document.createElement("select")
   losePointSelect.classList.add("dropdown")

    const options = ["20", "40", "50", "60", "70"];

    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        losePointSelect.appendChild(option);
    })
    return losePointSelect;
}
