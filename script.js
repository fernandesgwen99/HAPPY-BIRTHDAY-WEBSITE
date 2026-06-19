

  let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");

  current = (current + 1) % slides.length;

  slides[current].classList.add("active");
}, 3000);
function openMemory(element){

    element.style.display = "none";

    element.nextElementSibling.style.display = "block";

}
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
const container = document.getElementById("hearts-container");

for (let i = 0; i < 30; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

   const hearts = ["❤️", "💖", "💕", "💗", "💝"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = Math.random() * 100 + "vh";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    container.appendChild(heart);

}
