#! /usr/bin/env node 
//a simple implementation of ock paper scissor game
let player1 = "Rock";
let player2 = "Scissor";
if (player1 === player2) {
    console.log("its a tie");
}
else if ((player1 === "Rock" && player2 === "Scissor") ||
    (player1 === "Scissor" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("player 1 win");
}
else {
    console.log("player2 wins");
}
export {};
