/*
I know the project objectives was to do this entirely in console,
but its easier on my eyes to have this output onto the browser
*/

var playerScore = 0;
var computerScore = 0;
var playerSelect = "";


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

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
        //return `You Win! ${player} beats ${computerSelection}`
      }

    if (
    (computerSelection === 'rock' && player === 'scissors') ||
    (computerSelection === 'scissors' && player === 'paper') ||
    (computerSelection === 'paper' && player === 'rock')
    ) {
        computerScore++;
       // return `You Win! ${computerSelection} beats ${player}`
    }
};

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissor.addEventListener('click', () => game('scissors'));

function game(playerSelect) {
    //const test = 'rock';
        playRound(playerSelect, getComputerChoice());
        document.getElementById("player").textContent = `${playerScore}`;
        document.getElementById("computer").textContent = `${computerScore}`;
    
    if (playerScore == 5 || computerScore == 5){
        if (playerScore > computerScore) {
            document.getElementById("round_result").textContent = `You Win!`;
            return 'You Win!';
        }
        else if(computerScore > playerScore) {
            document.getElementById("round_result").textContent = `You Lose!`;
            return 'You Lose!';
        }
    }
    
}




//console.log(game());