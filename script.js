function getComputerChoice(){
    let choice = getRandomNumber(3);
    let gameChoice = "";
    switch (choice){
        case 1:
            gameChoice = "Rock";
            break;
        case 2:
            gameChoice = "Paper";
            break;
        case 3:
            gameChoice = "Scissors";
            break;    
    }
    return gameChoice;
}
function getRandomNumber(upperLimit){
    upperLimit++;
    return Math.floor(Math.random()*upperLimit);
}
function capitalize(text){
    if (text === "")
        return text;
    return text.at(0).toUpperCase() + text.slice(1).toLowerCase();
}
function getUserInput(){
    text = capitalize(prompt("Rock, Paper, Scissors!").trim());
    while(text != "Rock" && text != "Paper" && text != "Scissors"){
        alert("Invalid choice, try again...");
        text = capitalize(prompt("Rock, Paper, Scissors!").trim());
    }
    return text;
}
function evaluateChoices(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 0;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors")
            || (playerSelection === "Scissors" && computerSelection === "Paper")
            || (playerSelection === "Paper" && computerSelection === "Rock")){
        return 1;
    }
    else{
        return 2;
    }
}
function gameRound(){
    let result = 0, playerSelection, computerSelection;
    do {
        playerSelection = getUserInput();
        computerSelection = getComputerChoice();
        result = evaluateChoices(playerSelection, computerSelection);
        if (!result){
            console.log("It's a tie!");
            console.log("Both players selected " + computerSelection + ". Play again...");
        }
    } while (!result)
    if (result === 1){
        console.log("You win! " +playerSelection+ " beats " + computerSelection);
    }
    else {
        console.log("You Lose! " +computerSelection+ " beats " + playerSelection);
    }
    return result;
}
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let round = 1; round <= 5; round++) {
        console.log("---- Round: " + round + " ----");
        if (gameRound() === 1){
            playerPoints++;
        }
        else{
            computerPoints++;
        }
        round = (playerPoints > 2 || computerPoints > 2) ? 5 : round;
    }
    console.log("");
    console.log("==== The final winner is..." + " ====");
    if (playerPoints > computerPoints){
        console.log("You!!!");
    }
    else{
        console.log("The computer!");
    }
    console.log(" > Player points: "+ playerPoints);
    console.log(" > Computer points: "+ computerPoints);
}


function displayChoice(playerPanel, option){
    console.log(option);
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
    console.log("Computer: " + computerChoice);
    displayChoice(computerPanel, computerChoice);
}
const optionButtons = document.querySelectorAll(".selection-list li");
const playerPanel = document.querySelector(".player-choice");
const computerPanel = document.querySelector(".computer-choice");
optionButtons.forEach(option => {
    option.addEventListener("click", (event) => {
        const playerChoice = getChoiceCode(event.currentTarget.className);
        displayChoice(playerPanel, playerChoice);
        startRound(playerChoice);
    })
});


