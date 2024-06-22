import {getPoints} from "../../../data/state-manager.js";

export function MissComponent() {
    const points = getPoints();
    const element = document.createElement("div");
    element.classList.add('result-block');

    const textElement = document.createElement("span");
    textElement.classList.add('result-title');

    textElement.append('Miss:')

    element.append(
        textElement,
        points.miss
    )

    return element
}
