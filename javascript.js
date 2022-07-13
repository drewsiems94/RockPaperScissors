function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return "Rock";
    } else if (play == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            return "It's a tie!";
        } else if (computerChoice == "scissors") {
            return "You win! Rock beats Scissors!";
        } else {
            return "You lose! Paper beats Rock!";
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "You lose! Rock beats Scissors!";
        } else if (computerChoice == "scissors") {
            return "It's a tie!";
        } else {
            return "You win! Scissors beats Paper!";
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return "You win! Paper beats Rock!";
        } else if (computerChoice == "scissors") {
            return "You lose! Scissors beats Paper!";
        } else {
            return "It's a tie!";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Please choose either rock, paper, or scissors: ");
        console.log(playRound(userInput, computerPlay()));
    }
}

console.log(game());