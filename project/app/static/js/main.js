import {boardsManager} from "./controller/boardsManager.js";
import { cardsManager } from "./controller/cardsManager.js";
import { dataHandler } from "./data/dataHandler.js";
import { domManager } from "./view/domManager.js";


function init() {
    boardsManager.loadBoards();

    let createNewBoardButton = document.querySelector("a#new-board");
    createNewBoardButton.addEventListener("click", dataHandler.createNewBoard);
}

init();
