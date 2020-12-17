const itemList = document.querySelectorAll(".item");
const modal = document.querySelector(".modal");
const modal_overlay = modal.querySelector(".modal_overlay");
const modal_content = modal.querySelector(".modal_content");

const HIDDEN_CN = "hidden";

function handleOverClick() {
    modal.classList.add(HIDDEN_CN);
}

function handleClick(event){
    const clickedItem = event.target;
    const parents = clickedItem.parentNode
    
  

    modal.classList.remove(HIDDEN_CN); // modal 보이게 함

    const name = modal_content.querySelector("h1");


    name.innerText = parents.querySelector(".name").innerText;


    modal_overlay.addEventListener("click", handleOverClick);
}

function init(){

    itemList.forEach(function(item) {
        item.addEventListener("click", handleClick);
    });
}

init();