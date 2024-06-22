import {LoseIconComponent} from "./Icon/loseIcon.component.js";

export function ModalDecorationComponent() {
    const element = document.createElement('div');
    element.classList.add('modal-decoration');

    element.append(
        LoseIconComponent()
    )

    return element
}
