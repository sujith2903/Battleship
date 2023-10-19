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

  playerBoardDiv.addEventListener("click", (grid) => {
    if (grid.target.classList.contains("player-board")) {
      let coordinates = grid.target.classList[1].split(",");
      let pos1 = parseInt(coordinates[0]);
      let pos2 = parseInt(coordinates[1]);
      if (gamerShips.length > 0) {
        let currentShip = gamerShips[0];
        if (
          game.gamer.placeShip(
            pos1,
            pos2,
            currentShip,
            directionButton.value
          ) != false
        ) {
          console.log(gamerBoard);
          gamerShips.shift();
          console.log(game.getGamerShips());
        }
      }
    }
  });

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
