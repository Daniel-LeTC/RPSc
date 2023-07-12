const rock = document.getElementById("rockbtn");
const paper = document.getElementById("paperbtn");
const scissors = document.getElementById("scissorsbtn");
const selections = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

function handleClick(playerSelection) {

    computerSelection = selections[Math.floor(Math.random() * selections.length)];
    playRound(playerSelection, computerSelection);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
};

rockbtn.addEventListener('click', () => handleClick('rock'))
paperbtn.addEventListener('click', () => handleClick('paper'))
scissors.addEventListener('click', () => handleClick('scissors'))

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'tie';
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'player win';
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        return 'computer win';
    }
};



