//get the class

//create a new div which has a css property of display grid
//add a border of 1px

// function that creates a grid

// for loop that lets us create multiple loop
// default is 16*16

let container = document.querySelector(".container");
container.setAttribute(
  "style",
  "display:grid;  grid-template-columns: repeat(16, 35px); grid-template-row: auto"
);

for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("grid-item");
  newDiv.setAttribute("style", "border: 1px solid silver; padding:10px;");
  container.appendChild(newDiv);
}

const gridItems = document.querySelectorAll(".grid-item");
const colorSelector = document.querySelector("#color-selector");

let isDrawing = false;

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mousedown", function (e) {
    isDrawing = true;
    gridItem.classList.add("grid-item-active");

  });
  gridItem.addEventListener("mousemove", function (e) {
    isDrawing = true;
    gridItem.classList.add("grid-item-active");
    gridItem.style.backgroundColor = colorSelector.value;
  });
  gridItem.addEventListener("mouseup", function (e) {
    isDrawing = false;
  });
});

const remove = () => {
    let gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem) =>{
        gridItem.classList.remove("grid-item-active");
        gridItem.style.backgroundColor = "";
    });
}


const clear = document.querySelector('#clear')
clear.addEventListener('click', remove);



