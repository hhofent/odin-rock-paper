let computerChoice; 
let playerChoice;
let x;
let result;
let cScore = 0;
let pScore = 0;
let bestOf;
let chosen = false;
const resultDisplay = document.querySelector('#resultDisplay');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerChoiceCont = document.querySelector("#playerChoiceCont");
const computerChoiceCont = document.querySelector("#computerChoiceCont");
const roundSelect = document.querySelector("#roundSelect");

const getComputerChoice = () => {x = Math.floor(Math.random() * 3) 
    if (x === 1) {
        computerChoice = "rock";
    } else if (x === 2) {
        computerChoice = "paper";
    } else {computerChoice = "scissors"}
};

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
    playerChoice = 'rock';
    chosen = true;
    bestOf = roundSelect.value;
    game(bestOf);
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener("click", () => {
    playerChoice = 'paper';
    chosen = true;
    bestOf = roundSelect.value;
    game(bestOf);
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener("click", () => {
    playerChoice = 'scissors';
    chosen = true;
    bestOf = roundSelect.value;
    game(bestOf);
});

const playRound = (playerChoice, computerChoice) => {
        if (computerChoice === playerChoice.toLowerCase()) {
            return "This round is a tie.";
        } else if (((computerChoice === "paper") && (playerChoice.toLowerCase() === "rock")) || ((computerChoice === "rock") && (playerChoice.toLowerCase() === "scissors")) || ((computerChoice === "scissors") && (playerChoice.toLowerCase() === "paper"))) {
            return "You've lost this round.";
        } else return "You've won this round.";
};

const game = (bestOf) => {
    if  (chosen == true) {
        if ((cScore < bestOf) && (pScore < bestOf)) {
            getComputerChoice();
            result = playRound(playerChoice, computerChoice);

            if (result === "You've lost this round.") {
                ++cScore;
            } else if (result === "You've won this round.") {
                ++pScore;
            };
            
            playerScore.textContent = pScore;
            playerScore.append;
            playerChoiceCont.textContent = playerChoice;
            playerChoiceCont.append;
            computerScore.textContent = cScore;
            computerScore.append;
            computerChoiceCont.textContent = computerChoice;
            computerChoiceCont.append;
            
            if (pScore == bestOf) {
                resultDisplay.textContent = "You've won! You've beaten a simple machine by pure chance "+pScore+"-"+cScore;
                resultDisplay.append;
            };
            if (cScore == bestOf) {
                resultDisplay.textContent = "You've lost! Imagine losing to a robot "+cScore+"-"+pScore;
                resultDisplay.append;
            };
            
            chosen = false;
        };
    };
};


