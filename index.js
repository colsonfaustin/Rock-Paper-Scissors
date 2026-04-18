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

// functiont to get human input
function getHumanChoice() {
    let HumanChoice = prompt("rock,paper,scissors?");
    return HumanChoice;
};


// Declare the players score variables 
let humanScore = 0;
let computerscore = 0;

// write the logic to play single round
function playRound(humanChoice, computerChoice){
    // make humanChoice case sensitive
    humanChoice.toLowerCase();
    console.log()
    if (humanChoice == computerChoice){
        alert("No winner , humanchoice: " +
             humanChoice + " ComputerChoice: " 
             + computerChoice);
    } else if (humanChoice =="rock" && computerChoice == "scissors") {
        alert("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice =="paper" && computerChoice == "rock") {
        alert("You win! " + humanChoice + " beats " + computerChoice);
    } else if (humanChoice =="scissors" && computerChoice == "paper"){
        alert("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        alert("You lost! " + computerChoice + " beats " + humanChoice );
    }

};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
