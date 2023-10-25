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
  let shotCoordinates = [
    ...board.getAttackedPositions(),
    ...board.getMissedPositions(),
  ];

  function indexFinder(pos1, pos2) {
    let index = pos1 * 10 + pos2;
    return index;
  }

  function randomCoordinates() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    return [x, y];
  }

  function randomAttack(player) {
    let coordinates = randomCoordinates();
    let pos1 = coordinates[0];
    let pos2 = coordinates[1];

    let index = indexFinder(pos1, pos2);

    if (player.getShotCoordinates().includes(index)) {
      randomAttack(player);
    } else {
      player.receiveAttack(pos1, pos2);
      console.log("test");
    }
  }

  function randomPlacement(ship) {
    let coordinates = randomCoordinates();
    let pos1 = coordinates[0];
    let pos2 = coordinates[1];
    let direction = "";

    let randomDirection = Math.floor(Math.random() * 2);

    if (randomDirection == 1) {
      direction = "Horizontal";
    } else {
      direction = "Vertical";
    }

    if (board.checkValidity(pos1, pos2, ship, direction)) {
      board.placeShip(pos1, pos2, ship, direction);
    } else {
      randomPlacement(ship);
    }
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
    randomPlacement,
    getBoard,
    getShips,
    getShotCoordinates,
    createBoard: board.createBoard,
    getBoard: board.getBoard,
    placeShip: board.placeShip,
    checkValidity: board.checkValidity,
    receiveAttack: board.receiveAttack,
    isAllSunk: board.isAllSunk,
    getMissedPositions: board.getMissedPositions,
    getAttackedPositions: board.getAttackedPositions,
    getShipsPositions: board.getShipsPositions,
  };
};

export default player;
