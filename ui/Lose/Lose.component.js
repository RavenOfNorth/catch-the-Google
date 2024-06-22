import {ModalDecorationComponent} from "./modalDecoration/modalDecoration.component.js";
import {ModalElements} from "./modalElements/modalElements.component.js";

export function LoseComponent() {
    const element = document.createElement('div')
    element.classList.add('modal');



    element.append(
        ModalDecorationComponent(),
        ModalElements(),
    )

    return element;
}