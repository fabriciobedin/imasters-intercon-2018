require("./src/firebase");
var five = require("johnny-five");

var statusPortaRack = require("./src/statusPortaRack");
var statusEnergia = require("./src/statusEnergia");


five.Board().on("ready", function() {

      statusPortaRack.executar();

      statusEnergia.executar();

});
