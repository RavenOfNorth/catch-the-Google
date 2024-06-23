import {CatchComponent} from "../../../ResultPanel/Catch/Catch.component.js";
import {MissComponent} from "../../../ResultPanel/Miss/Miss.component.js";

export function ResultsComponent() {
    const element = document.createElement('div');
    element.classList.add('modal-result');

    element.append(
        CatchComponent(),
        MissComponent()
    )

    return element;
}