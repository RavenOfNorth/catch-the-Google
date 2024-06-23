import {DecorationRenderComponent} from "../Common/Decoration/Decoration.component.js";
import {ElementsComponent} from "./Elements/Elements.component.js";
import {GAME_STATUSES} from "../../data/constants.js";

export function LoseComponent() {
    const element = document.createElement('div')
    element.classList.add('modal');



    element.append(
        DecorationRenderComponent(GAME_STATUSES.LOSE),
        ElementsComponent(),
    )

    return element;
}