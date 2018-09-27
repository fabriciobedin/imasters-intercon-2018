var five = require("johnny-five");
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/horarioCompleto");

exports.verificar = function(){

      var status = new five.Switch(23);
      status.on("close", function() {
            console.log( horarioCompleto.getHorario() + " - Servidor desligado" );
            firebase.database().ref('servidor').child('status').set({
                  status : 0
            })

            firebase.database().ref('servidor').child('horarioDesligou').set({
                  horario : horarioCompleto.getHorario()        
            })
      });

      status.on("open", function() {
            console.log( horarioCompleto.getHorario() + " - Servidor ligado" );
            firebase.database().ref('servidor').child('status').set({
                  status : 1
            })

            firebase.database().ref('servidor').child('horarioLigou').set({
                  horario : horarioCompleto.getHorario()
            })
      });
}

