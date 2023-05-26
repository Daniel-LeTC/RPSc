//Declaration and assignment of constant and variables to use for this game

const selections = ["rock" , "paper" , "scissors"];
let computerSelection;
let playerSelection; 

function getComputerChoice () { //This is the function that will generate random computer selection for this game

return computerSelection = selections[Math.floor(Math.random()*selections.length)];

};

function getPlayerChoice () { //This is the function that will make user input selection for this game
    return playerSelection = window.prompt("Enter your choice?").toLowerCase();
    
    
};

/*
function checkPlayerChoice () { //if you want to do this till the input conrrect, you should use loop

    if (selections.includes(playerSelection)) {
        return playerSelection;
    } playerSelection = window.prompt ("Choose again:");

};
*/
function playRound () { //A evaluation function to check who win a game round

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





function game() { //This function works as a full game, get player choice, generate computer choice, the evaluate who wins
    getPlayerChoice ();
    getComputerChoice();
    playRound();
    console.log("you chose: ",playerSelection);
    console.log("computer chose: ",computerSelection);
    console.log ("Result: ", playRound());
    console.log ("SESSION ENDS");
};

game ();
game ();
game ();
game ();
game ();


//Beside the call stacks order, function, property or command will execute from top to bottom. Review parameter in function, call stacks, how function in JS execute, return in function



