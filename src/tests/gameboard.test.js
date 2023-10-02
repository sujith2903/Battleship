import ship from "../ship";
import gameBoard from "../gameboard";

test('Check game board', () => {
    let board = gameBoard()
    board.createBoard()
    expect(board.getBoard()[0]).toEqual({ coordinates: [0, 0], name :null })
    expect(board.getBoard()[10]).toEqual({ coordinates: [1, 0], name :null })
    expect(board.getBoard()[99]).toEqual({ coordinates: [9, 9], name :null })
})

test('Check if position is allowed', () => {
    let testShip = ship(5)
    let board = gameBoard()
    expect(board.placeShip(6, 0, testShip, 'Horizontal')).toBeFalsy();
    expect(board.placeShip(0, 6, testShip, 'Vertical')).toBeFalsy();
})

test('Check if ship is placed Horizontally', () => {
    let testShip = ship(5, 'Destroyer')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip, 'Horizontal')
    expect(board.getBoard()[4].name).toBe('Destroyer')
    expect(board.getBoard()[2].name).toBe('Destroyer')
})

test('Check if ship is placed Vertically', () => {
    let testShip = ship(3, 'Destroyer')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip, 'Vertical')
    expect(board.getBoard()[0].name).toBe('Destroyer')
    expect(board.getBoard()[10].name).toBe('Destroyer')
    expect(board.getBoard()[20].name).toBe('Destroyer')
})