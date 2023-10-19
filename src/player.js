import ship from "./ship";
import gameBoard from "./gameboard";

const player = function () {
  let board = gameBoard();
  let carrier = ship(5, "Carrier");
  let battleship = ship(4, "Battleship");
  let cruiser = ship(3, "Cruiser");
  let submarine = ship(3, "Submarine");
  let destroyer = ship(2, "Destroyer");
  let ships = [carrier, battleship, cruiser, submarine, destroyer];
  let shotCoordinates = [];

  function randomAttack() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    return [x, y];
  }

  function getBoard() {
    return board;
  }

  function getShips() {
    return ships;
  }

  function getShotCoordinates() {
    return shotCoordinates;
  }

  return {
    randomAttack,
    getBoard,
    getShips,
    getShotCoordinates,
    createBoard: board.createBoard,
    getBoard: board.getBoard,
    placeShip: board.placeShip,
    receiveAttack: board.receiveAttack,
    isAllSunk: board.isAllSunk,
    getMissedPositions: board.getMissedPositions,
    getAttackedPositions: board.getAttackedPositions,
    getShipsPositions: board.getShipsPositions,
  };
};

export default player;
