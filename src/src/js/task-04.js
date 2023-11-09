const decrementButton = document.querySelector(`button[data-action="decrement"]`);
const incrementButton = document.querySelector(`button[data-action="increment"]`);
const currentValue = document.querySelector("#value");

let counterValue = 0;
function decreaseValue() {
    counterValue += -1;
    currentValue.textContent = counterValue;
}
function increaseValue() {
    counterValue += 1;
    currentValue.textContent = counterValue;
}

decrementButton.addEventListener("click", decreaseValue);
incrementButton.addEventListener("click", increaseValue);
