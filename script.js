const selections = ["rock" , "paper" , "scissors"];
let computerSelection;
let playerSelection = window.prompt("Enter your choice?");

function getComputerChoice () { //This is the function that will generate random computer selection for this game

return computerSelection = selections[Math.floor(Math.random()*selections.length)];

};

function checkPlayerChoice (playerSelection) {

    if (selections.includes(playerSelection)) {
        return playerSelection;
    } else playerSelection = window.prompt ("Choose again:");

};

console.log (checkPlayerChoice(playerSelection));
console.log ("computer chose ",getComputerChoice ());

//playerSelection = window.prompt("Enter your choice?");



function playRound (playerSelection, computerSelection) {

    if (computerSelection == "rock") {
        return "draw";
    } else if (computerSelection == "paper") {
        return "computer win";
    } else {return "computer lose";}


    
};

playRound (playerSelection,computerSelection);

//console.log ("Player chose: ",playerSelection);
console.log (playRound(playerSelection,computerSelection));
