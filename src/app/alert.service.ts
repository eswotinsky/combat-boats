import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  constructor() { }

  playerClickedStruckTile() {
    console.log("Error: player clicked already-struck tile");
  }

  playerHitBoat() {
    console.log("KABOOM");
  }

}
