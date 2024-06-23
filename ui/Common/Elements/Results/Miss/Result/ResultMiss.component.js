import {getPoints} from "../../../../../../data/state-manager.js";

export function ResultMissValueComponent() {
    const element = document.createElement('span')
    element.classList.add('result');

    const points = getPoints();

    element.append(
        points.miss
    )

    return element;
}