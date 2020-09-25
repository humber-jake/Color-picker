var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  // modeButtons event listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
              // if(this.textContent === "Easy"){
              //   numSquares = 3;
              // } else {
              //   numSquares = 6;
              // }   
      reset();
    }); 
  }
}

function setUpSquares(){
  for(var i=0; i < squares.length; i++){
    // Add click listeners to sqaures
    squares[i].addEventListener("click", function(){
      // grab colour of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?";
        resetButton.addEventListener("click", function(){
          resetButton.textContent = "New Colours";
        })
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match colour
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  // change colors of sqaures
  for(var i=0; i < squares.length; i++){
    if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// easybtn.addEventListener("click", function(){
//   hardbtn.classList.remove("selected");
//   easybtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i=0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })

// hardbtn.addEventListener("click", function(){
//   easybtn.classList.remove("selected");
//   hardbtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i=0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//     }
//   });

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  // change each color to match given color
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num){
  // make an array
  var arr = []
  // repeat num times
  for(var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor())
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a red from 0 to 155
  var r = Math.floor(Math.random() * 256)
  // pick a green from 0 to 155
  var g = Math.floor(Math.random() * 256)
  // pick a blue from 0 to 155
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")"; 
}