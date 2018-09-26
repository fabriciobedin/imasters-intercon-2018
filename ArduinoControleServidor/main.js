require("./src/firebase");
var five = require("johnny-five");
var statusPortaRack = require("./src/statusPortaRack");
var statusEnergia = require("./src/statusEnergia");
var ligaDesligaServidor = require("./src/ligaDesligaServidor");
var ligaDesligaCoolers = require("./src/ligaDesligaCoolers");

five.Board().on("ready", function() {
      statusPortaRack.executar();
      statusEnergia.executar();
      ligaDesligaServidor.executar();
      ligaDesligaCoolers.executar();
});
