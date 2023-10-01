import ship from "../ship.js"

test('Check for length', () => {
    let testShip = ship(5)
    expect(testShip.length).toBe(5);
})

test('Check if hit goes up', () => {
    let testShip = ship(2)
    expect(testShip.hit()).toBe(1);
    expect(testShip.hit()).toBe(2);
})

test('Test if ship is sunk', () => {
    let testShip = ship(2)
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBeTruthy();
})

test('Test number of hits', () => {
    let testShip = ship(5)
    testShip.hit()
    testShip.hit()
    expect(testShip.getHits()).toBe(2)
})