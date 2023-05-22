const selections = ["rock" , "paper" , "scissors"];
let computerSelection;

function getComputerChoice (computerSelection) { //This is the function that will generate random computer selection for this game

return computerSelection = selections[Math.floor(Math.random()*selections.length)];

};



console.log (getComputerChoice (computerSelection));