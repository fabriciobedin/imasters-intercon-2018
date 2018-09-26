var five = require("johnny-five");
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/horarioCompleto");

exports.verificar = function(){

      var sensorPorta = new five.Switch(4);
      
      sensorPorta.on("open", function() {
            console.log( horarioCompleto.getHorario() + " - Fechou rack servidor" );

            firebase.database().ref('rackServidor').child('status').set({
                  status : 0
            })

            firebase.database().ref('rackServidor').child('horarioFechou').set({
                  horario : horarioCompleto.getHorario()        
            })
      });

      sensorPorta.on("close", function() {
            console.log( horarioCompleto.getHorario() + " - Abriu rack servidor" );

            firebase.database().ref('rackServidor').child('status').set({
                  status : 1
            })

            firebase.database().ref('rackServidor').child('horarioAbriu').set({
                  horario : horarioCompleto.getHorario()        
            })
      });
}

