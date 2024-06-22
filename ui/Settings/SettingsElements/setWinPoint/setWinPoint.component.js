export function setWinPoint() {
    const element = document.createElement("select")
    element.setAttribute('id', '02')

    const options = ["20", "40", "50", "60", "70"];

    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        element.appendChild(option);
    })
    return element;
}

export function setPointsToWinTitle() {
    const element = document.createElement("label");
    element.setAttribute("for", "02");
    element.append('Points to Win');

    return element
}