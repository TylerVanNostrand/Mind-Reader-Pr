

function randomizeSymbolString()    {
    // create an empty string for the return
    let str = "";
    // add list of symbols
    let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", ">", "?"];
}

    // pick random symbol to represent multiple of nine
    let symbol = symbols [0]; 
    for(let i = 0; i < 99; i++) {   //loop through numbers
        if(i % 9 === 0) {              // if % of 9 then we get the symbol
            str += i ' - ' + symbol + ' ';
        } else {
            str += i + ' - ' + symbols[Math.floor(Math.random()* 10)];  //otherwise we use something other than the symbol
        }
        return str
    }

    // creates an array with a given length and joins it with the given string to repeat
function init() {
    let s = randomizeSymbolString();
    states[4].headingText = s;
    iterator = 0;
    currentState = states[iterator];
    render()
}

    // change view once NEXT button is clicked
function stateChange()  {
    document.getElementById("nextReveal").innerHTML = "nextReveal";
}

    // create the state array that will hold the different views
    let states = [
        {
            headingText: "I can read your mind.",
            buttonText:  "GO",
            thirdArea: "",
            startOver: ""
        },
        {
            headingText: "Pick a number between 01 - 99",
            buttonText: "NEXT",
            thirdArea: "When you have your number click next",
            startOver: "START OVER"
        },
        {
            headingText: "Add both digits together to get a new number",
            buttonText: "NEXT",
            thirdArea: "Ex: 14 is 1 + 4 = 5",
            startOver: "START OVER"
        },
        {
            headingText: "Subtract your new number from the original number",
            buttonText: "NEXT",
            thirdArea: "Ex: 14 - 5 = 9",
            startOver: "START OVER"
        },
        {
            headingText: null,
            buttonText: "REVEAL",
            thirdArea: "Find your new number. Note the symbol beside the number",
            startOver: "START OVER"
        },
        {
            headingText: null,
            buttonText: "",
            thirdArea: "",
            startOver: "START OVER"
        },
    ];
    
let currentState = null;
let iterator = 0;

let headingText = document.getElementById("headingText");
let buttonText = document.getElementById("nextReveal");
let thirdArea = document.getElementById("thirdArea");
let startOver = document.getElementById("startOver");

function next() {
    iterator++;
    currentState
}
