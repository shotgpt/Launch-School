const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  let arrX = [];
  let arrO = [];

  for (let key in board) {
    if (board[key] === 'X') arrX.push(key);
    else if (board[key] == 'O') arrO.push(key);
  }

  for (let i in winningCombos) {
    if (arrX.includes(winningCombos[i][0].toString()) &&
      arrX.includes(winningCombos[i][1].toString()) &&
      arrX.includes(winningCombos[i][2].toString())) {
      return 'Human';
    }
    else if (arrO.includes(winningCombos[i][0].toString()) &&
      arrO.includes(winningCombos[i][1].toString()) &&
      arrO.includes(winningCombos[i][2].toString())) {
      return 'Computer';
    }
  }

}




function someoneWon(board) {
  return !!detectWinner(board); //converts to boolean value
}

while (true) {

  let board = initializeBoard();
  displayBoard(board);

  while (true) {
    playerChoosesSquare(board);
    computerChoosesSquare(board);
    displayBoard(board);

    if (someoneWon(board) || boardFull(board)) break;
  }

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  }
  else {
    prompt(`It's a tie!`);
  }
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');