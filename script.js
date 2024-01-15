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
    return Math.floor(Math.random()*upperLimit) + 1;
}
function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    console.log("You've selected " + playerSelection)
    if (playerSelection === computerSelection){
        return "It's a tie!"
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors")
            || (playerSelection === "Scissors" && computerSelection === "Paper")
            || (playerSelection === "Paper" && computerSelection === "Rock")){
        return "You win! " +playerSelection+ " beats " + computerSelection;
    }
    else
        return "You Lose! " +computerSelection+ " beats " + playerSelection;

}
function capitalize(text){
    return text.at(0).toUpperCase() + text.slice(1).toLowerCase();
}
function getPlayerSelection(){
    let playerSelection = prompt("Your choice!");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
getPlayerSelection();
