import {IconRenderComponent} from "./Icons/Icons.component.js";

export function DecorationRenderComponent(result) {
    const element = document.createElement('div');
    element.classList.add('modal-decoration');

    element.append(
        IconRenderComponent(result)
    )

    return element
}