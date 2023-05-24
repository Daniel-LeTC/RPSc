const selections = ["rock" , "paper" , "scissors"];
let computerSelection;
let playerSelection = window.prompt("Enter your choice?").toLowerCase();



function getComputerChoice () { //This is the function that will generate random computer selection for this game

return computerSelection = selections[Math.floor(Math.random()*selections.length)];

};

function checkPlayerChoice () {

    if (selections.includes(playerSelection)) {
        return playerSelection;
    } playerSelection = window.prompt ("Choose again:");

};

console.log (checkPlayerChoice());
console.log ("computer chose ",getComputerChoice ());


function playRound (playerSelection, computerSelection) {

    if (computerSelection == "rock") {
        return "draw";
    } else if (computerSelection == "paper") {
        return "computer win";
    } else {return "computer lose";}


    
};




console.log (playRound(playerSelection,computerSelection));
