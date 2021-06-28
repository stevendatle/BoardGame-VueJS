class Game {
  constructor() {
    this.inProgress = true;
    this.winner = null; // O or X
    this.currentTurn = Game.O; //O will always start first
    this.movesMade = 0;
    this.squares = new Array(9).fill().map((s) => new Square()); //this will make 9 new empty square objects in our game
  }
}

Game.O = "O";
Game.X = "X";
