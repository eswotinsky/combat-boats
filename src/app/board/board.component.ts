import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [AlertService]
})
export class BoardComponent {

  tiles: Object[] = [];

  constructor(private alertService: AlertService) { }

  create() {
    for(let i = 0; i < 10; i++) {
      this.tiles[i] = []; //tiles is an array containing 10 arrays (rows)
      for(let j = 0; j < 10; j++) { //each row contains 10 tile units (1 per column)
        this.tiles[i][j] = {hasBoat: false, struck: false}; //each tile is represented by [row][col] coordinates. each contains a property to track state
      }
    }
    //test ships below
    this.tiles[1][2].hasBoat = true;
    this.tiles[1][3].hasBoat = true;
    this.tiles[4][5].hasBoat = true;
    this.tiles[5][5].hasBoat = true;
    this.tiles[6][5].hasBoat = true;
  }

  attack(tile: any) {
    if(tile.struck===false) {
      tile.struck = true;
      if(tile.hasBoat===true) {
        this.alertService.playerHitBoat();
      }

      //emit player change
    }
    else {
      this.alertService.playerClickedStruckTile();
    }
  }

  wasStruck(tile: any) {
    return tile.struck ? 'X' : '';
  }

}
