function getRandomNumber(upperLimit){
    upperLimit++;
    return Math.floor(Math.random()*upperLimit);
}
function displayChoice(playerPanel, option){
    const imgOption = document.createElement("img");
    switch(option){
        case 0:
            imgOption.src = "img/rock-128.png";
            break;
        case 1:
            imgOption.src = "img/paper-128.png";
            break;
        case 2: 
            imgOption.src = "img/scissors-128.png";
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
        playerSection.style.cssText = "background-color: rgb(147, 151, 230)"; 
        computerSection.style.cssText = "background-color: rgb(166, 161, 243)";
    }
    else if (playerChoice-1 === computerChoice || playerChoice === 0 && computerChoice === 2){
        statePlayer.textContent = "WIN";
        stateComputer.textContent = "LOSE";
        playerSection.style.cssText = "background-color: rgb(151, 228, 142)"; 
        computerSection.style.cssText = "background-color: rgb(228, 142, 142)";
        playerScore++;
        playerScoreLabel.textContent = "Score: " + playerScore;
    }else{
        statePlayer.textContent = "LOSE";
        stateComputer.textContent = "WIN";
        playerSection.style.cssText = "background-color: rgb(228, 142, 142)"; 
        computerSection.style.cssText = "background-color: rgb(151, 228, 142)"; 
        computerScore++;
        computerScoreLabel.textContent = "Score: " + computerScore;
    }
    if (playerScore === 5 || computerScore === 5){
        playerPanel.firstChild.remove();
        computerPanel.firstChild.remove();
        if (playerScore === 5){
            playerPanel.textContent = "PLAYER HAS WON!";
        }
        else{
            computerPanel.textContent = "COMPUTER HAS WON!";
        }
    }
}
let playerScore = 0;
let computerScore = 0;
const optionButtons = document.querySelectorAll(".selection-list li");
const playerSection = document.querySelector(".player-section");
const computerSection = document.querySelector(".computer-section");
const playerPanel = document.querySelector(".player-choice");
const computerPanel = document.querySelector(".computer-choice");
const statePlayer = document.querySelector(".player-section .state");
const stateComputer = document.querySelector(".computer-section .state");
const playerScoreLabel = document.querySelector(".player-score"); 
const computerScoreLabel = document.querySelector(".computer-score"); 
optionButtons.forEach(option => {
    option.addEventListener("click", (event) => {
        const playerChoice = getChoiceCode(event.currentTarget.className);
        startRound(playerChoice);
    })
});


