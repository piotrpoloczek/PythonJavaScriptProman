import {boardsManager} from "./controller/boardsManager.js";
import { cardsManager } from "./controller/cardsManager.js";


function init() {
    boardsManager.loadBoards();
}

init();
