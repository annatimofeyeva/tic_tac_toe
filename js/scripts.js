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
var playerO = new Player("O");
var xCell = playerX.mark;
var oCell = playerO.mark;
//var finishedArray = [null, null, null, null, null, null, null, null, null];
var newGame = new Game();
var whosTurn = newGame.xTurn;

// A CELL:
  $("#x0y0").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x0y0").append("<h2>" + xCell + "</h2>");
    whosTurn = false;
  } else {
    $("#x0y0").append("<h2>" + oCell + "</h2>");
    whosTurn = true;
  };
  });
// B CELL:
  $("#x1y0").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x1y0").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x1y0").append("<h2>" + oCell + "</h2>");
  };
      whosTurn = !whosTurn;
  });
// C CELL:
  $("#x2y0").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x2y0").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x2y0").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });
// D CELL:
  $("#x0y1").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x0y1").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x0y1").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });
// E CELL:
  $("#x1y1").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x1y1").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x1y1").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });
// F CELL:
  $("#x2y1").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x2y1").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x2y1").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });
// G CELL:
  $("#x0y2").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x0y2").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x0y2").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });
// H CELL:
  $("#x1y2").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x1y2").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x1y2").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });
// I CELL:
  $("#x2y2").click(function(event) {
    event.preventDefault();
    if (whosTurn === true) {
    $("#x2y2").append("<h2>" + xCell + "</h2>");
  } else {
    $("#x2y2").append("<h2>" + oCell + "</h2>");
  };
    whosTurn = !whosTurn;
  });

});
