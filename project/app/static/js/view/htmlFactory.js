export const htmlTemplates = {
    board: 1,
    card: 2
}

export const builderFunctions = {
    [htmlTemplates.board]: boardBuilder,
    [htmlTemplates.card]: cardBuilder
};

export function htmlFactory(template) {
    if (builderFunctions.hasOwnProperty(template)) {
        return builderFunctions[template];
    }

    console.error("Undefined template: " + template);

    return () => {
        return "";
    };
}

function boardBuilder(board) {
    return `
            <div class="card m-3">
                <h5 class="card-header" data-board-id="${board.id}">${board.title}</h5>
                <div class="card-body">
                    <a href="#" class="btn btn-primary" data-board-id="${board.id}">Show Cards</a>
                </div>
            </div>
            `;
}

function cardBuilder(card) {
    return `<div class="card" data-card-id="${card.id}">${card.title}</div>`;
}

