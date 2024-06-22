import {SettingsElement} from "./SettingsElements/SettingsComponents.js";
import {setGridSize, setGridSizeTitle} from "./SettingsElements/setGridSize/SetGridSize.js";
import {setPointsToWinTitle, setWinPoint} from "./SettingsElements/setWinPoint/setWinPoint.component.js";
import {setLosePoint, setPointsToLoseTitle} from "./SettingsElements/setLosePoint/setLosePoint.component.js";

export function SettingsComponent() {
    const element = document.createElement("div");
    element.classList.add("top-items");
    element.append(
        SettingsElement(
            setGridSizeTitle(),
            setGridSize()
        ),
        SettingsElement(
            setPointsToWinTitle(),
            setWinPoint()
        ),
        SettingsElement(
            setPointsToLoseTitle(),
            setLosePoint(),
        ),
    );
    return element;
}