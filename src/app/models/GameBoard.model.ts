export class GameBoard {
  board = [];
  constructor(){
    this.generateBoard();
  };
  generateBoard = function(){
    for(let i = 0; i < 10; i++) {
      this.board[i] = []; //board is an array containing 10 arrays (rows)
      for(let j = 0; j < 10; j++) { //each row contains 10 tile units (1 per column)
        this.board[i][j] = {x: j, y: i, hasBoat: false, struck: false}; //each tile obj is represented by [row][col] coordinates; contains properties to track state
      }
    }
    //test ships below
    this.board[1][2].hasBoat = true;
    this.board[1][3].hasBoat = true;
    this.board[4][5].hasBoat = true;
    this.board[5][5].hasBoat = true;
    this.board[6][5].hasBoat = true;
  }
}
