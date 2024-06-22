import {WinIconComponent} from "./Icon/WinIcon.component.js";

export function DecorationComponent() {
    const element = document.createElement('div');
    element.classList.add('modal-decoration');

    element.append(
        WinIconComponent()
    )

    return element
}