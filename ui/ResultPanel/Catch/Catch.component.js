import {getPoints} from "../../../data/state-manager.js";

export function CatchComponent() {
    const points = getPoints();
    const element = document.createElement("div");
    element.classList.add('result-block');

    const textElement = document.createElement("span");
    textElement.classList.add('result-title');

    textElement.append('Catch:')

    element.append(
        textElement,
        points.catch
    )

    return element;
}
