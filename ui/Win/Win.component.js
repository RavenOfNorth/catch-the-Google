import {DecorationComponent} from "./Decoration/Decoration.component.js";
import {ModalElements} from "./Elements/Elements.component.js";

export function WinComponent() {
    const element = document.createElement('div')
    element.classList.add('modal');

    element.append(
        DecorationComponent(),
        ModalElements(),

    );

    return element;
}