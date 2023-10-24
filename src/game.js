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
    getGamerBoard,
    getComputerBoard,
    getGamerShips,
    getComputerShips,
  };
})();

export default game;
