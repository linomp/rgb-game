var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var theBody = document.querySelector("body");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var backgroundColor = "#232323";
var hardModeSquares = 6;
var easyModeSquares = 3;
var maxSquares;
var secretColor;

/**** MAIN ACTIVITY ****/

setMaxSquares(hardModeSquares);
refreshColors();

for (var i = 0; i < maxSquares; i++){ 
    //assign click listener
    squares[i].addEventListener("click", function(){        
        // grab color pof picked square
        var guess = this.style.backgroundColor;     
        // compare to secretColor
        if(guess === secretColor){
            msgDisplay.textContent = "Correct!!";
            reset.textContent = "Play Again";
            paintAll(secretColor);
        }else{
            msgDisplay.textContent = "Wrong!!";
            this.style.backgroundColor = backgroundColor;
        }
    });
} 

reset.addEventListener("click", resetAll);
easy.addEventListener("click", setEasyMode);
hard.addEventListener("click", setHardMode);

/************************/

function getRandomColor(){
    var colorString = randInt(0,255) + ", " + randInt(0,255) + ", " + randInt(0,255);
    return "rgb(" + colorString +")";
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function paintAll(color){
    h1.style.backgroundColor = color;
    for (var i = 0; i < maxSquares; i++){
        squares[i].style.backgroundColor = color;
    }
}

function refreshColors(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = backgroundColor;
    }
    for (var i = 0; i < maxSquares; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
    //fetch the color of a random square
    secretColor = squares[randInt(0, maxSquares)].style.backgroundColor;
    colorDisplay.textContent = secretColor;
}

function setEasyMode(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    setMaxSquares(easyModeSquares);
    resetAll();
}

function setHardMode(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    setMaxSquares(hardModeSquares);
    resetAll();
}

function resetAll(){
    refreshColors();
    msgDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue"; 
}

function setMaxSquares(num){
   maxSquares = num > squares.length ? squares.length : num;
}

