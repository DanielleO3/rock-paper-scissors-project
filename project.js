// function practice:
// function favoriteAnimal(animal) {
//     return animal + "is my favorite animal!"
// }
// console.log(favoriteAnimal('chicken'))

//--------------------------------------------------------

const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    // return choice + " " + "beats paper"

    return choices[Math.floor(Math.random() * 3)]
}
console.log(getComputerChoice());


// either return rock, paper, or scissors

//     function random(number) {
//         return Math.floor(Math.random() * number);
//     }
// }
// console.log(getComputerChoice(choice));


function checkWinner(playerSelection, computerSelection) {
    //write code here
    if (playerSelection == computerSelection) {
        return "It's a tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    //write code here
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You Win!${playerSelection} beats ${computerSelection}`

    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
// return instead of console .log
console.log(playRound(playerSelection, computerSelection));


// ------------------------------------------------------
function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if (choices.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}



function playGame() {
    console.log("welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Game Over");
}

playGame();



















// function playRound(playerSelection, computerSelection) {
//     return "Winner! Rock beats scissors"
// }
// const playerSelection = "scissors";

// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

