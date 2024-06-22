export function setLosePoint() {
    const element = document.createElement("select")
    element.setAttribute('id', '03');

    const options = ["20", "40", "50", "60", "70"];

    options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        element.appendChild(option);
    })
    return element;
}

export function setPointsToLoseTitle() {
    const element = document.createElement("label");
    element.setAttribute("for", "03");
    element.append('Points to Lose');

    return element
}
