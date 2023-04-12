import {dataHandler} from "../data/dataHandler.js";
import {htmlFactory, htmlTemplates} from "../view/htmlFactory.js";
import {domManager} from "../view/domManager.js";
import {cardsManager} from "./cardsManager.js";


export let columnManager = {
    loadColumn: async function(boardId) {
        const columns = await dataHandler.getColumnsByBoardId(boardId);
        console.log(columns);
        for(let card of cards) {
            console.log(card.status_id);
            const columnBuilder = htmlFactory(htmlTemplates.column);
            const content = columnBuilder(card);
            domManager.addChild(`#div-cards[data-board-id="${boardId}"]`, content);
        }
    }
}

// loadBoards: async function (userId) {
//     console.log("get user id from flask: " + userId);
//     const boards = await dataHandler.getBoards();
//     for (let board of boards) {
//         console.log("board type: " + board.type + ", board userId: " + board.user_id);
//         if (board.type == 1 || board.user_id == userId) {
//             const boardBuilder = htmlFactory(htmlTemplates.board);
//             const content = boardBuilder(board);
//             domManager.addChild("#root", content);
//             domManager.addEventListener(
//                 `button[data-board-id="${board.id}"]`,
//                 //`.toggle-board-button[data-board-id="${board.id}"]`,
//                 "click",
//                 showHideButtonHandler
//             );
//         }; 
//     }
// },