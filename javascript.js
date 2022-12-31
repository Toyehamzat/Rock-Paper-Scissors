

function getCompChoice() {
    const CompchoiceRandom = Math.floor(Math.random() * 3 + 1);
    let ComputerChoice = '';
  
    switch (CompchoiceRandom) {
      case 1:
        ComputerChoice = 'Rock';
        break;
      case 2:
        ComputerChoice= 'Paper';
        break;
      case 3:
        ComputerChoice= 'Scissors';
        break;
      default:
        break;
    }
  
    return ComputerChoice;
}
   


 function playerselection() {
    const Playerchoice = prompt("Kindly choose Rock, paper or scissors:").toLocaleLowerCase();
    if (Playerchoice ==="rock" || Playerchoice ==="paper" ||Playerchoice ==="scissors"){
        console.log(`you chose ${Playerchoice}`);
    }
    else{
        console.log("ERROR! Try again!");
            
    }
  return Playerchoice;
 
}


 function Playround(Computerchoice,Playerchoice){
   
    //user inputs rock
    if(Playerchoice==="rock" && Computerchoice ==="paper"){
        console.log("you lose Computer wins--paper beats rock");
    }
    else if ( Playerchoice==="rock" && Computerchoice==="rock"){
        console.log(`It's a tie you both chose ${Playerchoice}`);
    } 
    else if (Playerchoice==="rock" && Computerchoice==="scissors"){
        console.log("you win rock beats scissors");
    }
    //user input paper
    else if (Playerchoice==="paper" && Computerchoice==="rock"){
        console.log("you win paper beats rock");
    }
    else if (Playerchoice==="paper" && Computerchoice==="paper"){
        console.log(`It's a tie you both chose ${Playerchoice}`);
    }
    else if (Playerchoice==="paper" && Computerchoice==="scissors"){
        console.log("you lose scissors beats paper");
    }
    //user inputs scissors
    else if(Playerchoice==="scissors" && Computerchoice==="rock"){
        console.log("YOU LOSE!! rock beats scissors");
    }
    else if (Playerchoice==="scissors" && Computerchoice==="paper"){
        console.log("YOU WIN!! scissors beats paper");
    }
    else{
        console.log("it's a tie");
    }
  
    
}
    const Playerchoice = playerselection();
    const Computerchoice = getCompChoice();
    console.log(Playround(Computerchoice, Playerchoice));








    