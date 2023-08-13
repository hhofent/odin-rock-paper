let computerChoice; 
let playerChoice;
let x;
let result;
let cScore = 0;
let pScore = 0;
let bestOf;

// create playRound function, with variables playerChoice and computerChoice 
// convert playerChoice to lower case and compare playerChoice to "rock" "paper" or "scissors", NO = try again
// YES = convert playerChoice to lower case and compare to computerChoice, YES = tie condition
// NO = convert playerChoice to lower case and compare computer win conditions, YES = player loss condition
// NO = player win condition
let playRound = (playerChoice, computerChoice) => {
    if ((playerChoice.toLowerCase() === "rock") || (playerChoice.toLowerCase() === "paper") || (playerChoice.toLowerCase() === "scissors")) {
        if (computerChoice === playerChoice.toLowerCase()) {
            return "This round is a tie.";
        } else if (((computerChoice === "paper") && (playerChoice.toLowerCase() === "rock")) || ((computerChoice === "rock") && (playerChoice.toLowerCase() === "scissors")) || ((computerChoice === "scissors") && (playerChoice.toLowerCase() === "paper"))) {
            return "You've lost this round.";
        } else return "You've won this round.";
    } else return "Not an option, try again!";
};

// create getComputerChoice function, assign random value 0-2 to x
// compare x to 1, YES = computerChoice = rock
// NO = compare x to 2, YES = computerChoice = paper
// NO = computerChoice = scissors
let getComputerChoice = () => {x = Math.floor(Math.random() * 3) 
    if (x === 1) {
        computerChoice = "rock";
    } else if (x === 2) {
        computerChoice = "paper";
    } else {computerChoice = "scissors"}
};

// create game function with variable bestOf
// run DO-WHILE loop WHILE cScore and pScore are less than bestOF
// playerChoice = user input
// call getComputerChoice function
// result = playRound function with variables playerChoice and computerChoice
// compare result to player loss condition, YES = increment cScore
// NO = compare result to player win condition, YES = increment pScore
// compare pScore to bestOf, YES = player win
// NO = compare cScore to bestOf, YES = computer win 
let game = (bestOf) => {
    do {
        playerChoice = prompt("Rock, paper, or scissors?");
        getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        console.log(result);
        console.log("computer choice was ", computerChoice);
        console.log("player choice was ", playerChoice);

        if (result === "You've lost this round.") {
            ++cScore;
        } else if (result === "You've won this round.") {
            ++pScore;
        }
        console.log("Computer score is ", cScore);
        console.log("Player score is ", pScore);
        console.log("best of value is ", bestOf);
        
    } while ((cScore < bestOf) && (pScore < bestOf));
    if (pScore == bestOf) {
        console.log("You've won!  Final score is ", pScore, "-", cScore);
    } else if (cScore == bestOf) {
        console.log("You've lost!  Final score is ", cScore, "-", pScore);
    }


};

// create gameLaunch function
// bestOf = user input
// calls game function with variable bestOf
let gameLaunch = () => { 
    bestOf = prompt("Ok, we're gonna go best out of...?");
    game(bestOf); 
}

gameLaunch()



/*
if (cScore === bestOf) {
        console.log("HAHAHA what a loser, you cant even beat a stupid machine.");
    } else if (pScore === bestOf) { 
        console.log("You win this time... ")
    } else {
*/


