import {boardsManager} from "./controller/boardsManager.js";

function init() {
    boardsManager.loadBoards();
}

console.log("this works");
init();
