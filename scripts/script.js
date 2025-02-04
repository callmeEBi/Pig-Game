//FIXME - fixing the shallow copy problem and gathering all the players in one object
// FIXME - put for loop in newGame function
// FIXME - a lot of dirty code, clean it

"use strict";
let $ = document;
let btnRollDice = $.querySelector(".roll-btn");
let btnHold = $.querySelector(".hold-btn");
let diceImg = $.querySelector(".dice-img");
let btnNewGame = $.querySelector(".new-game-btn");
let cardPlayer1 = $.querySelector(".player1");
let cardPlayer2 = $.querySelector(".player2");
let spanPlayer1Current = $.querySelector(".player1 .player__score--number");
let spanPlayer2Current = $.querySelector(".player2 .player__score--number");
let spanPlayer1Total = $.querySelector(".player1 .player__total-score");
let spanPlayer2Total = $.querySelector(".player2 .player__total-score");
let player1 = {
  name: "player1",
  totalScore: 0,
  currentScore: 0,
  tag: $.querySelector(".player1"),
};
let player2 = {
  name: "player2",
  totalScore: 0,
  currentScore: 0,
  tag: $.querySelector(".player2"),
};
let defaultPlayer = player1;

btnRollDice.addEventListener("click", roll_dice);
btnHold.addEventListener("click", hold);
btnNewGame.addEventListener("click", newGame);

function roll_dice() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  diceImg.classList.remove("u-hidden");
  diceImg.setAttribute("src", `./images/dice-${diceNum}.png`);
  if (diceNum == 1) {
    defaultPlayer.currentScore = 0;
    zeroCurrentScore(defaultPlayer);
    changePlayer();
  } else {
    defaultPlayer.currentScore += diceNum;
  }
  showCurrentScore(defaultPlayer);
}

function changePlayer() {
  if (defaultPlayer == player1) {
    defaultPlayer = player2;
    changeBgColor(cardPlayer2, cardPlayer1);
    return;
  }
  changeBgColor(cardPlayer1, cardPlayer2);
  defaultPlayer = player1;
}

function hold() {
  defaultPlayer.totalScore += defaultPlayer.currentScore;
  defaultPlayer.currentScore = 0;
  sumTotalScore(defaultPlayer);
  zeroCurrentScore(defaultPlayer);
  changePlayer();
}

function newGame() {
  defaultPlayer = player1;
  player1.currentScore = 0;
  player1.totalScore = 0;
  player2.currentScore = 0;
  player2.totalScore = 0;
  sumTotalScore(player1);
  sumTotalScore(player2);
  zeroCurrentScore(player1);
  zeroCurrentScore(player2);
  diceImg.classList.add("u-hidden");
}

function changeBgColor(activeCard, deactiveCard) {
  activeCard.style.backgroundColor = "var(--active-color)";
  deactiveCard.style.backgroundColor = "var(--deactive-color)";
}

function zeroCurrentScore(player) {
  if (player == player1) {
    spanPlayer1Current.textContent = 0;
  } else {
    spanPlayer2Current.textContent = 0;
  }
}

function sumTotalScore(player) {
  if (player == player1) {
    spanPlayer1Total.textContent = player1.totalScore;
  } else {
    spanPlayer2Total.textContent = player2.totalScore;
  }
}

function showCurrentScore(player) {
  if (player == player1) {
    spanPlayer1Current.textContent = player1.currentScore;
    return;
  }
  spanPlayer2Current.textContent = player2.currentScore;
}
