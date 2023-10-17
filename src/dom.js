import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";

const dom = (function () {

    const carrier = document.querySelector('.carrier-name')
    const battleship = document.querySelector('.battleship-name')
    const cruiser = document.querySelector('.cruiser-name')
    const submarine = document.querySelector('.submarine-name')
    const destroyer = document.querySelector('.destroyer-name')
    const playerBoard = document.querySelector('.player-board')
    const computerBoard = document.querySelector('.computer-board')
    
    function hideDisplay(element) {
        element.classList.remove("show")
        element.classList.add("hide")
    }

    function showDisplay(element) {
        element.classList.remove("hide")
        element.classList.add("show")
    }

    function createGameBoards() {
        
        let board = gameBoard().createBoard()

        for (let i = 0; i < board.length; i++){
            let grid = document.createElement('div')
            grid.classList.add(i)
            grid.classList.add('grid')
            grid.classList.add('player-board')
            playerBoard.appendChild(grid)
        }
        for (let i = 0; i < board.length; i++){
            let grid = document.createElement('div')
            grid.classList.add(i)
            grid.classList.add('grid')
            grid.classList.add('computer-board')
            computerBoard.appendChild(grid)
        }
    }

    return {
        hideDisplay,
        showDisplay,
        createGameBoards
    }
})()

export default dom