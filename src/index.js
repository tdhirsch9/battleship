
class Ship{
    constructor(length){
        this.length = length;
        this.hits = 0;
    }

    hit(){
        if (this.hits < this.length){
            this.hits++
        }
    }

    isSunk(){
        if (this.hits >= this.length){
            return true;
        } else {
            return false;
        }
    }



}

class Gameboard{
    constructor(){
        this.grid = [];
        this.ships = [];
        this.miss = [];
        this.activeShips = 0;
        this.gameOver = false;

        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(0);

            }
            this.grid.push(row);
        }
    }

    placeShip(x, y, length, direction){

        const newShip = new Ship(length)

        

        const coordinates = [];
        let noOverlap = true

        if (direction === "horizontal"){
            if (x + length > 9) return false //returns false if out of bounds
            for (let i = 0; i < length; i++){ 
                if(this.grid[y][x + i] !== 0) {
                    noOverlap = false;
                } //prevents ship from being placed on an occupied coordinate
            }

            if(!noOverlap) return false;

            for (let i = 0; i < length; i++){
                this.grid[y][x + i] = newShip; //places ship on coordinates and creates ship object
                coordinates.push([x + i, y]);
            }
        } else if (direction === "vertical") {
            if (y + length > 9) return false //returns false if out of bounds

            for (let i = 0; i < length; i++) {
                if(this.grid[y + i][x] !== 0){
                    noOverlap = false;
                } //prevents ship from being placed on an occupied coordinate
            }

            if(!noOverlap) return false;

            for (let i = 0; i < length; i++) {
                this.grid[y + i][x] = newShip //places ship on coordinates and creates ship object
                coordinates.push([x, y + i])
            }
        } else {
            
            return false // Invalid Placement
        }
        
        this.ships.push({ ship: newShip, coordinates }); //Adds the ship and its coordinates to the ships array
        this.activeShips++;
    
        return true
    }

    receiveAttack(x, y){
        
        for (let i = 0; i < this.ships.length; i++) {
            for(let j = 0; j < this.ships[i].coordinates.length; j++) {
                if(this.ships[i].coordinates[j][0] === x && this.ships[i].coordinates[j][1] === y){
                    this.ships[i].ship.hit()
                    this.ships[i].coordinates.splice(j, 1) // removes orginal coordinates and adds an H to represent a hit.
                    this.grid[y][x] = 'H'
                    if (this.ships[i].ship.isSunk()) {
                        this.activeShips--;  
                    }



                    
                    return true
                }
            }
        }
        this.miss.push([y, x])
        this.grid[y][x] = 'M'
        return false
    }

    status(){
        return this.activeShips === 0;
    }

}

class Player{
   constructor(type){
    this.type = type;
    this.gameboard = new Gameboard();

   } 
}


export {Gameboard, Player, Ship};