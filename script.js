let player1_score = 0;
let player2_score = 0;
let images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

let randomDice1 = images[Math.floor(Math.random() * images.length)];
let randomDice2 = images[Math.floor(Math.random() * images.length)];

let score1_div = document.querySelector("#score1");
let score2_div = document.querySelector("#score2");

if (randomDice1 === "images/dice6.png") {
  player1_score++;
}
if (randomDice2 === "images/dice6.png") {
  player2_score++;
}

img1.setAttribute("src", randomDice1);
img2.setAttribute("src", randomDice2);

let h1_div = document.querySelector("h1");
if (randomDice1.slice(11, 12) > randomDice2.slice(11, 12)) {
  h1_div.innerHTML = "Player 1 Wins !";
} else if (randomDice1.slice(11, 12) < randomDice2.slice(11, 12)) {
  h1_div.innerHTML = "Player 2 Wins !";
} else {
  h1_div.innerHTML = "Refresh";
}
