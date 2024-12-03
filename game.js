let currentPlayer = 'X';
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(cell, row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    cell.innerHTML = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + ' venceu!');
      resetBoard();
    } else if (isBoardFull()) {
      alert('Empate!');
      resetBoard();
    } else {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  // Verifica linhas, colunas e diagonais
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
      return true;
    }
    if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
      return true;
    }
  }
  if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
  }
  if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
  }
  return false;
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  currentPlayer = 'X';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = '';
      document.querySelector(`table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`).innerHTML = '';
    }
  }
}
