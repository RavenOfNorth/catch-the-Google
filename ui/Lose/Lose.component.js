import {DecorationRenderComponent} from "../Common/Decoration/Decoration.component.js";
import {GAME_STATUSES} from "../../data/constants.js";
import {ElementsRenderComponent} from "../Common/Elements/Elements.component.js";

export function LoseComponent() {
    const element = document.createElement('div')
    element.classList.add('modal');



    element.append(
        DecorationRenderComponent(GAME_STATUSES.LOSE),
        ElementsRenderComponent(GAME_STATUSES.LOSE),
    )

    return element;
}