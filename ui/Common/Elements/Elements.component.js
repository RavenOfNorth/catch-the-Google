import {PlayAgainButton} from "../Buttons/PlayAgainButton/PlayAgainButton.component.js";
import {playAgain} from "../../../data/state-manager.js";
import {TitleRenderComponent} from "./Title/Title.component.js";
import {MessageRenderComponent} from "./Message/Message.component.js";
import {ResultsComponent} from "./Results/Results.component.js";

export function ElementsRenderComponent(results) {
    const element = document.createElement('div');
    element.classList.add('modal-elements');

    const result = results
    const button = PlayAgainButton()
    button.addEventListener('click', () => {
        playAgain()
    });

    element.append(
        TitleRenderComponent(result),
        MessageRenderComponent(result),
        ResultsComponent(result),
        button
    )
    return element
}