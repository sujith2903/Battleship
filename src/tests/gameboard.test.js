import ship from "../ship";
import gameBoard from "../gameboard";

test('Check game board', () => {
    let board = gameBoard()
    board.createBoard()
    expect(board.getBoard()[0]).toEqual([0, 0])
    expect(board.getBoard()[10]).toEqual([1, 0])
    expect(board.getBoard()[99]).toEqual([9, 9])
})

test('Check if position is allowed', () => {
    let testShip = ship(5)
    let board = gameBoard()
    expect(board.placeShip(6, 0, testShip, 'Horizontal')).toBeFalsy();
    expect(board.placeShip(4, 0, testShip ,'Horizontal')).toBeTruthy();
    expect(board.placeShip(0, 4, testShip, 'Vertical')).toBeTruthy();
    expect(board.placeShip(0, 6, testShip, 'Vertical')).toBeFalsy();
})

test('Check if position is allowed', () => {
    let testShip = ship(2)
    let board = gameBoard()
    expect(board.placeShip(6, 0, testShip, 'Horizontal')).toBeTruthy();
    expect(board.placeShip(4, 0, testShip ,'Horizontal')).toBeTruthy();
    expect(board.placeShip(0, 4, testShip, 'Vertical')).toBeTruthy();
    expect(board.placeShip(0, 6, testShip, 'Vertical')).toBeTruthy();
})