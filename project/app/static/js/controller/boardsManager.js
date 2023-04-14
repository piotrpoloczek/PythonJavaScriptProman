import {dataHandler} from "../data/dataHandler.js";
import {htmlFactory, htmlTemplates} from "../view/htmlFactory.js";
import {domManager} from "../view/domManager.js";
import {cardsManager} from "./cardsManager.js";
import { columnManager } from "./columnManager.js";


export let boardsManager = {
    loadBoards: async function (userId) {
        console.log("get user id from flask: " + userId);
        const boards = await dataHandler.getBoards();
        for (let board of boards) {
            console.log("board type: " + board.type + ", board userId: " + board.user_id);
            if (board.type == 1 || board.user_id == userId) {
                const boardBuilder = htmlFactory(htmlTemplates.board);
                const content = boardBuilder(board);
                domManager.addChild("#root", content);
                domManager.addEventListener(
                    `button[data-board-id="${board.id}"]`,
                    //`.toggle-board-button[data-board-id="${board.id}"]`,
                    "click",
                    showHideButtonHandler
                );
            }; 
        }
    },

    createBoard: async function () {
        
    },
};

async function showHideButtonHandler(clickEvent) {
    console.log("button clicked");
    
    const boardId = await clickEvent.currentTarget.dataset.boardId;
    const currentTargetElement = await clickEvent.currentTarget;
    let boardElement = document.querySelector(`#div-cards[data-board-id="${boardId}"]`)
    console.log(currentTargetElement)
    if (currentTargetElement.classList.contains("open")){
        currentTargetElement.classList.remove("open");
        currentTargetElement.classList.add("closed")
        
        console.log(boardElement)
        boardElement.innerHTML = "";
        boardElement.classList.remove("height-500");
        boardElement.classList.add("height-0")
    } else {
        boardElement.classList.remove("height-0");
        boardElement.classList.add("height-500")
        currentTargetElement.classList.add("open");
        currentTargetElement.classList.remove("closed");
        let divCards = document.querySelector(`#div-cards[data-board-id="${boardId}"]`);
        divCards.classList.add("height-500");
        console.log(boardId);

        columnManager.loadColumn(boardId);
    }
    
}