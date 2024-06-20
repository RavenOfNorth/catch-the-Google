import {setGridSize, setLosePoint, setWinPoint} from "./Settings/settings.component.js";
import {playGameButton} from "./common/Buttons/playGame.button.js";

function renderStartScreen() {
    const element = document.createElement("div");
    element.append(
        setGridSize(),
        setWinPoint(),
        setLosePoint(),
        playGameButton()
    )
    return element
}