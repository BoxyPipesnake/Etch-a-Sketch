function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

const grid1 = document.querySelector('#grid1');
const grid2 = document.querySelector('#grid2');
const grid3 = document.querySelector('#grid3');

const container = document.querySelector("#container");

const clearCell = document.querySelector('#clearBtn');
const paintAgain = document.querySelector('#color');
const clearAll = document.querySelector('#clearAll');
const multiColor = document.querySelector('#multiColor');


container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "black";
});

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16)

function removeChild(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild); // Remove the first child of list everytime until the list is null.
    }
}

let containerElements = document.querySelectorAll('.grid-container *');

grid2.addEventListener('click', ()=>{
    removeChild();
    makeRows(20, 20);
    containerElements = document.querySelectorAll('.grid-container *');
});


grid1.addEventListener('click', ()=>{
    removeChild()
    makeRows(16, 16);
    containerElements = document.querySelectorAll('.grid-container *');
});

paintAgain.addEventListener('click', ()=>{
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "black";
    });
})

clearCell.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "white";
    });
} )

clearAll.addEventListener('click', ()=>{
    containerElements.forEach((element) => {
        element.style.backgroundColor = "white";
    });
})

multiColor.addEventListener('click', ()=>{
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = random_bg_color();
    });
})