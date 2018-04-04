import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPlayerId = 1;
  gameStarted = false;
  //call this after making a move
  changePlayer() {
    this.currentPlayerId === 1 ? this.currentPlayerId = 2 : this.currentPlayerId = 1;
  }

}
