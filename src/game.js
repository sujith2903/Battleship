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

  let turn = "gamer";
  let winner = "";
  let input = [];

  function gameLoop() {
    if (turn == "gamer") {
      computer.receiveAttack(input[0], input[1]);
      if (computer.isAllSunk()) {
        winner = "gamer";
      } else {
        turn = "computer";
        input = [];
        console.log(computer.getAttackedPositions());
        console.log(computer.getShipsPositions());
      }
    }
    if (turn == "computer") {
      computer.randomAttack(gamer);
      if (gamer.isAllSunk()) {
        winner = "computer";
      } else {
        turn = "gamer";
        console.log(gamer.getAttackedPositions());
        console.log(gamer.getShipsPositions());
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
