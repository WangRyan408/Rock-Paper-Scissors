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
const btn = document.getElementsByClassName('space');





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




function replay() {
    document.getElementById("round_result").textContent = ``;
    document.getElementById("player").textContent = `0`;
    document.getElementById("computer").textContent = `0`;
    document.getElementById('playAgain').remove();
    playerScore = 0;
    computerScore = 0;
    //button.removeEventListener('click', () => replay());

}


function game(playerSelect) {
    //const test = 'rock';
    if (playerScore == 5 || computerScore == 5){
        btn.disabled = true;
        rock.removeEventListener('click', () => game('rock'));
        paper.removeEventListener('click', () => game('paper'));
        scissor.removeEventListener('click', () => game('scissors'));


        if (document.getElementById('playAgain') == null) {
            let play = document.getElementById('play');
            let butt = document.createElement("button");
            play.appendChild(butt);
            butt.setAttribute('type', "button");
            butt.setAttribute('id', 'playAgain');
            const buttonText = document.getElementById('playAgain').textContent = "Play Again?";
            const button = document.querySelector('#playAgain');
            button.addEventListener('click', () => replay());
        }
       
        if (document.getElementById('playAgain')) {
            const button = document.querySelector('#playAgain');
            button.addEventListener('click', () => replay());
        }

        if (playerScore > computerScore) {
            document.getElementById("round_result").textContent = `You Win!`;
            return 'You Win!';
        }
        else if(computerScore > playerScore) {
            document.getElementById("round_result").textContent = `You Lose!`;
            return 'You Lose!';
        }


    }
        playRound(playerSelect, getComputerChoice());
        document.getElementById("player").textContent = `${playerScore}`;
        document.getElementById("computer").textContent = `${computerScore}`;
    
    if (playerScore == 5 || computerScore == 5){
        btn.disabled = true;
        rock.removeEventListener('click', () => game('rock'));
        paper.removeEventListener('click', () => game('paper'));
        scissor.removeEventListener('click', () => game('scissors'));

        
        if (document.getElementById('playAgain') == null) {
            let play = document.getElementById('play');
            let butt = document.createElement("button");
            play.appendChild(butt);
            butt.setAttribute('type', "button");
            butt.setAttribute('id', 'playAgain');
            const buttonText = document.getElementById('playAgain').textContent = "Play Again?";
        }

        if (document.getElementById('playAgain')) {
            const button = document.querySelector('#playAgain');
            button.addEventListener('click', () => replay());
        }

        if (playerScore > computerScore) {
            document.getElementById("round_result").textContent = `You Win!`;
            return 'You Win!';
        }
        else if(computerScore > playerScore) {
            document.getElementById("round_result").textContent = `You Lose!`;
            return 'You Lose!';
        }


    }
    //event.stopPropagation();
}

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissor.addEventListener('click', () => game('scissors'));

    


//console.log(game());