const loveBg =
document.querySelector(".love-bg");

const emoji = [
  "💖",
  "💕",
  "✨",
  "🫶",
  "🌸"
];

function createLove(){

  const love =
  document.createElement("span");

  love.classList.add("love");

  love.innerHTML =
  emoji[
    Math.floor(
      Math.random() * emoji.length
    )
  ];

  love.style.left =
  Math.random() * 100 + "vw";

  love.style.fontSize =
  Math.random() * 20 + 18 + "px";

  love.style.animationDuration =
  Math.random() * 4 + 5 + "s";

  loveBg.appendChild(love);

  setTimeout(() => {

    love.remove();

  },9000);

}

setInterval(createLove,350);