//declearing
const finale=document.querySelector('#finale')
const ChoiceBtn=document.querySelector('.choiceBtn')
let ComputerChoice
let PlayerChoice
let playerScore=0
let computerScore=0
let Player=document.querySelector('#playerScore')
Player.textContent =`player score: ${playerScore}`
let computer=document.querySelector('#computerScore')
computer.textContent = `Computer Score: ${computerScore}`
ChoiceBtn.forEach((button) => {button.addEventListener('click',() =>{
    PlayerChoice=button.id
    getComputerChoice();
    playgame();
}
)})
//computer chooses randomly
function getComputerChoice() {
    const computerRandNum = Math.floor(Math.random() * 3) + 1
    switch(computerRandNum){
      case 1:
        ComputerChoice = 'rock';
        break
      case 2:
        ComputerChoice= 'paper';
        break
      case 3:
        ComputerChoice= 'scissors';
        break
     }
}
   function declarewinner(){
    //if player selection = computer selection
    if (PlayerChoice == ComputerChoice) {
        finale.textContent = `It is a Tie! you both chose ${PlayerChoice}`
     //if player selects rock 
    }else if (PlayerChoice == "rock" && ComputerChoice == "scissors") {
        finale.textContent = `You Won! ${PlayerChoice} beats ${ComputerChoice}`
        playerScore++;
    }else if (PlayerChoice == "rock" && ComputerChoice == "paper") {
        finale.textContent = `You Lose! ${ComputerChoice} beats ${PlayerChoice}`
        computerScore++; 
    //if players selects paper
    }else if (PlayerChoice == "paper" && ComputerChoice == "scissors") {
        finale.textContent = `You Lose! ${ComputerChoice} beats ${PlayerChoice}`
        computerScore++;     
    }else if (PlayerChoice == "paper" && ComputerChoice == "rock") {
        finale.textContent = `You Won! ${PlayerChoice} beats ${ComputerChoice}`
        playerScore++;    
     // if player selects scissors   
    }else if (PlayerChoice == "scissors" && ComputerChoice == "paper") {
        finale.textContent = `You Won! ${PlayerChoice} beats ${ComputerChoice}`
        playerScore++;    
    }else if (PlayerChoice == "scissors" && ComputerChoice == "rock") {
        finale.textContent = `You Lose! ${ComputerChoice} beats ${PlayerChoice}`
        computerScore++;  
    }
}
 function playgame(){
    declarewinner();
    Player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Computer Score: ${computerScore}`
    if (playerScore == 5) {
        finale.textContent = "You won the Game!"
        playerScore = 0;
        computerScore = 0;
        Player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
    } else if(computerScore == 5){
        finale.textContent = "You lost the Game, Maybe you should try again"
        playerScore = 0;
        computerScore = 0;
        Player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
    }
}
 


