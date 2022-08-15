/*
I know the project objectives was to do this entirely in console,
but its easier on my eyes to have this output onto the browser
*/

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
        alert("Tie!");
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
    //const test = 'rock';
    for (let i = 0; i < 5; i++) {
        let playerSelect = prompt("Enter Rock, Paper, or Scissors!");
        playRound(playerSelect, getComputerChoice());
        document.getElementById("player").innerHTML = `${playerScore}`;
        document.getElementById("computer").innerHTML = `${computerScore}`;

        if (playerScore == computerScore) {
            alert("Tie!")
        }
    }

    if (playerScore > computerScore) {
        document.getElementById("results").innerHTML = `You Win!`;
        return 'You Win!';
    }
    else if(computerScore > playerScore) {
        document.getElementById("results").innerHTML = `You Lose!`;
        return 'You Lose!';
    }
    
}




console.log(game());