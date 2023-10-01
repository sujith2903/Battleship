import ship from "./ship"
const gameBoard = function () {
    
    let board = []

    function createBoard() {
        for (let i = 0; i < 10; i++){
            let coordinates = []
            for (let j = 0; j < 10; j++){
                coordinates = [i, j]
                board.push(coordinates)
                coordinates = []
            }
        }
        return board
    }

    function placeShip(pos1, pos2, ship, direction) {
        
        if (direction == 'Horizontal') {
            if (pos1 + ship.length > 9) {
                return false
            }
        }
        
        if (direction == 'Vertical') {
            if (pos2 + ship.length > 9) {
                return false
            }
        }
        return true
    }

    function getBoard() {
        return board
    }

    return {
        createBoard,
        getBoard,
        placeShip
    }
}

export default gameBoard