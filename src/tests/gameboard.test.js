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

test('Check if a ship is attacked', () => {
    let testShip = ship(3, 'Destroyer')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip, 'Vertical')
    board.receiveAttack(0, 0)
    board.receiveAttack(0,5)
    expect(testShip.getHits()).toBe(1)
    expect(board.getAttackedPositions()[0]).toBe(0)
    expect(board.getMissedPositions()[0]).toBe(5)
})

test('Check if a ship is attacked', () => {
    let testShip = ship(3, 'Destroyer')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip, 'Vertical')
    board.receiveAttack(0, 0)
    board.receiveAttack(0, 10)
    expect(testShip.getHits()).toBe(2)
})

test('Check if a ship is attacked', () => {
    let testShip1 = ship(3, 'Destroyer')
    let testShip2 = ship(4, 'Battleship')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip1, 'Vertical')
    board.placeShip(0, 1, testShip2, 'Horizontal')
    board.receiveAttack(0, 1)
    board.receiveAttack(0, 2)
    expect(testShip2.getHits()).toBe(2)
})

test('Check if all ships are sunk', () => {
    let testShip1 = ship(3, 'Destroyer')
    let testShip2 = ship(4, 'Battleship')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip1, 'Vertical')
    board.placeShip(0, 1, testShip2, 'Horizontal')
    board.receiveAttack(0, 0)
    board.receiveAttack(0, 10)
    board.receiveAttack(0, 20)
    board.receiveAttack(0, 1)
    board.receiveAttack(0, 2)
    board.receiveAttack(0, 3)
    board.receiveAttack(0, 4)
    expect(board.isAllSunk()).toBe(true)
})

test('Check if ship positions are correct', () => {
    let testShip = ship(3, 'Destroyer')
    let board = gameBoard()
    board.createBoard()
    board.placeShip(0, 0, testShip, 'Vertical')
    expect(board.getShipsPositions()).toContain(0)
    expect(board.getShipsPositions()).toContain(10)
    expect(board.getShipsPositions()).toContain(20)
})