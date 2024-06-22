import {PlayAgainButton} from "../../Common/PlayAgainButton/PlayAgainButton.component.js";
import {playAgain} from "../../../data/state-manager.js";
import {TitleComponent} from "./Title/Title.components.js";
import {Message} from "./Message/Message.component.js";
import {ResultsWinComponent} from "./Results/Results.component.js";

export function ModalElements() {
    const element = document.createElement('div');
    element.classList.add('modal-elements');

    const button = PlayAgainButton()
    button.addEventListener('click', () => {
        playAgain()
    });

    element.append(
        TitleComponent(),
        Message(),
        ResultsWinComponent(),
        button
    )
    return element
}