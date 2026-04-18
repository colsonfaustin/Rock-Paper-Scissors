function getComputerChoice(){
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

// function to get human input
function getHumanChoice() {
    let Choice = prompt("rock,paper,scissors?");
    return Choice.toLowerCase();
}

// Declare the players score variables 
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function playRound(humanChoice, computerChoice){
    // make human choice case sensitive
    //humanChoice.toLowerCase();
    
    if (humanChoice == computerChoice){
        alert("No winner , humanchoice: " +
            humanChoice + " ComputerChoice: " 
         + computerChoice);
    } else if (humanChoice =="rock" && computerChoice == "scissors") {
        alert("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else if (humanChoice =="paper" && computerChoice == "rock") {
        alert("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else if (humanChoice =="scissors" && computerChoice == "paper"){
        alert("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++
    } else {
        alert("You lost! " + computerChoice + " beats " + humanChoice );
        computerScore++;
    }
}

//function to play the whole game

function playGame(){
    
    
    while (gameRound < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameRound++;
    }

        // Create the logic to decide who is the winner
    if (humanScore > computerScore) {
        alert("You won the game  " +  humanScore + " over " + computerScore )
    } else if (humanScore == computerScore){
        alert("No winners " + computerScore + " over " + humanScore);
    } else {
            alert( "You lost the game " + computerScore + " over " + humanScore)
    }

};


playGame();
