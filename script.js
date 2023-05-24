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




function playRound (playerSelection, computerSelection) { //A evaluation function to check who win a game round

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                return "draw";
            } else if (computerSelection == "paper") {
                return "lose";
            } else {return "win";}
            break;
        
        case "paper":
            if (computerSelection == "rock") {
                return "win";
            } else if (computerSelection == "paper") {
                return "draw";
            } else {return "lose";}
            break;
        
        case "scissors":
            if (computerSelection == "rock") {
                return "lose";
            } else if (computerSelection == "paper") {
                return "win";
            } else {return "draw";}
            break;


    }
};



console.log (checkPlayerChoice());
console.log ("computer chose ",getComputerChoice ());
console.log (playRound(playerSelection,computerSelection));


