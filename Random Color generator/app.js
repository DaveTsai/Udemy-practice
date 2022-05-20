const buttons = document.querySelector("button");
const h1 = document.querySelector(`h1`)
function rgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

buttons.addEventListener(`click`, function () {
    const newColor = rgb();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})