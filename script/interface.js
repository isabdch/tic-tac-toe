let playBtn = document.querySelector("#playBtn");
let stage = document.querySelector(".container");
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

playBtn.addEventListener("click", startGame);
returnBtn.addEventListener("click", returnMenu);
document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

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
}

function returnMenu() {
  playBtn.style.display = "block";
  playBtn.style.animation = "showPlayBtn 1.5s ease 0s 1 normal both";
  video.style.animation = "smallerVid 0.8s ease 0s 1 normal both";
  stage.style.display = "none";
  returnBtn.style.display = "none";
}

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  
  if(handleMove(position)){
    setTimeout(() => {
      alert(`The winner is ${playerTime}!`);
    }, 20);
  };

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

function updateSquares() {
  let squares = document.querySelectorAll(".content");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class="${symbol}"></div>`;
    }
  });
}

