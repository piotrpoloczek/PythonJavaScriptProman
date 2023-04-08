import {boardsManager} from "./controller/boardsManager.js";
import { dataHandler } from "./data/dataHandler.js";


function init() {
    boardsManager.loadBoards();

    let createNewBoardButton = document.querySelector("a#new-board");
    createNewBoardButton.addEventListener("click", dataHandler.createNewBoard);
}

init();
