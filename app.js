// function randomColor() {
//     return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
// }

// function setRandomBgColor() {
//     const newBgColor = randomColor();
//     boxParaRule.style.setProperty("background-color", newBgColor);
// }

// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

const clearCell = document.querySelector('#clearBtn');
const paintAgain = document.querySelector('#color');
const clearAll = document.querySelector('#clearAll');

const container = document.querySelector("#container");

container.addEventListener('mouseover', (e) => {
    //e.target.style.backgroundColor = "orange";
    e.target.classList.add("active");
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


paintAgain.addEventListener('click', (e)=>{
    container.addEventListener('mouseover', (e) => {
        //e.target.style.backgroundColor = "orange";
        e.target.classList.add("active");
    });
})

clearCell.addEventListener('click', (e) => {
    container.addEventListener('mouseover', (e) => {
        e.target.classList.remove("active");
    });
} )

