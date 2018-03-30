import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(public player: PlayerComponent) { }


}
