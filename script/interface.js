let playBtn = document.querySelector("#playBtn");
let stage = document.querySelector(".container");
let content = document.querySelectorAll(".content");
let video = document.querySelector("#vid");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");
let c6 = document.querySelector(".c6");
let c7 = document.querySelector(".c7");
let c8 = document.querySelector(".c8");
let c9 = document.querySelector(".c9");
let returnBtn = document.querySelector("#returnBtn");
let restartBtn = document.querySelector("#restartBtn");
let switchMode = document.querySelector(".switchMode");

playBtn.addEventListener("click", startGame);
returnBtn.addEventListener("click", returnMenu);
document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
restartBtn.addEventListener("click", resetGame);

function startGame() {
  playBtn.style.display = "none";
  video.style.animation = "biggerVid 0.5s ease 0s 1 normal both";
  stage.style.display = "grid";
  c1.style.animation = "showStage 1s ease 0s 1 normal both";
  c2.style.animation = "showStage 1.2s ease 0s 1 normal both";
  c3.style.animation = "showStage 1.4s ease 0s 1 normal both";
  c4.style.animation = "showStage 1.6s ease 0s 1 normal both";
  c5.style.animation = "showStage 1.8s ease 0s 1 normal both";
  c6.style.animation = "showStage 2s ease 0s 1 normal both";
  c7.style.animation = "showStage 2.2s ease 0s 1 normal both";
  c8.style.animation = "showStage 2.4s ease 0s 1 normal both";
  c9.style.animation = "showStage 2.6s ease 0s 1 normal both";
  returnBtn.style.display = "block";
  returnBtn.style.animation = "showStage 2.5s ease 0s 1 normal both";
  restartBtn.style.display = "block";
  restartBtn.style.animation = "showStage 2.5s ease 0s 1 normal both";
  switchMode.style.display = "flex";
  switchMode.style.animation = "showStage 2s ease 0s 1 normal both";
}

function returnMenu() {
  playBtn.style.animation = "showPlayBtn 1.5s ease 0s 1 normal both";
  video.style.animation = "smallerVid 0.8s ease 0s 1 normal both";
  stage.style.display = "none";
  returnBtn.style.display = "none";
  switchMode.style.display = "none";
  playBtn.innerHTML = "CONTINUE"
  playBtn.style.paddingLeft = "20px";
  playBtn.style.paddingRight = "20px";
  playBtn.style.display = "block";
}

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert(`The winner is ${playerTurn}!`);
      resetGame();
    }, 20);
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

function clearSquares() {
  let squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

function resetGame() {
  resetVariables();
  clearSquares();
}
