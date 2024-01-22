let choice = "rock";
function getComputerChoice() {
    // either return rock, paper, or scissors
    //code block to be executed: 

    if (choice === "rock") {
        console.log("rock");
    } else if (choice === "paper") {
        console.log("paper");
    } else {

        console.log("scissors");
    }
}
getComputerChoice();


//write function that plays single round of Rock paper Scissors.
//should take 2 parameters (parameter 1, parameter2);
//declare variable first 
function singleRound(playerSelection, computerSelection) {
    // code to be executed (set of instructions):

    //return a string that declares a winner of the round.. 
    return "Winner! Rock beats scissors"
}
//playSelection make a choice
const playerSelection = "scissors";


// computerSelection makes a choice
//*function expression:functions stored in variable*
const computerSelection = getComputerChoice();


//call function (function expression invocation):
//console.log(variableName(parameter1, parameter2));
console.log(singleRound(playerSelection, computerSelection));



// function game() {
//code block to be executed:
//* use ^ previous function INSIDE of this
// }
