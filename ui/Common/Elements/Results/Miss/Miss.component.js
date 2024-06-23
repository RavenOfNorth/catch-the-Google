import {TitleMissComponent} from "./Title/Title.component.js";
import {ResultMissValueComponent} from "./Result/ResultMiss.component";

function CatchComponent() {
    const element = document.createElement('div');
    element.classList.add('result-block');

    element.append(
        TitleMissComponent(),
        ResultMissValueComponent()
    )

    return element;
}