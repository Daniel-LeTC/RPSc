const selections = ["rock" , "paper" , "scissors"];
let computerSelection;
let playerSelection = window.prompt("Enter your choice?").toLowerCase();



function getComputerChoice () { //This is the function that will generate random computer selection for this game

return computerSelection = selections[Math.floor(Math.random()*selections.length)];

};

function checkPlayerChoice () { //if you want to do this till the input conrrect, you should use loop

    if (selections.includes(playerSelection)) {
        return playerSelection;
    } playerSelection = window.prompt ("Choose again:");

};




function playRound (playerSelection, computerSelection) {

    if (computerSelection == "rock") {
        return "draw";
    } else if (computerSelection == "paper") {
        return "computer win";
    } else {return "computer lose";}


    
};



console.log (checkPlayerChoice());
console.log ("computer chose ",getComputerChoice ());
console.log (playRound(playerSelection,computerSelection));
console.log ("write something")

