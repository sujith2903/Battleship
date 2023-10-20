import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import game from "./game";

const dom = (function () {
  const carrier = document.querySelector(".carrier-name");
  const battleship = document.querySelector(".battleship-name");
  const cruiser = document.querySelector(".cruiser-name");
  const submarine = document.querySelector(".submarine-name");
  const destroyer = document.querySelector(".destroyer-name");
  const playerBoardDiv = document.querySelector(".player-board");
  const computerBoardDiv = document.querySelector(".computer-board");
  const directionButton = document.querySelector(".direction");

  let gamerBoard = game.getGamerBoard();
  let computerBoard = game.getComputerBoard();
  let gamerShips = [...game.getGamerShips()];
  let computerShips = [...game.getComputerShips()];

  function hideDisplay(element) {
    element.classList.remove("show");
    element.classList.add("hide");
  }

  function showDisplay(element) {
    element.classList.remove("hide");
    element.classList.add("show");
  }

  function createGameBoards() {
    for (let i = 0; i < gamerBoard.length; i++) {
      let grid = document.createElement("div");
      grid.classList.add(i);
      grid.classList.add(gamerBoard[i].coordinates);
      grid.classList.add("grid");
      grid.classList.add("player-board");
      playerBoardDiv.appendChild(grid);
    }
    for (let i = 0; i < computerBoard.length; i++) {
      let grid = document.createElement("div");
      grid.classList.add(i);
      grid.classList.add(computerBoard[i].coordinates);
      grid.classList.add("grid");
      grid.classList.add("computer-board");
      computerBoardDiv.appendChild(grid);
    }
  }

  function getCoordinates(target) {
    let coordinates = target.classList[1].split(",");
    let pos1 = parseInt(coordinates[0]);
    let pos2 = parseInt(coordinates[1]);

    return [pos1, pos2];
  }

  function addValidityColor(cell) {
    cell.classList.add("green");
  }

  function removeValidityColor(cell) {
    cell.classList.remove("green");
    cell.classList.remove("red");
  }

  function addNonValidityColor(cell) {
    cell.classList.add("red");
  }

  (function playerBoardEvents() {
    let currentShip = gamerShips[0];
    let pos1;
    let pos2;

    playerBoardDiv.addEventListener("click", (grid) => {
      if (grid.target.classList.contains("player-board")) {
        let target = grid.target;
        pos1 = getCoordinates(target)[0];
        pos2 = getCoordinates(target)[1];
        if (gamerShips.length > 0) {
          game.gamer.placeShip(pos1, pos2, currentShip, directionButton.value);
          gamerShips.shift();
          currentShip = gamerShips[0];
          console.log(gamerBoard);
        }
      }
    });

    playerBoardDiv.addEventListener("mouseover", (grid) => {
      if (grid.target.classList.contains("grid")) {
        let target = grid.target;
        pos1 = getCoordinates(target)[0];
        pos2 = getCoordinates(target)[1];
        if (
          gamerShips.length > 0 &&
          game.gamer.checkValidity(
            pos1,
            pos2,
            currentShip,
            directionButton.value
          )
        ) {
          addValidityColor(target);
        } else if (gamerShips.length > 0) {
          addNonValidityColor(target);
        }
      }
    });

    playerBoardDiv.addEventListener("mouseout", (grid) => {
      if (grid.target.classList.contains("grid")) {
        let target = grid.target;
        removeValidityColor(target);
      }
    });
  })();

  directionButton.addEventListener("click", () => {
    if (directionButton.value == "Horizontal") {
      directionButton.value = "Vertical";
      directionButton.textContent = "Set Horizontal";
    } else {
      directionButton.value = "Horizontal";
      directionButton.textContent = "Set Vertical";
    }
  });

  return {
    hideDisplay,
    showDisplay,
    createGameBoards,
  };
})();

export default dom;
