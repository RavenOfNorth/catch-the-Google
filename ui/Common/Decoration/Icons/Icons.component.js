import {GAME_STATUSES, RESULT} from "../../../../data/constants.js";

export function IconRenderComponent(result) {

    const iconWinner = RESULT.WINNER.ICON;
    const iconLoser = RESULT.LOSER.ICON

    const element = document.createElement('img');

    if (result === GAME_STATUSES.WIN) {
        element.setAttribute('src', iconWinner);
    } else if (result === GAME_STATUSES.LOSE) {
        element.setAttribute('src', iconLoser);
    }

    return element
}