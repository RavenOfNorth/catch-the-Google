import {TitleCatchComponent} from "./Title/Title.component.js";
import {ResultCatchValueComponent} from "./Result/ResultCatch.component.js";

function CatchComponent() {
    const element = document.createElement('div');
    element.classList.add('result-block');

    element.append(
        TitleCatchComponent(),
        ResultCatchValueComponent()
    )

    return element;
}