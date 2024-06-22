import {CatchComponent} from "./Catch/Catch.component.js";
import {MissComponent} from "./Miss/Miss.component.js";

export function ResultPanelComponent() {
    const element = document.createElement('div');
    element.classList.add('result-container')

    element.append(
        CatchComponent(),
        MissComponent()
    )

    return element;
}