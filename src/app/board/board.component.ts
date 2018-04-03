import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { AlertService } from '../alert.service';
import { GameBoard } from '../models/GameBoard.model';
import { Ship, shipFactory } from '../models/Ship.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [AlertService]
})
export class BoardComponent implements OnInit {

  gameBoard: GameBoard;
  selectedShip: Ship = shipFactory.length5();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.gameBoard = new GameBoard();
    console.log(this.gameBoard.board);
  }

  attack(tile: any) {
    if(tile.struck===false) {
      tile.struck = true;
      if(tile.hasBoat===true) {
        this.alertService.playerHitBoat();
      }
      else {
        this.alertService.playerMissedBoat();
      }
      //emit player change
    }
    else {
      this.alertService.playerClickedStruckTile();
    }
  }

  place(tile){
    this.selectedShip.place(this.gameBoard, tile);
    //after finished placing all ships, set selectedShip to null so attack function works
  }

  wasStruck(tile: any) {
    //empty if tile not yet struck; O if struck and hasBoat; X if struck and !hasBoat
    return !tile.struck ? '' : tile.hasBoat ? 'O' : 'X';
  }

}
