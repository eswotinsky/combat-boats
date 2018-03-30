# Battleship

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



*SETUP*

program should create 10x10 square grid to serve as the game board

program should create another 10x10 square grid (possibly smaller in footprint) to serve as their 'target' board. this represents the other player's board

players should have access to 5 different ships, with square dimensions of 2x1, 3x1, 3x1, 4x1, 5x1

players should be able to place their ships vertically or horizontally in any position desired on their board at the start of the game

player ships must be contained entirely within the grid (no ships partially off the edge of the board)

player ships cannot overlap other ships

once player has placed 5 ships in valid positions, game should begin

player cannot adjust pieces after the game has started


*GAMEPLAY*

player alternates turns with (other player? CPU?). each selects a position on their target board to attack

if an attack position matches the position of any of the other player's ships, the attack is successful. both players mark a record of this attack on their board (target board for attacking player).

if an attack position does NOT match the position of the other player's ships, the attack is not succesful. the attacking player makes a mark of this attack on their target board.

if each square representing a given ship is successfully hit, the ship is destroyed.

game ends when all of either player's ships have been destroyed
