let playerDraw = prompt("What's your choice").toLowerCase();
let items = ["rock", "paper", "sissors"];
let compDraw = items[Math.floor(Math.random() * items.length)];
console.log(compDraw);



let userInput = function prompt() {
    return prompt()


}
console.log(playerDraw);
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

/*game(playRound(playerDraw, compDraw));
for (let prompt = 0; prompt < 5; prompt++)





for (let i = 0; i < 10; i++);
prompt++
game(playRound(playerDraw, compDraw));


/*const playerDraw = "rock";
 
if (playerDraw !== "rock" || "paper" || "sissors") {
    alert("please enter valid draw");
*/

function playRound(playerDraw, compDraw) {
    let playerScore = 0;
    let compScore = 0;
    let noPoint = 0;
    let prompt = playerDraw;

    /*alert(playRound)
     */

    if (playerDraw == "rock" && compDraw == "paper") {
        playerScore++;
        return console.log("win");
    } else if (playerDraw == "paper" && compDraw == "paper") {
        noPoint++;
        return console.log("draw");
    } else if (playerDraw == "sissors" && compDraw == "paper") {
        playerScore++;
        return console.log("win");
    } else if (playerDraw == "rock" && compDraw == "rock") {
        noPoint++;
        return console.log("draw");
    } else if (playerDraw == "paper" && compDraw == "rock") {
        playerScore++;
        return console.log("win");
    } else if (playerDraw == "sissors" && compDraw == "rock") {
        compScore++;
        return console.log("lose");
    } else if (playerDraw == "rock" && compDraw == "sissors") {
        playerScore++;
        return console.log("win");
    } else if (playerDraw == "paper" && compDraw == "sissors") {
        compScore++;
        return console.log("lose");
    } else if (playerDraw == "sissors" && compDraw == "sissors") {
        compScore++;
        return console.log("draw");

    }
    console.log(playRound)
}



function game(playerDraw, compDraw) {
    let playerScore = playerDraw
    let compScore = compDraw

    for (let i = 0; i < 5; i++) {
        let playerScore = 0;
        let compScore = 0;
        let noPoint = 0;

        if (playerScore > compScore) {
            return console.log("you win the set!");
        } else if (compScore > playerScore) {
            return console.log("you lose set)")

            console.log(playRound(playerDraw, compDraw));
            console.log(game())
            alert(game)

        }


    }
}