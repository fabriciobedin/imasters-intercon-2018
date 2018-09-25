require("./src/firebase");
var five = require("johnny-five");
var board = new five.Board();

var statusPortaRack = require("./src/statusPortaRack");


board.on("ready", function() {

      statusPortaRack.verificar();

  
});
