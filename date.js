const dateContainer = document.querySelector(".js-date");
const dateTitle = dateContainer.querySelector("h2");

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  dateTitle.innerText = `${year}년${month < 10 ? `0${month}` : month}월${
    day < 10 ? `0${day}` : day
  }일`;
}

function init() {
  getDate();
}
init();
