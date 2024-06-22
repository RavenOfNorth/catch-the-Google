import {TitleModalComponent} from "./Title/title.component.js";
import {Message} from "./Message/Message.component.js";
import {ResultComponent} from "./Results/Result.component.js";
import {PlayAgainButton} from "../../Common/PlayAgainButton/PlayAgainButton.component.js";
import {playAgain} from "../../../data/state-manager.js";

export function ModalElements() {
    const element = document.createElement('div');
    element.classList.add('modal-elements');

    const button = PlayAgainButton()
    button.addEventListener('click', () => {
        playAgain();
    });

    element.append(
        TitleModalComponent(),
        Message(),
        ResultComponent(),
        button
    )

    return element
}