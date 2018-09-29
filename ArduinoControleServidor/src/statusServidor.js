var five = require("johnny-five");
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/time");
var teste = 0;


exports.verificar = function(){

      photoresistor = new five.Sensor({
            pin: "A14",
            freq: 2000
          });
        
        photoresistor.on("data", function() {
              
            var value = parseInt(this.value/100);
           
            if ((teste != value) && (teste != value+1) && (teste != value-1) && (teste != value+2) && (teste != value-2) && (teste != value+3) && (teste != value-3)){
                teste = value;
    
                if(value >= 3){
                    firebase.database().ref('servidor/status').child( horarioCompleto.getKey() ).set({
                        status : 1,
                        horario : horarioCompleto.getHorario()
                    })
    
                    console.log( horarioCompleto.getHorario() + " - Servidor Ligado" );
                } else {
                    firebase.database().ref('servidor/status').child( horarioCompleto.getKey() ).set({
                        status : 0,
                        horario : horarioCompleto.getHorario()
                    })
    
                    console.log( horarioCompleto.getHorario() + " - Servidor Desligado" );
    
                }
            }
        });














      // status.on("close", function() {
      //       console.log( horarioCompleto.getHorario() + " - Servidor desligado" );
      //       firebase.database().ref('servidor').child('status').set({
      //             status : 0
      //       })

      //       firebase.database().ref('servidor').child('horarioDesligou').set({
      //             horario : horarioCompleto.getHorario()        
      //       })
      // });

      // status.on("open", function() {
      //       console.log( horarioCompleto.getHorario() + " - Servidor ligado" );
      //       firebase.database().ref('servidor').child('status').set({
      //             status : 1
      //       })

      //       firebase.database().ref('servidor').child('horarioLigou').set({
      //             horario : horarioCompleto.getHorario()
      //       })
      // });
}

