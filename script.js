//SELECTORS
let table = document.getElementsByTagName('table');
let square = document.getElementsByClassName('square');
let title = document.getElementsByTagName('h1');
let versus = document.getElementsByTagName('h3');
let scoreOne = document.getElementById('score-one');
let scoreTwo = document.getElementById('score-two');
let resetButton = document.getElementById('reset');
let playerOne = document.getElementById('player-one');
let playerTwo = document.getElementById('player-two');

//VARIABLES
let turn = 'one';
let winner = '';
let scoreOneCounter = 0;
let scoreTwoCounter = 0;
let tieGameCounter = 0;
let gameStatus = true;

//ARRAYS
let userNames = []

//CREATE EVENT LISTENERS
for (i = 0; i < square.length; i++) {
    square[i].addEventListener('click', checkTurn);
}

resetButton.addEventListener('click', resetGame);
document.addEventListener('DOMContentLoaded', askForNames);

//FUNCTIONS
function checkTurn() {
    if (turn === 'one') {
        event.target.innerHTML = 'O';
        event.target.style.color = 'green';
        event.target.style.pointerEvents = 'none';
        turn = 'two';
        tieGameCounter++;
        checkWinner();
    } else if (turn === 'two') {
        event.target.innerHTML = 'X';
        event.target.style.color = 'red';
        event.target.style.pointerEvents = 'none';
        turn = 'one';
        tieGameCounter++;
        checkWinner();
    }
}

function checkWinner() {
    if (square[0].innerHTML === 'O' && square[1].innerHTML === 'O' && square[2].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[0].innerHTML === 'X' && square[1].innerHTML === 'X' && square[2].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[3].innerHTML === 'O' && square[4].innerHTML === 'O' && square[5].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[3].innerHTML === 'X' && square[4].innerHTML === 'X' && square[5].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[6].innerHTML === 'O' && square[7].innerHTML === 'O' && square[8].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[6].innerHTML === 'X' && square[7].innerHTML === 'X' && square[8].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[0].innerHTML === 'O' && square[3].innerHTML === 'O' && square[6].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[0].innerHTML === 'X' && square[3].innerHTML === 'X' && square[6].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[1].innerHTML === 'O' && square[4].innerHTML === 'O' && square[7].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[1].innerHTML === 'X' && square[4].innerHTML === 'X' && square[7].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[2].innerHTML === 'O' && square[5].innerHTML === 'O' && square[8].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[2].innerHTML === 'X' && square[5].innerHTML === 'X' && square[8].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[0].innerHTML === 'O' && square[4].innerHTML === 'O' && square[8].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[0].innerHTML === 'X' && square[4].innerHTML === 'X' && square[8].innerHTML === 'X') {
        playerTwoWins();
    }
    if (square[2].innerHTML === 'O' && square[4].innerHTML === 'O' && square[6].innerHTML === 'O') {
        playerOneWins();
    }
    if (square[2].innerHTML === 'X' && square[4].innerHTML === 'X' && square[6].innerHTML === 'X') {
        playerTwoWins();
    }
    if (tieGameCounter === 9 && gameStatus === true) {
        tieGame();
    }
}

function playerOneWins() {
    title[0].innerText = `${userNames[0]} Wins!`;
    winner = 'one';
    endGame();
}

function playerTwoWins() {
    title[0].innerHTML = `${userNames[1]} Wins!`;
    winner = 'two';
    endGame();
}

function tieGame() {
    title[0].innerHTML = 'The Game is a Tie!';
    winner = 'none';
    endGame();
}

function endGame() {
    if (winner === 'one') {
        scoreOneCounter ++;
        scoreOne.innerHTML = scoreOneCounter;
        resetButton.style.visibility = 'visible';
        gameStatus = false;
        switchGameStatus();
    }
    if (winner === 'two') {
        scoreTwoCounter ++;
        scoreTwo.innerHTML = scoreTwoCounter;
        resetButton.style.visibility = 'visible';
        gameStatus = false;
        switchGameStatus();
    }
    if (winner === 'none') {
        resetButton.style.visibility = 'visible';
        gameStatus = false;
        switchGameStatus();
    }
}

function resetGame() {
    for (i = 0; i < square.length; i++) {
        square[i].innerHTML = '';
        resetButton.style.visibility = 'hidden';
    }
    title[0].innerHTML = 'Tick Tack Toe';
    tieGameCounter = 0;
    gameStatus = true;
    switchGameStatus();
}

function switchGameStatus() {
    if (gameStatus === false) {
        for (i = 0; i < square.length; i++) {
            square[i].style.pointerEvents = 'none';
        }
    }
    if (gameStatus === true) {
        for (i = 0; i < square.length; i++) {
            square[i].style.pointerEvents = 'auto';
        }
    }
}

function askForNames() {
    let nameOne = window.prompt('Please enter name of player one');
    let nameTwo = window.prompt('Please enter name of player two');
    playerOne.innerText = `${nameOne} score`;
    playerTwo.innerHTML = `${nameTwo} score`;
    versus[0].innerHTML = `${nameOne} vs ${nameTwo}`;
    userNames.push(nameOne);
    userNames.push(nameTwo);
}