const getComputerChoice = function(){
    // Get a random number from 0-2
    const ComputerChoice = Math.floor(Math.random() * 3);
    let choice = "";
    if (ComputerChoice === 0) {
        choice = "rock";
    } else if (ComputerChoice === 1) {
        choice = "paper";
    } else if ( ComputerChoice === 2) {
        choice = "scissors";
    }
    return choice;
};

// functiont to get human input
const getHumanChoice = function() {
    let HumanChoice = prompt("rock,paper,scissors?");
    return HumanChoice;
}


// Declare the players score variable \