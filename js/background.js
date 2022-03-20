const images = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg",
  "bg7.jpg",
  "bg8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
