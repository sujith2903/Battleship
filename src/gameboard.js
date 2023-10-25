import ship from "./ship";
const gameBoard = function () {
  let board = [];
  let missedAttack = [];
  let attackedPosition = [];
  let shipPosition = [];
  let ships = [];

  function createCoordinate(coordinates, name) {
    return { coordinates, name };
  }

  function indexFinder(pos1, pos2) {
    let index = pos1 * 10 + pos2;
    return index;
  }

  function createBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let newCoordinates = createCoordinate();
        newCoordinates.coordinates = [i, j];
        newCoordinates.name = null;
        board.push(newCoordinates);
      }
    }
    return board;
  }

  function checkValidity(pos1, pos2, ship, direction) {
    let index = indexFinder(pos1, pos2);

    if (direction == "Horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (shipPosition.includes(index + i)) {
          return false;
        }
      }
    }

    if (direction == "Vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (shipPosition.includes(index + i * 10)) {
          return false;
        }
      }
    }

    if (direction == "Horizontal" && pos2 + ship.length > 10) {
      return false;
    }

    if (direction == "Vertical" && pos1 + ship.length > 10) {
      return false;
    }
    return true;
  }

  function placeShip(pos1, pos2, ship, direction) {
    if (
      direction == "Horizontal" &&
      checkValidity(pos1, pos2, ship, direction)
    ) {
      let index = indexFinder(pos1, pos2);

      for (let i = 0; i < ship.length; i++) {
        board[index + i].name = ship.shipName;
        shipPosition.push(index + i);
      }
    }

    if (direction == "Vertical" && checkValidity(pos1, pos2, ship, direction)) {
      let index = indexFinder(pos1, pos2);

      for (let i = 0; i < ship.length; i++) {
        board[index + i * 10].name = ship.shipName;
        shipPosition.push(index + i * 10);
      }
    }
    ships.push(ship);
  }

  function receiveAttack(pos1, pos2) {
    let index = indexFinder(pos1, pos2);

    if (board[index].name != null) {
      if (!attackedPosition.includes(index)) {
        attackedPosition.push(index);
        findShip(board[index].name).hit();
      }
    } else {
      if (!missedAttack.includes(index)) {
        missedAttack.push(index);
      }
    }
  }

  function findShip(name) {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].shipName == name) {
        return ships[i];
      }
    }
  }

  function isAllSunk() {
    if (shipPosition.length == attackedPosition.length) {
      return true;
    }
  }

  function getBoard() {
    return board;
  }

  function getMissedPositions() {
    return missedAttack;
  }

  function getShipsPositions() {
    return shipPosition;
  }

  function getAttackedPositions() {
    return attackedPosition;
  }
  return {
    createBoard,
    getBoard,
    checkValidity,
    placeShip,
    receiveAttack,
    isAllSunk,
    getMissedPositions,
    getAttackedPositions,
    getShipsPositions,
  };
};

export default gameBoard;
