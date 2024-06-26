import {GAME_STATUSES, SETTINGS} from "./constants.js";

// todo: change points structure
const _state = {
  gameStatus: GAME_STATUSES.SETTINGS,
  points: {
    miss: 0,
    catch: 0,
  },
  settings: {
        pointsToLose: 20,
        pointsToWin: 20,
        gridSize: {
            width: 4,
            height: 4,
        }
  },
  googlePosition: {
    x: 0, y: 0
  } 
};


let _observer = () => {}

export function subscribe(subscriberListenerObserverCallbackEventHandlerConsumer) {
    _observer = subscriberListenerObserverCallbackEventHandlerConsumer
}

function _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function _moveGoogleToRandomPosition() {
    const newX = _getRandomInt(_state.settings.gridSize.width);
    const newY = _getRandomInt(_state.settings.gridSize.height);

    if (newX === _state.googlePosition.x && newY === _state.googlePosition.y) {
        _moveGoogleToRandomPosition()
        return;
    }

    _state.googlePosition.x = newX;
    _state.googlePosition.y = newY;
}
let _intervalId;

function _play() {
    _intervalId = setInterval(() => {
        _state.points.miss++;
    
        if (_state.points.miss === _state.settings.pointsToLose) {
            clearInterval(_intervalId);
            _state.gameStatus = GAME_STATUSES.LOSE;
        } else {
            _moveGoogleToRandomPosition();
        }
    
        _observer();
    }, 3000);
}

// _play();

// getter/selector/query/CQS/mapper
export function getPoints() {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch
    }
}

export function getGameStatus() {
    return _state.gameStatus
}

export function getGridSize() {
    return  {
        height:  _state.settings.gridSize.height,
        width: _state.settings.gridSize.width
    }
}

export function initializeSettings() {
    if (_state.gameStatus === GAME_STATUSES.SETTINGS) {
        const gridSizeSelect = document.getElementById("01").value;
        const pointsToWinSelect = document.getElementById("02").value;
        const pointsToLoseSelect = document.getElementById("03").value;

        _state.settings.gridSize.width = SETTINGS.GRIDSIZE[gridSizeSelect].cols;
        _state.settings.gridSize.height = SETTINGS.GRIDSIZE[gridSizeSelect].rows;
        _state.settings.pointsToWin = SETTINGS.POINTTOWIN[pointsToWinSelect];
        _state.settings.pointsToLose = SETTINGS.POINTTOLOSE[pointsToLoseSelect];
    } else {
        return
    }

}

export function startGame() {
    initializeSettings();
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
    _state.points.catch = 0;
    _state.points.miss = 0;
    _play();
    _observer();
}

export function getGooglePosition() {
    return  {
        x:  _state.googlePosition.x,
        y: _state.googlePosition.y
    }
}

// setter/command/mutation/side-effect
export function playAgain() {
    _state.gameStatus = GAME_STATUSES.SETTINGS;
    _state.points.catch = 0;
    _state.points.miss = 0;
    _observer();
}   

export function catchGoogle() {
    _state.points.catch++;
    if (_state.points.catch === _state.settings.pointsToWin) {
        clearInterval(_intervalId);
        _state.gameStatus = GAME_STATUSES.WIN;
    } else {
        _moveGoogleToRandomPosition();
        clearInterval(_intervalId);
        _play();
    }
    _observer();
}

