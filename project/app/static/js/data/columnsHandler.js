import { dataCRUD } from "./dataCRUD";

export let columnsHandler = {
    getColumnsByBoardId: async function (boardId) {
        return await dataCRUD.apiGet(`/api/boards/${boardId}/columns/`);
    },
}