import { eventListeners } from "./controller/eventListeners.js";
import { userManager } from "./controller/userManager.js";


function init() {

    userManager.checkIfUser();
    eventListeners.addGlobalEventListeners();

// dragging cards
    // const draggables = document.querySelectorAll('.card-m-2')
    // const containers = document.querySelectorAll('.col-sm-4')

    // draggables.forEach(draggable => {
    //     draggable.addEventListener('dragstart', () => {
    //         console.log('drag start')
    //         draggable.classList.add('dragging')
    //     })

    //     draggable.addEventListener('dragend', () =>{
    //         draggable.classList.remove('.dragging')
    //         console.log('drag over')
    //     })
    // })

    // containers.forEach(container => {
    //     container.addEventListener('dragover', e => {
    //         e.preventDefault()
    //         const afterElement = getDragAfterElement(container, e.clientY)
    //         const draggable = document.querySelector('.dragging')
    //         if (afterElement == null){
    //         container.appendChild(draggable)
    //         }
    //         else{
    //             container.insertBefore(draggable, afterElement)
    //         }
    //     })
    // })

    // function getDragAfterElement(container, y) {
    //     const draggableElements = [...container.querySelectorAll('.card-m-2:not(.dragging)')]

    //     return draggableElements.reduce((closest, child)=> {
    //         const box = child.getBoundingClientRect()
    //         const offset = y - box.top - box.height / 2
    //         console.log(box)
    //         if (offset < 0 && offset > closest.offset){
    //             return {offset: offset, element: child}
    //         }
    //         else {
    //             return closest
    //         }
    //     }, {offset: Number.NEGATIVE_INFINITY}.element)

    // }
}

init();