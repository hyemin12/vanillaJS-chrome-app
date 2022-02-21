const images = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.webp",
  "bg6.jpg",
  "bg7.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/${chosenImage})`;
document.body.style.background.size = "cover";
document.body.style.backgroundPosition = "center";
