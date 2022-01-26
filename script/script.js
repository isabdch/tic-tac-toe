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

playBtn.addEventListener("click", playGame);

function playGame() {  
    playBtn.style.display = "none";
    video.style.animation = "moveVid 0.5s ease 0s 1 normal both";
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
}
