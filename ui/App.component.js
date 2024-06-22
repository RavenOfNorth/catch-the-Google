import { GAME_STATUSES } from "../data/constants.js";
import { getGameStatus } from "../data/state-manager.js";
import { LoseComponent } from "./Lose/Lose.component.js";
import { GridComponent } from "./Grid/Grid.component.js";
import { ResultPanelComponent } from "./ResultPanel/ResultPanel.component.js";
import {WinComponent} from "./Win/Win.component.js";
import {SettingsComponent} from "./Settings/Settings.component.js";
import {playGameButtonComponent} from "./Settings/PlayGameButton/PlayGameButton.component.js";

export function AppComponent() {
    const element = document.createElement('div')

    const status = getGameStatus();

    const transitions = {
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const resultPanelElement = ResultPanelComponent();
            element.append(resultPanelElement);
            const gridElement = GridComponent();
            element.append(gridElement);
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent();
            element.append(loseElement);
        },
        [GAME_STATUSES.SETTINGS]: () => {
            const button = playGameButtonComponent()
            const SettingsElement = SettingsComponent();
            element.append(
                SettingsElement,
                button
            )
        },
        [GAME_STATUSES.WIN]: () => {
            const WinElement = WinComponent();
            element.append(WinElement);
        },
    }

    transitions[status]();
    
    return element;
}