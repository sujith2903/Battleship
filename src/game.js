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

  function getGamerBoard() {
    return gamerBoard;
  }

  function getComputerBoard() {
    return computerBoard;
  }

  return {
    gamer,
    computer,
    getGamerBoard,
    getComputerBoard,
  };
})();

export default game;
