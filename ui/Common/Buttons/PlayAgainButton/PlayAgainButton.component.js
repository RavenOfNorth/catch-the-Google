import {playAgain} from "../../../../data/state-manager.js";

export function PlayAgainButton() {
    const element = document.createElement('button');
    element.classList.add('button');
    element.append('Play again');

    element.addEventListener("click", () => {
        playAgain()
    });

    return element
}