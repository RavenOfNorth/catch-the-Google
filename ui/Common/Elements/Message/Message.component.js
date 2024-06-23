import {GAME_STATUSES, RESULT} from "../../../../data/constants.js";

export function MessageRenderComponent(result) {

    const messageWinner = RESULT.WINNER.MESSAGE;
    const messageLoser = RESULT.LOSER.MESSAGE

    const element = document.createElement('div');
    element.classList.add('text-modal');

    if (result === GAME_STATUSES.WIN) {
        element.append(messageWinner)
    } else if (result === GAME_STATUSES.LOSE) {
        element.append(messageLoser);

    }
    return element

}

