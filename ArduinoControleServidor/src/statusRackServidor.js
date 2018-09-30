var five = require("johnny-five");
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/time");

exports.verificar = function(){

      var sensorPorta = new five.Switch(4);
      
      sensorPorta.on("open", function() {
            console.log( horarioCompleto.getHorario() + " - Rack servidor fechado!" );

            firebase.database().ref('rackServidor').child('status').set({
                  status : 0
            })

            firebase.database().ref('rackServidor').child('horarioFechou').set({
                  horario : horarioCompleto.getHorario()        
            })
      });

      sensorPorta.on("close", function() {
            console.log( horarioCompleto.getHorario() + " - Rack servidor aberto" );

            firebase.database().ref('rackServidor').child('status').set({
                  status : 1
            })

            firebase.database().ref('rackServidor').child('horarioAbriu').set({
                  horario : horarioCompleto.getHorario()        
            })
      });
}

