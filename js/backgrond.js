const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const bg = document.getElementById("bg");
const choseImg = imgs[Math.floor(Math.random()*imgs.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${choseImg}`;
bg.appendChild(bgImg);
bgImg.style.height = "100%";
bgImg.style.width = "100%";
// bg.style.backgroundImage = "url(bgImg)";