// business logic:

function Player(mark) {
  this.mark = mark;
}

function Board(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
}

function Game() {
  this.gameOver = false;
  this.xTurn = true;
}



Player.prototype.markAs = function() {
  return this.mark;
}


//user interface:

$(document).ready(function() {

var playerX = new Player("X");
var playerY = new Player("O");
var finishedArray = [null, null, null, null, null, null, null, null, null];
var Variable = playerX.markAs();
var newGame = new Game();

  $("#x0y0").click(function(event) {
    event.preventDefault();
    $("#x0y0").append("<h2>" + Variable + "</h2>");
    var whosTurn = newGame.xTurn;
    whosTurn = !whosTurn;
    console.log(whosTurn);
  });

});
