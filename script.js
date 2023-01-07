//declearing
const finale=document.querySelector('#finale')
const choiceBtn=document.querySelectorAll('.choiceBtn')
let computerChoice
let playerChoice
let playerScore=0
let computerScore=0
let player=document.querySelector('#playerScore')
player.textContent =`player score: ${playerScore}`
let computer=document.querySelector('#computerScore')
computer.textContent = `Computer Score: ${computerScore}`
choiceBtn.forEach((button) => {button.addEventListener('click',() =>{
    playerChoice=button.id
    getComputerChoice();
    playgame();
}
)})
//computer chooses randomly
function getComputerChoice() {
    const computerRandNum = Math.floor(Math.random() * 3) + 1
    switch(computerRandNum){
      case 1:
        computerChoice = 'rock';
        break
      case 2:
        computerChoice= 'paper';
        break
      case 3:
        computerChoice= 'scissors';
        break
     }
}
   function declarewinner(){
    //if player selection = computer selection
    if (playerChoice == computerChoice) {
        finale.textContent = `It is a Tie! you both chose ${playerChoice}`
     //if player selects rock 
    }else if (playerChoice == "rock" && computerChoice == "scissors") {
        finale.textContent = `You Won! ${playerChoice} beats ${computerChoice}`
        playerScore++;
    }else if (playerChoice == "rock" && computerChoice == "paper") {
        finale.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore++; 
    //if players selects paper
    }else if (playerChoice == "paper" && computerChoice == "scissors") {
        finale.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore++;     
    }else if (playerChoice == "paper" && computerChoice == "rock") {
        finale.textContent = `You Won! ${playerChoice} beats ${computerChoice}`
        playerScore++;    
     // if player selects scissors   
    }else if (playerChoice == "scissors" && computerChoice == "paper") {
        finale.textContent = `You Won! ${playerChoice} beats ${computerChoice}`
        playerScore++;    
    }else if (playerChoice == "scissors" && computerChoice == "rock") {
        finale.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore++;  
    }
}
 function playgame(){
    declarewinner();
    player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Computer Score: ${computerScore}`
    if (playerScore == 5) {
        finale.textContent = "You won the Game!"
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
    } else if(computerScore == 5){
        finale.textContent = "You lost the Game, Maybe you should try again"
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`
        computer.textContent = `Computer Score: ${computerScore}`
    }
}
 


