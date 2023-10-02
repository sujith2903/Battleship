import ship from "./ship"
const gameBoard = function () {
    
    let board = []

    function createCoordinate(coordinates, name) {
        return {coordinates,name}
    }

    function indexFinder(pos1, pos2) {
        let index = pos1 * 10 + pos2;
        return index
    }

    function createBoard() {
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                let newCoordinates = createCoordinate()
                newCoordinates.coordinates = [i, j]
                newCoordinates.name = null
                board.push(newCoordinates)
            }
        }
        return board
    }

    function placeShip(pos1, pos2, ship, direction) {
        
        if (direction == 'Horizontal') {
            if (pos1 + ship.length > 9) {
                return false
            }

            let index = indexFinder(pos1, pos2)
            
            for (let i = 0; i < ship.length; i++){
                board[index + i].name = ship.shipName
            }
        }
        
        if (direction == 'Vertical') {
            if (pos2 + ship.length > 9) {
                return false
            }

            let index = indexFinder(pos1, pos2)

             for (let i = 0; i < ship.length; i++){
                board[index + i * 10].name = ship.shipName
            }
        }
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