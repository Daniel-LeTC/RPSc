const selections = ["rock" , "paper" , "scissors"];
let computerSelection;
let playerSelection;

function getComputerChoice () { //This is the function that will generate random computer selection for this game

return computerSelection = selections[Math.floor(Math.random()*selections.length)];

};

function getPlayerChoice () {

};

console.log (getComputerChoice ());

playerSelection = "rock";

function playRound (playerSelection, computerSelection) {

    if (computerSelection = "rock") {
        return "draw"
    } else if (computerSelection = "paper") {
        return "player win"
    } else {return "lose"}
    
};


console.log (playerSelection);
console.log (playRound(playerSelection,computerSelection));
