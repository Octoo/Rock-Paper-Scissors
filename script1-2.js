let playerInput=prompt("Your turn to play").toLowerCase();
let choices= ['ROCK', 'PAPER','SCISSORS'];
let computerSelection= choices[Math.floor(Math.random()*choices.length)];
console.log("Computer plays: "+ computerSelection);

var x = 0;
while (x < 4) {
    window.prompt("What's your choice").toLowerCase();
    x++;

}
var x = 0;
while (x < 4) {
    playRound(playerDraw, compDraw);
    x++;

}
    
    

    

function playRound(playerSelection,computerSelection){
    
    
    if(playerSelection==computerSelection){
        console.log("it's a tie")
        return("it's a tie!");
        }else if(playerSelection=="ROCK" && computerSelection=="PAPER"){
            console.log("perdu")
            return("You LOSE, Paper beats Rock");
        }
        else if(playerSelection=="ROCK" && computerSelection=="SCISSORS"){
            console.log("gagné")
            return("You WIN, Rock beats Scissors");
        }
        else if(playerSelection=="PAPER" && computerSelection=="ROCK"){
            console.log("gagné")
            return("You WIN, Paper beats Rock");
        }
        else if(playerSelection=="PAPER" && computerSelection=="SCISSORS"){
            console.log("perdu")
            return("You LOSE, Scissors beats paper");
        }
        else if(playerSelection=="SCISSORS" && computerSelection=="PAPER"){
            console.log("gagné")
            return("You WIN, Scissors beats Paper");
        }
        else if (playerSelection=="SCISSORS" && computerSelection=="ROCK"){
            console.log("perdu")
            return("You LOSE, Rock beats Scissors");
        }
        console.log(playRound)
    
}

//console.log(playRound(playerSelection,computerSelection));

/*
function game(){


    
    for (let i=0; i<2;i++){
        let playerInput=prompt("Your turn to play");
        let playerSelection=playerInput.toUpperCase();
        computerPlay();
        playRound(playerSelection,computerSelection);

        
    }

}
game();
*/
