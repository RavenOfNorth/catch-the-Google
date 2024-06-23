import {getPoints} from "../../../../../../data/state-manager.js";

export function ResultCatchValueComponent() {
    const element = document.createElement('span')
    element.classList.add('result');

    const points = getPoints();

    element.append(
    points.catch
    )

    return element;
}