import {htmlFactory, htmlTemplates} from "../view/htmlFactory.js";
import {domManager} from "../view/domManager.js";
import {cardsHandler} from "../data/cardsHandler.js";


export let cardsManager = {
    loadCards: async function (columnId) {
        const cards = await cardsHandler.getCardsByColumnId(columnId)
        console.log(cards);
        for (let card of cards) {
            const cardBuilder = htmlFactory(htmlTemplates.card);
            const content = cardBuilder(card);
            domManager.addChild(`div#cards[data-column-id="${columnId}"]`, content);
            // add event listener to every button
            domManager.addEventListener(
                `button#delete-card[data-card-id="${card.id}"]`,
                "click",
                deleteButtonHandler
            );
        }
    },
    createCard: async function () {
        console.log("print something modal works")
        let titleField = document.querySelector("input#title-card");
        console.log(titleField);
        let title = titleField.value;
        console.log("text from field: " + title);
        cardsHandler.createNewCard(title);
    }
};

function deleteButtonHandler(clickEvent) {
    var card_id = clickEvent.currentTarget.dataset.cardId;
    console.log("delete card: "+ card_id)
    cardsHandler.deleteCard(card_id)
}
