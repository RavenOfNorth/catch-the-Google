import {DecorationRenderComponent} from "../Common/Decoration/Decoration.component.js";
import {GAME_STATUSES} from "../../data/constants.js";
import {ElementsRenderComponent} from "../Common/Elements/Elements.component.js";

export function WinComponent() {
    const element = document.createElement('div')
    element.classList.add('modal');

    element.append(
        DecorationRenderComponent(GAME_STATUSES.WIN),
        ElementsRenderComponent(GAME_STATUSES.WIN),

    );

    return element;
}