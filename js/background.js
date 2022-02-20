const images = [
  "IMG_1606.jpg",
  "IMG_2801.jpg",
  "IMG_E2598.jpg",
  "IMG_E2602.jpg",
  "IMG_E2701.jpg",
  "IMG_E2703.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);
