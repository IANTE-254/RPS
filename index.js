//Variables
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function checkWinner() {
    if (playerScore === 5) {
        alert("You reached 5 points! You win the game!");
        console.log("Resetting scores...");
        resetScores();
    } else if (computerScore === 5) {
        alert("Computer reached 5 points! You lose the game!");
        console.log("Resetting scores...");
        resetScores();
    }
}

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "TIE!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    //Results display logic
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultsDisplay.textContent = result;
    switch (result) {
        case "YOU WIN":
            resultsDisplay.classList.add("greenText");
            resultsDisplay.classList.remove("redText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            checkWinner();
            break;
        case "YOU LOSE":
            resultsDisplay.classList.add("redText");
            resultsDisplay.classList.remove("greenText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            checkWinner();
            break;
        case "TIE!":
            resultsDisplay.classList.remove("redText");
            resultsDisplay.classList.remove("greenText");
            break;
    }

}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
