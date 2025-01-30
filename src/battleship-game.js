import "./styles.css";
import { Gameboard, Player, Ship } from "./index.js";

class Game {
  constructor() {
    this.players = [];
    this.currentPlayerIndex = 0;
    this.gameOver = false;
  }

  createGameboardContainers() {

    const gameContainer = document.getElementById("gameboards-container")

    const player1GridUI = document.createElement("div");
    player1GridUI.id = "player1-gameboard";

    const player1bar = document.createElement("div");
    player1bar.classList.add("playerone-bar");
    player1bar.innerText = "Player 1";
    player1GridUI.appendChild(player1bar);

    
    gameContainer.appendChild(player1GridUI);

    const player2GridUI = document.createElement("div");
    player2GridUI.id = "player2-gameboard";

    const player2bar = document.createElement("div");
    player2bar.classList.add("playertwo-bar");
    player2bar.innerText = "Player 2";

    player2GridUI.appendChild(player2bar);

    gameContainer.appendChild(player2GridUI);
  }

 
  handleTurn() {

    if (this.gameOver) return;
    
    const currentPlayer = this.players[this.currentPlayerIndex];
    this.updateTurnDisplay();

    if (currentPlayer.type === "computer") {
        this.computerTurn();
    }
  }

  computerTurn() {
    const currentPlayer = this.players[this.currentPlayerIndex];
    const opponentGameboard = this.players[(this.currentPlayerIndex + 1) % 2].gameboard;  // This points to the opponent's board
    const opponentActiveShips = this.players[(this.currentPlayerIndex + 1) % 2].gameboard.activeShips;  // Accessing the active ships from the opponent's board

    const player2ActiveShips = this.players[1].gameboard.activeShips;

    if (player2ActiveShips === 0) {
        this.gameOver = true;
        this.updateTurnDisplay()
        return; // Stop further execution if the game is over
    }

    if (this.gameOver) {
        return
    }



    // Pick a random cell (coordinates between 0 and 9)
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    
    // Make sure we haven't already attacked this cell
    while (opponentGameboard.grid[randomY][randomX] === 'H' || opponentGameboard.grid[randomY][randomX] === 'M') {
        randomX = Math.floor(Math.random() * 10);
        randomY = Math.floor(Math.random() * 10);
    }

    
    // Attack the random cell
    const isHit = opponentGameboard.receiveAttack(randomX, randomY);
    
    const cell = document.querySelector(`#player${(this.currentPlayerIndex + 1) % 2 === 0 ? 1 : 2}-gameboard .cell[data-x="${randomX}"][data-y="${randomY}"]`);
  
    setTimeout(() => {
        if (this.gameOver) return;
        if (isHit) {
            if (cell) {
                cell.classList.remove('miss');
                cell.classList.add('hit');
                cell.style.backgroundColor = 'red';
            }
        } else {
            if (cell) {
                cell.classList.remove('hit');
                cell.classList.add('miss');
                cell.style.backgroundColor = 'orange';
            }
        }
    
        if (this.gameOver) return;
        this.switchTurn();
    }, 1500);
}
  switchTurn() {
    if (this.gameOver) return;

    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % 2;
    this.updateTurnDisplay();
  }

  updateTurnDisplay() {
    const turnDisplay = document.getElementById("turn-display");
    const player1ActiveShips = this.players[0].gameboard.activeShips;
    const player2ActiveShips = this.players[1].gameboard.activeShips;

    this.players[0].name = "Player 1";  
    this.players[1].name = "Computer";
    const player1Name = this.players[0].name;  
    const player2Name = this.players[1].name;


    if (turnDisplay) {
        const currentPlayer = this.players[this.currentPlayerIndex];
        const opponentGameboard = this.players[(this.currentPlayerIndex + 1) % 2].gameboard;
        let playerName = currentPlayer.type;

    
        if (player2ActiveShips === 0) {
            this.gameOver = true;
            turnDisplay.innerText = `${player1Name} won!`;
            return;
          } else if (player1ActiveShips === 0) {
            this.gameOver = true;
            turnDisplay.innerText = `${player2Name} won!`;
            return;
          }

        if (playerName === "human") {
          playerName = "Player 1";
        } else if (playerName === "computer") {
          playerName = "Computer";
        }
    
        turnDisplay.innerText = `It's ${playerName}'s turn!`;
      }
  }

  
  renderGameboard(gameboard, playerGridUI) {
    const grid = gameboard.grid;
    let gridContainer = playerGridUI.querySelector('.gameboard');

    if (!gridContainer) {
      // If grid container doesn't exist, create one and append it
      gridContainer = document.createElement('div');
      gridContainer.classList.add('gameboard');
      playerGridUI.appendChild(gridContainer);
    }

    // Instead of clearing the entire gridContainer, update cells individually
    const rows = gridContainer.querySelectorAll('.row');
    
    for (let y = 0; y < grid.length; y++) {
      let row = rows[y];

      if (!row) {
        row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
      }

      for (let x = 0; x < grid[y].length; x++) {
        let cell = row.querySelector(`[data-x='${x}'][data-y='${y}']`);

        if (!cell) {
          cell = document.createElement('div');
          cell.classList.add('cell');
          cell.setAttribute('data-x', x);
          cell.setAttribute('data-y', y);
          row.appendChild(cell);
        }

        const cellValue = grid[y][x];
        
        // Clear existing classes and re-add based on current cell state
        cell.classList.remove('ship', 'hit', 'miss');
        
        if (cellValue instanceof Ship) {
          cell.classList.add('ship');
        } else if (cellValue === 'H') {
          cell.classList.add('hit');
        } else if (cellValue === 'M') {
          cell.classList.add('miss');
        }

        // Adds click event listener for the cells
        cell.addEventListener('click', () => {
            if (this.gameOver) return;

            const player1BoardElement = document.querySelectorAll('.gameboard')[0]
            const currentPlayer = this.players[this.currentPlayerIndex];
            const opponentGameboard = this.players[(this.currentPlayerIndex + 1) % 2].gameboard;
            const clickedBoard = cell.closest('.gameboard')

            
        
            if (currentPlayer.type === 'human') {
                // Prevent attacking their own gameboard
                if (clickedBoard === player1BoardElement) {
                    console.log("Player is trying to attack their own gameboard!");
                    return; // Stop further execution if trying to attack their own board
                }
        
                const isHit = opponentGameboard.receiveAttack(x, y);
        
                if (isHit) {
                    cell.classList.add('hit');
                    cell.style.backgroundColor = 'red';
                } else if (cell.classList.contains('hit') || cell.classList.contains('miss')) {
                    return; // Do nothing if the cell was already hit or missed
                } else {
                    cell.classList.add('miss');
                    cell.style.backgroundColor = 'orange';
                }
        
                this.switchTurn();
                this.handleTurn();
          }
        });
      }
    }
}

  initializeGame() {
    this.createGameboardContainers();

    const player1 = new Player("human");
    const player2 = new Player("computer");

    this.players.push(player1, player2);

    const player1GridUI = document.getElementById("player1-gameboard");
    const player2GridUI = document.getElementById("player2-gameboard");



    player1.gameboard.placeShip(2, 9, 3, "horizontal");
    player1.gameboard.placeShip(6, 1, 4, "vertical");
    player1.gameboard.placeShip(1, 2, 2, "vertical");
    player1.gameboard.placeShip(3, 2, 5, "vertical");
    player1.gameboard.placeShip(0, 0, 3, "horizontal");

    player2.gameboard.placeShip(0, 0, 3, "horizontal");
    player2.gameboard.placeShip(5, 5, 4, "vertical");
    player2.gameboard.placeShip(3, 3, 2, "horizontal");
    player2.gameboard.placeShip(0, 3, 5, "vertical");
    player2.gameboard.placeShip(2, 2, 3, "horizontal");

    this.renderGameboard(player1.gameboard, player1GridUI);
    this.renderGameboard(player2.gameboard, player2GridUI);

    this.updateTurnDisplay();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const game = new Game();
  game.initializeGame();
});

export {Game};