import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  tiles: Object[] = [];

  create() {
    for(let i = 0; i < 10; i++) {
      this.tiles[i] = []; //tiles is an array containing 10 arrays (rows)
      for(let j = 0; j < 10; j++) { //each row contains 10 tile units (1 per column)
        this.tiles[i][j] = {used: false, struck: false}; //each tile is represented by [row][col] coordinates. each contains a property to track state
      }
    }
    //test ships below
    this.tiles[1][2].used = true;
    this.tiles[1][3].used = true;

    this.tiles[4][5].used = true;
    this.tiles[5][5].used = true;
    this.tiles[6][5].used = true;
  }

  attack(tile: any) {
    tile.struck = true;
    console.log(tile.used ? 'hit' : 'miss');
  }

  wasStruck(tile: any) {
    return tile.struck ? 'X' : '';
  }

}
