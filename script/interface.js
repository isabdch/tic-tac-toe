// get HTML elements.
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
let body = document.querySelector("body");
let startScreen = document.querySelector(".startScreen");
let p = document.querySelector("p");
let clicked = false;

// add events to the elements.
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
  scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO"><div class="single" style="animation: showStage 1s ease 0s 1 normal both">${scoreO}</div></span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX"><div class="single" style="animation: showStage 1s ease 0s 1 normal both">${scoreX}</div></span></div>`;

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

// functions
function hoverIn() {
  playerUpdater.style.backgroundColor = "#5e535a";
}

function hoverOut() {
  playerUpdater.style.backgroundColor = "#463e43";
}

// when the play button is clicked.
function startGame() {
  playBtn.style.display = "none";
  scoreDiv.style.fontSize = "0.8rem";
  if (window.matchMedia("(max-width:537px)").matches) {
    scoreDiv.style.fontSize = "0.6rem";
    playBtn.style.fontSize = "0.6rem";
    restartBtn.style.fontSize = "0.6rem";
    returnBtn.style.fontSize = "0.6rem";
  } 
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

// when the return button is clicked.
function returnMenu() {
  scoreDiv.style.fontSize = "1rem";
  if (window.matchMedia("(max-width:537px)").matches) {
    scoreDiv.style.fontSize = "0.7rem";
    playBtn.style.fontSize = "0.7rem";
    video.style.height = "20em";
    video.style.animation = "smallerVidMq 0.8s ease 0s 1 normal both"
  } 
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

// when clicked in some square.
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
    }, 300);
  }

  let hasTied = isTiedGame();
  if (hasTied == true) {
    setTimeout(() => resetGame(), 400);
  }

  updateSquare(position);
}

// updates square with the symbol and the switch when it's clicked.
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

// clear the squares from the symbols.
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

// reset the game cleaning the squares and the variables.
function resetGame() {
  resetVariables();
  clearSquares();
  playerUpdater.style.marginTop = "0px";
  switchMode.addEventListener("click", changePlayer);
  switchMode.addEventListener("mouseover", hoverIn);
  switchMode.addEventListener("mouseout", hoverOut);
  switchMode.style.cursor = "pointer";
}

// if the switch is clicked, it changes the player's turn.
function changePlayer() {
  playerTurn = playerTurn == 0 ? 1 : 0;
  if (playerTurn == 1) {
    playerUpdater.style.marginTop = "55px";
  } else {
    playerUpdater.style.marginTop = "0px";
  }
}

// updates the score.
function updateScore() {
  if (gameOver == true && playerTurn == 1) {
    scoreO++;
    scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO"><div class="single" style="animation: showStage 0.5s ease 0s 1 normal both">${scoreO}</div></span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX"><div class="single">${scoreX}</div></span></div>`;
    JSON.stringify(localStorage.setItem("keepScoreO", scoreO));
  } else if (gameOver == true && playerTurn == 0) {
    scoreX++;
    scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO"><div class="single">${scoreO}</div></span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX"><div class="single" style="animation: showStage 0.5s ease 0s 1 normal both">${scoreX}</div></span></div>`;
    JSON.stringify(localStorage.setItem("keepScoreX", scoreX));
  }
}

// when clicked, clears all the score.
function clearScore() {
  localStorage.clear();
  scoreO = 0;
  scoreX = 0;
  scoreDiv.innerHTML = `<div class="scorePO">Player <i class="fa-regular fa-circle"></i> <span id="scrO"><div class="single" style="animation: showStage 1s ease 0s 1 normal both">${scoreO}</div></span></div> <div class="scorePX">Player <i class="fa-solid fa-x"></i> <span id="scrX"><div class="single" style="animation: showStage 0.5s ease 0s 1 normal both">${scoreX}</div></span></div>`;
}

// when some player win.
function youWin() {
  startScreen.style.animation = "withFilter 0.5s ease 0s 1 normal both";
  switchMode.style.animation = "withFilter 0.5s ease 0s 1 normal both";
  stage.style.animation = "withFilter 0.5s ease 0s 1 normal both";

  whoWins.style.animation = "showStage 0.5s ease 0s 1 normal both";
  whoWins.style.display = "flex";

  if (playerTurn == 1) {
    p.innerHTML =
      "Player <i style='text-shadow: none; font-size: 1.4rem' class='fa-regular fa-circle'></i> wins!";
  } else {
    p.innerHTML =
      "Player <i style='text-shadow: none; font-size: 1.4rem' class='fa-solid fa-x'></i> wins!";
  }

  document.addEventListener("click", closeWindow);
}

// to close the winner's window.
function closeWindow() {
  startScreen.style.animation = "noFilter 0.5s ease 0s 1 normal both";
  switchMode.style.animation = "noFilter 0.5s ease 0s 1 normal both";
  stage.style.animation = "noFilter 0.5s ease 0s 1 normal both";

  whoWins.style.animation = "hideStage 0.5s ease 0s 1 normal both";
  whoWins.style.display = "none";

  document.removeEventListener("click", closeWindow);

  setTimeout(() => {
    startScreen.style.animation = "";
    switchMode.style.animation = "";
    stage.style.animation = "";
  }, 500);

  resetGame()
}
