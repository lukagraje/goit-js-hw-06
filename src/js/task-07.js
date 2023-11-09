const input = document.querySelector(`#font-size-control`);
const spanText = document.querySelector(`#text`);

spanText.style.fontSize = "40px";

const changeFontSize = () => {
    const currentSize = input.value;
    spanText.style.fontSize = `${currentSize}px`;
};

input.addEventListener("input", changeFontSize);
