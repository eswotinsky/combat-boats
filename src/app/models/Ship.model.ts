import { GameBoard } from './GameBoard.model';

export class Ship {
  tiles: object[] = [];
  //place Ship function
  //determine if dead function
  constructor(length: number){
    this.place = (()=>{
      return (gameBoard: GameBoard, tile) => { //gameBoard.board[x][y]
        console.log(tile);
        console.log(gameBoard);
        if (gameBoard.board[0].length >= tile.x + length){
          for (let i = 0; i < length; i++){
            gameBoard.board[tile.y][tile.x+i].hasBoat = true;
          }
          //ship can be placed in this position (no overhang)
          console.log("ship was placed successfully");
        } else {
          //ship can NOT be placed in this position (hangs over edge of board)
          console.log("ship was not able to be placed");
        }
      }
    })();
  }
  place;
}

export let shipFactory = {
  length2: function(){return new Ship(2)},
  length3: function(){return new Ship(3)},
  length4: function(){return new Ship(4)},
  length5: function(){return new Ship(5)}
}
