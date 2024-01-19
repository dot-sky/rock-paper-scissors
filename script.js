function getRandomNumber(upperLimit){
    upperLimit++;
    return Math.floor(Math.random()*upperLimit);
}
function displayChoice(playerPanel, option){
    const imgOption = document.createElement("img");
    switch(option){
        case 0:
            imgOption.src = "img/rock-256.png";
            break;
        case 1:
            imgOption.src = "img/paper-256.png";
            break;
        case 2: 
            imgOption.src = "img/scissors-256.png";
            break;
    }
    imgOption.classList.add("img-display-large");
    playerPanel.firstChild.remove();
    playerPanel.appendChild(imgOption);
}
function getChoiceCode(choice){
    if (choice === "rock-option"){
        return 0;
    }
    else if (choice === "paper-option"){
        return 1;
    }
    else if (choice === "scissors-option"){
        return 2;
    }
    else{
        return -1;
    }
}
function startRound(playerChoice){
    const computerChoice = getRandomNumber(2);
    displayChoice(computerPanel, computerChoice);
    displayChoice(playerPanel, playerChoice);
    if (playerChoice === computerChoice){
        statePlayer.textContent = "DRAW";
        stateComputer.textContent = "DRAW";
        playerSection.style.backgroundColor = ORANGE; 
        computerSection.style.backgroundColor = ORANGE;
    }
    else if (playerChoice-1 === computerChoice || playerChoice === 0 && computerChoice === 2){
        statePlayer.textContent = "WIN";
        stateComputer.textContent = "LOSE";
        playerSection.style.backgroundColor = GREEN;
        computerSection.style.backgroundColor = RED;
        playerScore++;
        playerScoreLabel.textContent = "Score: " + playerScore;
    }else{
        statePlayer.textContent = "LOSE";
        stateComputer.textContent = "WIN";
        playerSection.style.backgroundColor = RED; 
        computerSection.style.backgroundColor = GREEN; 
        computerScore++;
        computerScoreLabel.textContent = "Score: " + computerScore;
    }
    if (playerScore === 5 || computerScore === 5){
        playerPanel.firstChild.remove();
        computerPanel.firstChild.remove();
        if (playerScore === 5){
            playerPanel.textContent = "PLAYER HAS WON!";
            computerPanel.textContent = "PLAY AGAIN?";
            computerSection.style.backgroundColor = GREY;
            computerPanel.addEventListener("click", restartGame);
        }
        else{
            computerPanel.textContent = "COMPUTER HAS WON!";
            playerPanel.textContent = "PLAY AGAIN?"
            playerSection.style.backgroundColor = GREY;
            playerPanel.addEventListener("click", restartGame);
        }
        optionButtons.forEach(option => {
            option.removeEventListener("click", selectOption);
            });
    }
}
function restartGame(){
    console.log("Restarting...");
    startGame();
    computerPanel.removeEventListener("click", restartGame);
    playerPanel.removeEventListener("click", restartGame);
}
function startGame(){
    playerScore = 0;
    computerScore = 0;
    playerPanel.firstChild.remove();
    computerPanel.firstChild.remove();
    playerSection.style.backgroundColor = ORANGE;
    computerSection.style.backgroundColor = ORANGE;
    playerPanel.textContent = "? Choosing...";
    computerPanel.textContent = "? Choosing...";
    statePlayer.textContent = "PLAYER";
    stateComputer.textContent = "COMPUTER";
    playerScoreLabel.textContent = "Score: " + playerScore;
    computerScoreLabel.textContent = "Score: " + computerScore;
    optionButtons.forEach(option => {
        option.addEventListener("click", selectOption);
    });
}
const GREEN = "#a7ef9a";
const RED = "#FF9B9B"; 
const ORANGE = "#f8e196"; 
const YELLOW = "#FFFEC4";
const GREY = "#A9A9A9";
let playerScore;
let computerScore;
const optionButtons = document.querySelectorAll(".selection-list li");
const playerSection = document.querySelector(".player-section");
const computerSection = document.querySelector(".computer-section");
const playerPanel = document.querySelector(".player-choice");
const computerPanel = document.querySelector(".computer-choice");
const statePlayer = document.querySelector(".player-section .state");
const stateComputer = document.querySelector(".computer-section .state");
const playerScoreLabel = document.querySelector(".player-score"); 
const computerScoreLabel = document.querySelector(".computer-score"); 
const selectOption = (event) => {
    const playerChoice = getChoiceCode(event.currentTarget.className);
    startRound(playerChoice);
};
startGame();

