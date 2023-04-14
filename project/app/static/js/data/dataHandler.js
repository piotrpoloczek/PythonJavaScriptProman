export let dataHandler = {
    getBoards: async function () {
        return await apiGet("/api/boards");
    },
    getBoard: async function (boardId) {
        // the board is retrieved and then the callback function is called with the board
        return await apiGet(`/api/boards/${boardId}/`);
    },
    getColumnsByBoardId: async function (boardId) {
        return await apiGet(`/api/boards/${boardId}/columns/`);
    },
    getCardsByColumnId: async function (columnId) {
        return await apiGet(`/api/boards/column/${columnId}/cards/`);
    },
    getCard: async function (cardId) {
        // the card is retrieved and then the callback function is called with the card
        return await apiGet(`/api/cards/${cardId}/`);
    },
    createNewBoard: async function (boardTitle) {
        // creates new board, saves it and calls the callback function with its data
        return await apiPost(`/api/boards/`,{"title": boardTitle});
    },
    createNewCard: async function (cardTitle, boardId) {
        // creates new card, saves it and calls the callback function with its data
        return await apiPost(`/api/boards/${boardId}/cards/`);
    },
    deleteCard: async function (cardId) {
        // delete card
        return await apiDelete(`/api/cards/${cardId}/delete`);
    },
};  

async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    // return await response.json();
    if (response.ok) {
        return await response.json();
    }
}

async function apiPost(url, payload) {
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            payload
        ),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

async function apiDelete(url) {
    try {
        let response = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(
            payload
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        if (response.ok) {
        console.log(`DELETE request to ${url} successful.`);
        } else {
        console.error(`DELETE request to ${url} failed with status ${response.status}.`);
        }
    } catch (error) {
        console.error(`An error occurred while making DELETE request to ${url}:`, error);
    }   
}

async function apiPut(url) {


}

async function apiPatch(url) {
}
