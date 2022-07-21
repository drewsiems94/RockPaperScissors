let userTally = 0;
let computerTally = 0;
let result = "";

const display_result = document.getElementById('display_result');
const rock = document.getElementById('rock_btn');
const paper = document.getElementById('paper_btn');
const scissors = document.getElementById('scissors_btn');
const display_winner = document.getElementById('display_winner');

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
            result = `It's a tie!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        } else if (computerChoice == "scissors") {
            ++userTally;
            result = `You win!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        } else {
            ++computerTally;
            result = `You lose!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        }
    }

    if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            ++computerTally;
            result = `You lose!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        } else if (computerChoice == "scissors") {
            result = `It's a tie!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        } else {
            ++userTally;
            result = `You win!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        }
    }

    if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            ++userTally;
            result = `You win!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        } else if (computerChoice == "scissors") {
            ++computerTally;
            result = `You lose!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        } else {
            result = `It's a tie!
            Your current point total is ${userTally}.
            The computer's current point total is ${computerTally}.`;
        }
    }

    if (userTally == 5 || computerTally == 5) {
        document.getElementById("rock_btn").disabled = true;
        document.getElementById("paper_btn").disabled = true;
        document.getElementById("scissors_btn").disabled = true;
        if (userTally == 5) {
            alert("You won the game! Refresh the page to play again.");
        } else {
            alert("You lost the game! Refresh the page to play again.");
        }
    }

    display_result.textContent = result;
}

rock_btn.addEventListener('click', function () {
    playRound("rock", computerPlay());
});

paper_btn.addEventListener('click', function () {
    playRound("paper", computerPlay());
});

scissors_btn.addEventListener('click', function () {
    playRound("scissors", computerPlay());
});

