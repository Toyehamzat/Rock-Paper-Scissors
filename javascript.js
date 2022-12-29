
function getCompChoice(){
    let CompchoiceRandom = Math.floor(Math.random() * 3) + 1
    let ComputerChoice="";

    switch (CompchoiceRandom){
        case 1:
        ComputerChoice="rock"
        break;

        case 2:
        ComputerChoice= "scissors"
        break;

        case 3:
        ComputerChoice= "paper"
        break;

    }
    return ComputerChoice;
}

 function playerselection(playerchoice){
    const playerchoice = prompt("Kindly choose Rock, paper or scissors:").toLocaleLowerCase();
    if (playerchoice ==="rock" || playerchoice ==="paper" ||playerchoice ==="scissors"){
        console.log("you chose:"+ `${playerchoice}`);
    }
    else{
        console.log("ERROR! Try again!");
            
    }
    return playerchoice;
 
}


 function Playround(Computerchoice,playerchoice){
    //user inputs rock
    if(playerchoice==="rock" && Computerchoice ==="paper"){
        console.log("you lose Computer wins--paper beats rock");
    }
    else if ( playerchoice==="rock" && Computerchoice==="rock"){
        console.log("It's a tie you both chose"` ${playerchoice}`);
    } 
    else if (playerchoice==="rock" && Computerchoice==="scissors"){
        console.log("you win rock beats scissors");
    }
    //user input paper
    else if (playerchoice==="paper" && Computerchoice==="rock"){
        console.log("you win paper beats rock");
    }
    else if (playerchoice==="paper" && Computerchoice==="paper"){
        console.log("It's a tie you both chose"`${playerchoice}`);
    }
    else if (playerchoice==="paper" && Computerchoice==="scissors"){
        console.log("you lose scissors beats paper");
    }
    //user inputs scissors
    else if(playerchoice==="scissors" && Computerchoice==="rock"){
        console.log("YOU LOSE!! rock beats scissors");
    }
    else if (playerchoice==="scissors" && Computerchoice==="paper"){
        console.log("YOU WIN!! scissors beats paper");
    }
    else{
        console.log("It's a tie");
    }
}
    const playerchoice = "rock";
    const Computerchoice = getCompChoice();
    console.log(Playround(Computerchoice, playerchoice));



I DON TIRE OOO JESUSSSSSSS


    