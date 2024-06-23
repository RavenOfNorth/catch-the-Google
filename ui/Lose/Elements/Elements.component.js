import {PlayAgainButton} from "../../Common/Buttons/PlayAgainButton/PlayAgainButton.component.js";
import {playAgain} from "../../../data/state-manager.js";
import {TitleRenderComponent} from "../../Common/Elements/Title/Title.component.js";
import {GAME_STATUSES} from "../../../data/constants.js";
import {MessageRenderComponent} from "../../Common/Elements/Message/Message.component.js";
import {ResultsComponent} from "../../Common/Elements/Results/Results.component.js";

export function ElementsComponent() {
    const element = document.createElement('div');
    element.classList.add('modal-elements');

    const button = PlayAgainButton()
    button.addEventListener('click', () => {
        playAgain()
    });

    element.append(
        TitleRenderComponent(GAME_STATUSES.LOSE),
        MessageRenderComponent(GAME_STATUSES.LOSE),
        ResultsComponent(),
        button
    )

    return element
}