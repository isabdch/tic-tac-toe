let scoreDiv = document.querySelector("#scoreDiv");
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
let playerUpdater = document.querySelector("#playerUpdater");
let trashCan = document.querySelector(".trash");
let clicked = false;

playBtn.addEventListener("click", startGame);
returnBtn.addEventListener("click", returnMenu);
document.addEventListener("DOMContentLoaded", () => {
  scoreO = JSON.parse(localStorage.getItem("keepScoreO"));
  scoreX = JSON.parse(localStorage.getItem("keepScoreX"));
  if (scoreO == null) {
    scoreO = 0;
  }
  if (scoreX == null) {
    scoreX = 0;
  }
  scoreDiv.innerHTML = `Player O - ${scoreO} &nbsp&nbsp&nbsp Player X - ${scoreX}`;

  let squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
restartBtn.addEventListener("click", resetGame);
switchMode.addEventListener("mouseover", hoverIn);
switchMode.addEventListener("mouseout", hoverOut);
switchMode.addEventListener("click", changePlayer);
trashCan.addEventListener("click", clearScore);

function hoverIn() {
  playerUpdater.style.backgroundColor = "#5e535a";
  switchMode.style.border = "2px solid #f930ee";
}

function hoverOut() {
  playerUpdater.style.backgroundColor = "#463e43";
  switchMode.style.border = "2px solid #f930ef93";
}

function startGame() {
  playBtn.style.display = "none";
  trashCan.style.display = "inline";
  trashCan.style.fontSize = "0.7rem";
  scoreDiv.style.display = "inline";
  scoreDiv.style.fontSize = "0.7rem";
  trashCan.style.animation = "showStage 2.6s ease 0s 1 normal both";
  scoreDiv.style.animation = "showStage 2.6s ease 0s 1 normal both";
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
  scoreDiv.style.fontSize = "1rem";
  scoreDiv.style.animation = "showPlayBtn 1s ease 0s 1 normal both";
  trashCan.style.fontSize = "1rem";
  trashCan.style.animation = "showPlayBtn 1s ease 0s 1 normal both";
  playBtn.style.animation = "showPlayBtn 1.5s ease 0s 1 normal both";
  video.style.animation = "smallerVid 0.8s ease 0s 1 normal both";
  stage.style.display = "none";
  returnBtn.style.display = "none";
  switchMode.style.display = "none";
  playBtn.innerHTML = "CONTINUE";
  playBtn.style.paddingLeft = "20px";
  playBtn.style.paddingRight = "20px";
  playBtn.style.display = "block";
}

function handleClick(event) {
  clicked = true;
  if (clicked == true) {
    switchMode.removeEventListener("click", changePlayer);
    switchMode.removeEventListener("mouseover", hoverIn);
    switchMode.removeEventListener("mouseout", hoverOut);
    switchMode.style.cursor = "default";
  }
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert(`The winner is ${playerTurn}!`);
      updateScore();
      resetGame();
    }, 300);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol} anim"></div>`;

  if (playerTurn == 0) {
    playerUpdater.style.marginTop = "0px";
  } else {
    playerUpdater.style.marginTop = "55px";
  }
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
  playerUpdater.style.marginTop = "0px";
  switchMode.addEventListener("click", changePlayer);
  switchMode.addEventListener("mouseover", hoverIn);
  switchMode.addEventListener("mouseout", hoverOut);
  switchMode.style.cursor = "pointer";
}

function changePlayer() {
  playerTurn = playerTurn == 0 ? 1 : 0;
  if (playerTurn == 1) {
    playerUpdater.style.marginTop = "55px";
  } else {
    playerUpdater.style.marginTop = "0px";
  }
}

function updateScore() {
  if (gameOver == true && playerTurn == 1) {
    scoreO++;
    scoreDiv.innerHTML = `Player O - ${scoreO} &nbsp&nbsp&nbsp Player X - ${scoreX}`;
    JSON.stringify(localStorage.setItem("keepScoreO", scoreO));
  } else if (gameOver == true && playerTurn == 0) {
    scoreX++;
    scoreDiv.innerHTML = `Player O - ${scoreO} &nbsp&nbsp&nbsp Player X - ${scoreX}`;
    JSON.stringify(localStorage.setItem("keepScoreX", scoreX));
  }
}

function clearScore() {
  localStorage.clear();
  scoreO = 0;
  scoreX = 0;
  scoreDiv.innerHTML = `Player O - ${scoreO} &nbsp&nbsp&nbsp Player X - ${scoreX}`;
}
