//FIXME - fixing the shallow copy problem and gathering all the players in one object
// FIXME - put for loop in newGame function

"use strict";
let $ = document;
let btnRollDice = $.querySelector(".roll-btn");
let btnHold = $.querySelector(".hold-btn");
let diceImg = $.querySelector(".dice-img");
let btnNewGame = $.querySelector(".new-game-btn");
let cardPlayer1 = $.querySelector(".player1");
let cardPlayer2 = $.querySelector(".player2");
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
    changePlayer();
  } else {
    defaultPlayer.currentScore += diceNum;
  }
}

function changePlayer() {
  if (defaultPlayer == player1) {
    defaultPlayer = player2;
    cardPlayer1.style.backgroundColor = "var(--active-color)";
    return;
  }
  cardPlayer2.style.backgroundColor = "var(--deactive-color)";
  defaultPlayer = player1;
}

function hold() {
  defaultPlayer.totalScore += defaultPlayer.currentScore;
  defaultPlayer.currentScore = 0;
  changePlayer();
}

function newGame() {
  defaultPlayer = player1;
  player1.currentScore = 0;
  player1.totalScore = 0;
  player2.currentScore = 0;
  player2.totalScore = 0;
  console.log(player1);
  console.log(player2);
}

/**.game_container{
 
}
.player{
    
}
.player1{
    
}
.player__name{
    
}
.player__total-score{
    
}
.player__current-score{
    
}
.player__score--number{

}
.player2{

}
.buttons-container{

}
.btn{

}
.new-game-btn{

}
.dice-img{

}
.u-hidden{

}
.roll-btn{

}
.hold-btn{

} */
