import { boardsManager } from "./boardsManager.js";

let saveBoardButton = document.querySelector("button#save-board");
saveBoardButton.addEventListener("click", boardsManager.createBoard);

// let saveCardButton = document.querySelector("button#save-card");
// saveCardButton.addEventListener("click", saveCard);