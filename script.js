let playerInput=prompt("Your turn to play");
let playerSelection=playerInput.toUpperCase();
let computerSelection=computerPlay();

function computerPlay(){
    let choices= ['ROCK', 'PAPER','SCISSORS'];
    let aleatoire= choices[Math.floor(Math.random()*choices.length)];
    console.log("Computer plays: "+ aleatoire);
    return(aleatoire);
    
}

function playRound(playerSelection,computerSelection){

    if (playerSelection === computerSelection) {
        return "Tie";
      } else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") ||
        (playerSelection === "scissors" && computerSelection == "paper")
      ) {
        return "Player wins";
      } else {
        return "Computer wins";
      }
    
}




function game(){


    
    for (let i=0; i<2;i++){
        playRound(playerSelection,computerSelection); 
        playRound(playerSelection,computerSelection); 
        playRound(playerSelection,computerSelection); 
        playRound(playerSelection,computerSelection); 
        playRound(playerSelection,computerSelection); 
    }

}
game();

