import {startGame} from "../../../data/state-manager.js";


export function playGameButtonComponent() {
    const element = document.createElement("button");
    element.classList.add("button");
    element.classList.add("main-button");

    const TextElement = document.createElement("h1")
    TextElement.append('START GAME');

    element.append(TextElement)

    element.addEventListener("click", () => {
        startGame()
    })

    return element
}