import { dataCRUD } from "./dataCRUD.js";


export let cardsHandler = {
    getCards: async function () {

    },
    getCard: async function (cardId) {

    },
    getCardsByColumnId: async function (columnId) {
        return await dataCRUD.apiGet(`/api/boards/column/${columnId}/cards/`);
    },
    createNewCard: async function (cardTitle, boardId) {
        // creates new card, saves it and calls the callback function with its data
        return await dataCRUD.apiPost(`/api/boards/${boardId}/cards/`, {"title": cardTitle});
    },
    deleteCard: async function (cardId) {
        // delete card
        return await dataCRUD.apiDelete(`/api/boards/columns/cards/${cardId}`);
    },
}
