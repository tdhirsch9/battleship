import { Gameboard, Ship } from './index'

test('place ship on the grid', () => {
    const gameboard = new Gameboard();
  
    const result = gameboard.placeShip(0, 0, 3, 'horizontal');  // Example placement
    
    expect(result).toBe(true);  // Ensure the ship was placed successfully
    expect(gameboard.grid[0][0]).toBeInstanceOf(Object);  // Check if the first position has a ship
    expect(gameboard.grid[0][1]).toBeInstanceOf(Object);  // Check if the second position has a ship
    expect(gameboard.grid[0][2]).toBeInstanceOf(Object);  // Check if the third position has a ship

    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.ships[0].coordinates).toEqual([[0, 0], [1, 0], [2, 0]])
    expect(gameboard.floatingShips).toBe(1)

  });

  test('place vertical ship on the grid', () => {
    const gameboard = new Gameboard();
  
    const result = gameboard.placeShip(0, 0, 3, 'vertical');  // Example placement
    
    expect(result).toBe(true);  // Ensure the ship was placed successfully
    expect(gameboard.grid[0][0]).toBeInstanceOf(Object);  // Check if the first position has a ship
    expect(gameboard.grid[1][0]).toBeInstanceOf(Object);  // Check if the second position has a ship
    expect(gameboard.grid[2][0]).toBeInstanceOf(Object);  // Check if the third position has a ship

    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.ships[0].coordinates).toEqual([[0, 0], [0, 1], [0, 2]])
    expect(gameboard.floatingShips).toBe(1)
  })

  test('prevent placing vertical ship out of bounds', () => {
    const gameboard = new Gameboard();

    const result = gameboard.placeShip(0, 8, 3, 'vertical')


    expect(result).toBe(false);
    expect(gameboard.ships.length).toBe(0);
    expect(gameboard.grid[8][0]).toBe(0);

  });

  test('prevent placing vertical ship overlapping another ship', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(0, 0, 3, 'vertical');

  

    const result = gameboard.placeShip(0, 1, 3, 'vertical');

    expect(result).toBe(false)
    expect(gameboard.ships.length).toBe(1);

  })

  test('tracks coordinates that are misses in an array', () => {
    const gameboard = new Gameboard();

    

    expect(gameboard.grid[0][4]).toBe(0);
    expect(gameboard.miss).toEqual([]);

    gameboard.receiveAttack(4, 0);

    expect(gameboard.grid[0][4]).toBe('M')

    expect(gameboard.miss).toContainEqual([0, 4])


  })

  test('adds ship and its coordinates to the ships array', () => {
    const gameboard = new Gameboard();

    gameboard.placeShip(0, 0, 3, 'vertical')

    expect(gameboard.ships.length).toBe(1)

    const addedShip = gameboard.ships[0];

    expect(addedShip.ship).toBeInstanceOf(Ship);
    expect(addedShip.ship.length).toBe(3);

    expect(addedShip.coordinates).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
    ])

  })

  test('adds ship to the floating ships variable, tracks each hit on the ship, and removes it if the ship is sunk', () => {
    const gameboard = new Gameboard();

    expect(gameboard.floatingShips).toBe(0)

    gameboard.placeShip(0, 0, 3, 'vertical')

    expect(gameboard.floatingShips).toBe(1)

    gameboard.receiveAttack(0, 0)
    gameboard.receiveAttack(0, 1)
    gameboard.receiveAttack(0, 2)

    expect(gameboard.grid[0][0]).toBe('H')
    expect(gameboard.grid[1][0]).toBe('H')
    expect(gameboard.grid[2][0]).toBe('H')

    expect(gameboard.floatingShips).toBe(0)

  })