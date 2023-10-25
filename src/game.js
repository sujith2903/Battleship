import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";

const game = (function () {
  let gamer = player();
  let computer = player();

  gamer.createBoard();
  computer.createBoard();

  let gamerBoard = gamer.getBoard();
  let computerBoard = computer.getBoard();
  let gamerShips = gamer.getShips();
  let computerShips = computer.getShips();

  let turn = "Gamer";
  let winner = "";
  let input = [];

  function gameLoop() {
    if (turn == "Gamer") {
      computer.receiveAttack(input[0], input[1]);
      if (computer.isAllSunk()) {
        winner = "Gamer";
      } else {
        turn = "Computer";
        input = [];
      }
    }
    if (turn == "Computer") {
      computer.randomAttack(gamer);
      if (gamer.isAllSunk()) {
        winner = "Computer";
      } else {
        turn = "Gamer";
      }
    }
    console.log(winner);
  }

  function setInput(coordinates) {
    input = coordinates;
  }

  function getTurn() {
    return turn;
  }

  function getWinner() {
    return winner;
  }

  function getGamerBoard() {
    return gamerBoard;
  }

  function getComputerBoard() {
    return computerBoard;
  }

  function getGamerShips() {
    return gamerShips;
  }

  function getComputerShips() {
    return computerShips;
  }

  return {
    gamer,
    computer,
    setInput,
    gameLoop,
    getTurn,
    getWinner,
    getGamerBoard,
    getComputerBoard,
    getGamerShips,
    getComputerShips,
  };
})();

export default game;
