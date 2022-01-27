// initiate variables
let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];

// functions
function handleMove(position) {
  if (board[position] == undefined) {
    board[position] = symbols[playerTime];

    if (playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }
  }
}
