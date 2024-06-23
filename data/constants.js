export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    WIN: 'win',
    LOSE: 'lose'
}

export const SETTINGS = {
    GRIDSIZE: {
        "4x4": {
            cols: 4,
            rows: 4
        },
        "5x5": {
            cols: 5,
            rows: 5
        },
        "6x6": {
            cols: 6,
            rows: 6
        },
        "7x7": {
            cols: 7,
            rows: 7
        },
        "8x8": {
            cols: 8,
            rows: 8
        }
    },
    POINTTOWIN: {
        "20": 20,
        "40": 40,
        "50": 50,
        "60": 60,
        "70": 70,
        "80": 80,
    },
    POINTTOLOSE: {
        "5": 5,
        "10": 10,
        "15": 15,
        "20": 20,
        "25": 25,
    }
}


// TODO: use it instead of the elements above

export const RESULT = {
    WINNER: {
        TITLE: "You win!",
        ICON: "img/icons/winnerIcon.svg",
        MESSAGE: "You're awesome!",
    },
    LOSER: {
        TITLE: "You lose!",
        ICON: "img/icons/lossIcon.svg",
        MESSAGE: "You'll be lucky next time",
    }
}
