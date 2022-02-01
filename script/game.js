// initiate variables
let board = ["", "", "", "", "", "", "", "", ""];
let playerTurn = 0;
let symbols = ["o", "x"];
let gameOver = false;
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let scoreO = 0;
let scoreX = 0;

// functions
function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTurn];

    gameOver = isWin();

    playerTurn = playerTurn == 0 ? 1 : 0;
  }
  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let sequence = winStates[i];
    let position1 = sequence[0];
    let position2 = sequence[1];
    let position3 = sequence[2];

    if (
      board[position1] == board[position2] &&
      board[position1] == board[position3] &&
      board[position1] != ""
    ) {
      return true;
    }
  }
  return false;
}

function resetVariables() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTurn = 0;
  gameOver = false;
}

function isTiedGame() {
  if (
    board[0] != "" &&
    board[1] != "" &&
    board[2] != "" &&
    board[3] != "" &&
    board[4] != "" &&
    board[5] != "" &&
    board[6] != "" &&
    board[7] != "" &&
    board[8] != "" &&
    isWin() == false
  ) {
    return true;
  } else {
    return false;
  }
}
