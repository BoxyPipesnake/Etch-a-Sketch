// function randomColor() {
//     return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
// }

// function setRandomBgColor() {
//     const newBgColor = randomColor();
//     boxParaRule.style.setProperty("background-color", newBgColor);
// }

// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

const container = document.getElementById("container");

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "orange";
});


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
