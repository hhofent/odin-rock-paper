let computerChoice; 
let playerChoice;
let x;
let result;
let cScore = 0;
let pScore = 0;
let bestOf;
let chosen = false;
let started = false;
const resultCont = document.querySelector('.resultCont');
const resultDisplay = document.querySelector('.resultDisplay');
const resultTop = document.querySelector('.resultTop');
const resultBottom = document.querySelector('.resultBottom');
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
    startGame();
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener("click", () => {
    playerChoice = 'paper';
    chosen = true;
    startGame();
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener("click", () => {
    playerChoice = 'scissors';
    chosen = true;
    startGame();
});

const playRound = (playerChoice, computerChoice) => {
        if (computerChoice === playerChoice.toLowerCase()) {
            return "This round is a tie.";
        } else if (((computerChoice === "paper") && (playerChoice.toLowerCase() === "rock")) || ((computerChoice === "rock") && (playerChoice.toLowerCase() === "scissors")) || ((computerChoice === "scissors") && (playerChoice.toLowerCase() === "paper"))) {
            return "You've lost this round.";
        } else return "You've won this round.";
};

const game = (bestOf) => {
    if ((cScore < bestOf) && (pScore < bestOf)) {
        started = true;
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
            resultDisplay.classList.add('shownDisplay');
            resultCont.classList.add('shownCont');
            resultTop.classList.add('shownTop');
            resultBottom.classList.add('shownBottom');
            resultDisplay.append;
            resultCont.append;
            resultTop.append;
            resultBottom.append;
        };
        if (cScore == bestOf) {
            resultDisplay.textContent = "You've lost! Imagine losing to a robot "+cScore+"-"+pScore;
            resultDisplay.classList.add('shownDisplay');
            resultCont.classList.add('shownCont');
            resultTop.classList.add('shownTop');
            resultBottom.classList.add('shownBottom');
            resultDisplay.append;
            resultCont.append;
            resultTop.append;
            resultBottom.append;
        };
            
        chosen = false;
    };    
};

const start = document.querySelector('#start');
start.addEventListener("click", () => {
    bestOf = roundSelect.value;
    console.log(bestOf);
    document.getElementById('selecterCont').style.opacity = "0";
    document.getElementById('startCont').style.opacity = "0";
    startGame();
})

const startGame = () => {
    if (chosen == true) {
        game(bestOf);
    }
};
