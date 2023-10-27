import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import game from "./game";

const dom = (function () {
  const display = document.querySelector(".display");
  const playerBoardDiv = document.querySelector(".player-board");
  const computerBoardDiv = document.querySelector(".computer-board");
  const directionButton = document.querySelector(".direction");
  const resetButton = document.querySelector(".reset");

  let gamerBoard = game.getGamerBoard();
  let computerBoard = game.getComputerBoard();
  let gamerShips = [...game.getGamerShips()];
  let computerShips = [...game.getComputerShips()];

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

  (function displayEvents() {
    window.addEventListener("load", () => {
      display.textContent = "Welcome to Battleship. Place your Carrier";
    });

    window.addEventListener("click", () => {
      switch (gamerShips.length) {
        case 4:
          display.textContent = "Place your Battleship";
          break;
        case 3:
          display.textContent = "Place your Cruiser";
          break;
        case 2:
          display.textContent = "Place your Submarine";
          break;
        case 1:
          display.textContent = "Place your Destroyer";
          break;

        case 0:
          if (game.getWinner() == "") {
            display.textContent = `${game.getTurn()}'s Turn`;
          } else {
            display.textContent = `${game.getWinner()} Won`;
          }
      }
    });
  })();

  (function playerBoardEvents() {
    let currentShip = gamerShips[0];
    let pos1;
    let pos2;

    playerBoardDiv.addEventListener("click", (grid) => {
      if (grid.target.classList.contains("player-board")) {
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
          game.gamer.placeShip(pos1, pos2, currentShip, directionButton.value);
          gamerShips.shift();
          currentShip = gamerShips[0];
          let shipPositions = game.gamer.getShipsPositions();
          for (let i = 0; i < shipPositions.length; i++) {
            playerBoardDiv.children[shipPositions[i]].classList.add(
              "player-ship"
            );
          }
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

  (function computerBoardEvents() {
    let currentShip = computerShips[0];
    window.addEventListener("click", () => {
      while (computerShips.length > 0) {
        game.computer.randomPlacement(currentShip);
        computerShips.shift();
        currentShip = computerShips[0];
      }
      let shipPositions = game.computer.getShipsPositions();
      for (let i = 0; i < shipPositions.length; i++) {
        computerBoardDiv.children[shipPositions[i]].classList.add(
          "computer-ship"
        );
      }
    });
  })();

  (function gameLoopEvents() {
    computerBoardDiv.addEventListener("click", (grid) => {
      if (
        gamerShips.length == 0 &&
        grid.target.classList.contains("computer-board")
      ) {
        let target = grid.target;
        let index = parseInt(target.classList[0]);
        let pos1 = getCoordinates(target)[0];
        let pos2 = getCoordinates(target)[1];

        if (
          !game.computer.getShotCoordinates().includes(index) &&
          game.getWinner() == "" &&
          gamerShips.length == 0
        ) {
          game.setInput([pos1, pos2]);
          game.gameLoop();
        }
      }
    });

    window.addEventListener("click", () => {
      let gamerMissedPos = game.gamer.getMissedPositions();
      let computerMissedPos = game.computer.getMissedPositions();
      let gamerAttackedPos = game.gamer.getAttackedPositions();
      let computerAttackedPos = game.computer.getAttackedPositions();

      for (let i = 0; i < gamerMissedPos.length; i++) {
        playerBoardDiv.children[gamerMissedPos[i]].classList.add("missed");
      }
      for (let i = 0; i < computerMissedPos.length; i++) {
        computerBoardDiv.children[computerMissedPos[i]].classList.add("missed");
      }
      for (let i = 0; i < gamerAttackedPos.length; i++) {
        playerBoardDiv.children[gamerAttackedPos[i]].classList.add("attacked");

        if (playerBoardDiv.children[gamerAttackedPos[i]].children.length == 0) {
          let svgDiv = document.createElement("div");
          svgDiv.classList.add("ship-svg");
          playerBoardDiv.children[gamerAttackedPos[i]].appendChild(svgDiv);
          svgDiv.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ship-wheel</title><path d="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z" /></svg>';
        }
      }
      for (let i = 0; i < computerAttackedPos.length; i++) {
        computerBoardDiv.children[computerAttackedPos[i]].classList.add(
          "attacked"
        );

        if (
          computerBoardDiv.children[computerAttackedPos[i]].children.length == 0
        ) {
          let svgDiv = document.createElement("div");
          svgDiv.classList.add("ship-svg");
          computerBoardDiv.children[computerAttackedPos[i]].appendChild(svgDiv);
          svgDiv.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ship-wheel</title><path d="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z" /></svg>';
        }
      }
    });
  })();

  (function reset() {
    resetButton.addEventListener("click", () => {
      dom;
      game;
      while (playerBoardDiv.hasChildNodes()) {
        playerBoardDiv.removeChild(playerBoardDiv.firstChild);
      }
      while (computerBoardDiv.hasChildNodes()) {
        computerBoardDiv.removeChild(computerBoardDiv.firstChild);
      }
      dom.createGameBoards();
    });
  })();

  return {
    createGameBoards,
  };
})();

export default dom;
