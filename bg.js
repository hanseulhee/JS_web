const body = document.querySelector("body");

const IMG_NUMBER = 5;

const paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
};

const genRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
};

const bginit = () => {
  const randomNumber = genRandom();
  paintImage(randomNumber);
};

bginit();
