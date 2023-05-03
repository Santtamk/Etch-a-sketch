//get the class
//create a new div which has a css property of display grid
//add a border of 1px
// function that creates a grid
// for loop that lets us create multiple selection
// default is 16*16
// loop to clear the divs


const numberOfgrid = (number) => {//function to create n number of grids
  let container = document.querySelector(".container");//selects the parent div
  container.setAttribute(//style of the parent
    "style",
    `display:grid;  grid-template-columns: repeat(${number}, 35px); grid-template-row: auto`//adds the number of grids 
  );
  container.innerHTML = "";//starts with empty so that for every input we can start fresh
  multiple = number * number;//calculates the grid for the loop n^2
  for (let i = 0; i < multiple; i++) {//for loop to create child div along with style and class
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    newDiv.setAttribute("style", "border: 1px solid silver; padding:10px;");
    container.appendChild(newDiv);
  }
  const gridItems = document.querySelectorAll(".grid-item");//selects all the child container created through the above loop
  const colorSelector = document.querySelector("#color-selector");//selects the div id this will help us initiate the color for the child container 

  let isDrawing = false;//boolean for event

  gridItems.forEach((gridItem) => {//for each child element
    gridItem.addEventListener("mousedown", function (e) {//mouse down works when you click hold and move the cursor between the divs 
      isDrawing = true;//condition that the user is drawing 
      gridItem.classList.add("grid-item-active");//creates a class list that gets black as the default color
      gridItem.style.backgroundColor = colorSelector.value;//lets us choose any RGB
    });
    gridItem.addEventListener("mousemove", function (e) {//this is when we move the mouse while its clicked 
      if (isDrawing) {//isdrawing is true  
        gridItem.classList.add("grid-item-active");
        gridItem.style.backgroundColor = colorSelector.value;
      }
    });
    gridItem.addEventListener("mouseup", function (e) {//this is when the mouse is released 
      isDrawing = false;//the drawing stops - the above two works together when drawing 
    });
  });
};

const layout = document.querySelector("#layout");//the button for the grid layout 
layout.addEventListener("click", () => {//click event to run the above function and also a prompt for the input
  let number = prompt("Enter the number of grids up to 99:");
  numberOfgrid(number);
});


const remove = () => {//function to clear the background color on all the grids 
  let gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((gridItem) => {//removes the class with a for loop 
    gridItem.classList.remove("grid-item-active");
    gridItem.style.backgroundColor = "";
  });
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", remove);//click event with the remove function 
