import {ElementsComponent} from "./Elements/Elements.component.js";
import {DecorationRenderComponent} from "../Common/Decoration/Decoration.component.js";
import {GAME_STATUSES} from "../../data/constants.js";

export function WinComponent() {
    const element = document.createElement('div')
    element.classList.add('modal');

    element.append(
        DecorationRenderComponent(GAME_STATUSES.WIN),
        ElementsComponent(),

    );

    return element;
}