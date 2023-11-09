function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector(`body`);
const span = document.querySelector(`.color`);
const btn = document.querySelector(`.change-color`);
function changeColor() {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  span.textContent = currentColor;  
} 

btn.addEventListener("click", changeColor);

