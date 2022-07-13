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
            return 0;
        } else if (computerChoice == "scissors") {
            return 1;
        } else {
            return -1;
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return -1;
        } else if (computerChoice == "scissors") {
            return 0;
        } else {
            return 1;
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return 1;
        } else if (computerChoice == "scissors") {
            return -1;
        } else {
            return 0;
        }
    }
}

function game() {
    let userTally = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Please choose either rock, paper, or scissors: ");
        let roundScore = playRound(userInput, computerPlay());
        if (roundScore == 1) {
            ++userTally;
            console.log("You win this round!");
        } else if (roundScore == 0) {
            console.log("This round is a tie!");
        } else {
            --userTally;
            console.log("You lose this round!");
        }
    }
    if (userTally > 0) {
        return "You win the game!";
    } else if (userTally == 0) {
        return "The game is a tie!";
    } else {
        return "You lose the game!";
    }
}

console.log(game());