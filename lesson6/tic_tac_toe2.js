const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_COMBOS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

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
function joinOr(arr, seperator = ', ', andOr = 'or') {
    if(arr.length === 0) return '';
    if(arr.length === 1) return arr[0].toString();
    let retArr = arr.map(num => num.toString());
    retArr[retArr.length-1] = andOr + ' ' + retArr[retArr.length-1];
    return retArr.join(seperator)
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let noRandomMove = false;
  let markerArr = [COMPUTER_MARKER, HUMAN_MARKER];
  if(board['5'] === INITIAL_MARKER) {
    board['5']= COMPUTER_MARKER;
    noRandomMove = true;
  }
  
  //computer will stop the win if there are two in a row
  //computer will also seal the win if it has two in a row
  for(let i in markerArr) {
  for(let x of WINNING_COMBOS) {
    if(board[x[0]] === markerArr[i] &&
    board[x[1]] === markerArr[i] &&
    board[x[2]] === INITIAL_MARKER) {
      board[x[2]] = COMPUTER_MARKER;
      noRandomMove = true;
      break;
      } else if(board[x[0]] ===  markerArr[i] &&
        board[x[2]] === markerArr[i] &&
        board[x[1]] === INITIAL_MARKER) {
          board[x[1]] = COMPUTER_MARKER;
          noRandomMove = true;
          break;
        } else if(board[x[1]] === markerArr[i] &&
          board[x[2]] === markerArr[i]&&
          board[x[0]] === INITIAL_MARKER) {
          board[x[0]] = COMPUTER_MARKER;
          noRandomMove = true;
          break;
        }
  }
  if(noRandomMove) break;
  }
  //moves randomly if no defensive move has happenned
  if(!noRandomMove){
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let arrX = [];
  let arrO = [];

  for (let key in board) {
    if (board[key] === 'X') arrX.push(key);
    else if (board[key] == 'O') arrO.push(key);
  }
  for (let i in WINNING_COMBOS) {
    if (arrX.includes(WINNING_COMBOS[i][0].toString()) &&
      arrX.includes(WINNING_COMBOS[i][1].toString()) &&
      arrX.includes(WINNING_COMBOS[i][2].toString())) {
      return 'Human';
    }
    else if (arrO.includes(WINNING_COMBOS[i][0].toString()) &&
      arrO.includes(WINNING_COMBOS[i][1].toString()) &&
      arrO.includes(WINNING_COMBOS[i][2].toString())) {
      return 'Computer';
    }
  }
}

function someoneWon(board) {
  return !!detectWinner(board); //converts to boolean value
}
function chooseSquare(board, currentPlayer) {
  if(currentPlayer === 'Human') playerChoosesSquare(board);
  else computerChoosesSquare(board);
}
function alternatePlayer(currentPlayer) {
  if(currentPlayer === 'Human') return 'Computer';
  else return 'Human';
}
const NUM_TO_WIN = 5;
let hWins = 0;
let cWins = 0;

while (true) {
  let board = initializeBoard();
  displayBoard(board); 
  let currentPlayer = 'Human';

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
  if (someoneWon(board)) {
    displayBoard(board);
    if(detectWinner(board) === 'Human') hWins++;
    else cWins++;
    prompt(`${detectWinner(board)} won!`);
  }
  else {
    displayBoard(board);
    prompt(`It's a tie!`);
  }
  prompt("Human Score: " + hWins);
  prompt("Computer Score: " + cWins);
  if(hWins === NUM_TO_WIN || cWins === NUM_TO_WIN) {
    cWins = 0;
    hWins = 0;
  }
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  while (answer !== 'y' &&
  answer !== 'n'){
    prompt("Invalid Input");
    prompt('Play again? (y or n)');
    answer = readline.question().toLowerCase()[0];
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');