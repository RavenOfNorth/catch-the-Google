import {GAME_STATUSES, RESULT} from "../../../../data/constants.js";

export function TitleRenderComponent(result) {

    const titleWinner = RESULT.WINNER.TITLE;
    const titleLoser = RESULT.LOSER.TITLE;

    const element = document.createElement('div');
    element.classList.add('title-modal');

    if (result === GAME_STATUSES.WIN) {
        element.append(titleWinner)
    } else if (result === GAME_STATUSES.LOSE) {
        element.append(titleLoser)
    }

    return element
}