let scoreDiv = document.querySelector(".scoreAndTrash");
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
let whoWins = document.querySelector(".whoWins");
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
  scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO">${scoreO}</span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX">${scoreX}</span></div>`;

  let squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
restartBtn.addEventListener("click", resetGame);
switchMode.addEventListener("mouseover", hoverIn);
switchMode.addEventListener("mouseout", hoverOut);
switchMode.addEventListener("click", changePlayer);
scoreDiv.addEventListener("click", clearScore);

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
  scoreDiv.style.display = "inline";
  scoreDiv.style.fontSize = "0.8rem";
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
      youWin();
      updateScore();
      resetGame();
    }, 300);
  }

  let hasTied = isTiedGame();
  if (hasTied == true) {
    setTimeout(() => resetGame(), 400);
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;

  if (playerTurn == 0) {
    playerUpdater.style.marginTop = "0px";
  } else {
    playerUpdater.style.marginTop = "55px";
  }
}

function clearSquares() {
  let squares = document.querySelectorAll(".content");

  if (c1.children[0] != undefined) {
    c1.children[0].style.animation = "hideStage 1.8s ease 0s 1 normal both";
  }
  if (c2.children[0] != undefined) {
    c2.children[0].style.animation = "hideStage 1.6s ease 0s 1 normal both";
  }
  if (c3.children[0] != undefined) {
    c3.children[0].style.animation = "hideStage 1.4s ease 0s 1 normal both";
  }
  if (c4.children[0] != undefined) {
    c4.children[0].style.animation = "hideStage 1.2s ease 0s 1 normal both";
  }
  if (c5.children[0] != undefined) {
    c5.children[0].style.animation = "hideStage 1s ease 0s 1 normal both";
  }
  if (c6.children[0] != undefined) {
    c6.children[0].style.animation = "hideStage 0.8s ease 0s 1 normal both";
  }
  if (c7.children[0] != undefined) {
    c7.children[0].style.animation = "hideStage 0.6s ease 0s 1 normal both";
  }
  if (c8.children[0] != undefined) {
    c8.children[0].style.animation = "hideStage 0.4s ease 0s 1 normal both";
  }
  if (c9.children[0] != undefined) {
    c9.children[0].style.animation = "hideStage 0.2s ease 0s 1 normal both";
  }

  setTimeout(() => (squares[0].innerHTML = ""), 600);
  setTimeout(() => (squares[1].innerHTML = ""), 550);
  setTimeout(() => (squares[2].innerHTML = ""), 500);
  setTimeout(() => (squares[3].innerHTML = ""), 450);
  setTimeout(() => (squares[4].innerHTML = ""), 400);
  setTimeout(() => (squares[5].innerHTML = ""), 350);
  setTimeout(() => (squares[6].innerHTML = ""), 300);
  setTimeout(() => (squares[7].innerHTML = ""), 250);
  setTimeout(() => (squares[8].innerHTML = ""), 200);
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
    scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO">${scoreO}</span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX">${scoreX}</span></div>`;
    JSON.stringify(localStorage.setItem("keepScoreO", scoreO));
  } else if (gameOver == true && playerTurn == 0) {
    scoreX++;
    scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO">${scoreO}</span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX">${scoreX}</span></div>`;
    JSON.stringify(localStorage.setItem("keepScoreX", scoreX));
  }
}

function clearScore() {
  console.log("is this working")
  localStorage.clear();
  scoreO = 0;
  scoreX = 0;
  scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO">${scoreO}</span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX">${scoreX}</span></div>`;
}

function youWin() {

}
