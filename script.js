

var playerScore = 0;
var computerScore = 0;


function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.3) {
        return 'rock';
    }
    else if (num <= 0.6) {
        return 'scissors';
    }
    else if (num >= 0.6){
        return 'paper';
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    
    if (player == computerSelection) {
        return "Tie Game!"
    }
    
    if (
        (player === 'rock' && computerSelection === 'scissors') ||
        (player === 'scissors' && computerSelection === 'paper') ||
        (player === 'paper' && computerSelection === 'rock')
      ) {
        playerScore++;
        return `You Win! ${player} beats ${computerSelection}`
      }

    if (
    (computerSelection === 'rock' && player === 'scissors') ||
    (computerSelection === 'scissors' && player === 'paper') ||
    (computerSelection === 'paper' && player === 'rock')
    ) {
        computerScore++;
        return `You Win! ${computerSelection} beats ${player}`
    }
};

function game() {
    let playerSelect = prompt("Enter Rock, Paper, or Scissors!");
    for (let i = 0; i < 5; i++) {
        playRound(playerSelect, getComputerChoice());
    }

    if (playerScore > computerScore) {
        document.getElementById("results").innerHTML = `You Win!`;
        //return 'You Win!';
    }
    else if(computerScore > playerScore) {
        document.getElementById("results").innerHTML = `You Lose!`;
        //return 'You Lose!';
    }
    else if (computerScore == playerScore) {
        document.getElementById("results").innerHTML = `Tie Game!`;
    }
}




console.log(game());