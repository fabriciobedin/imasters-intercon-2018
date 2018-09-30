require("./src/util/firebaseConfig");
var five = require("johnny-five");
var statusRackServidor = require("./src/statusRackServidor");
var statusEnergia = require("./src/statusEnergia");
var controleServidor = require("./src/controleServidor");
var controleCoolers = require("./src/controleCoolers");
var statusServidor = require("./src/statusServidor");
var temperatura = require("./src/temperatura");


five.Board().on("ready", function() {

      console.log("Carregando módulos...");
      
      statusRackServidor.verificar();
      statusEnergia.verificar();
      statusServidor.verificar();
      controleServidor.iniciar();
      controleCoolers.iniciar();
      temperatura.verificar();

      console.log("----------------------------------------------");
});
