export function playGameButton(){
    const element = document.createElement("button");
    element.classList.add("play-button");

    element.append("START GAME")

    return element;
}