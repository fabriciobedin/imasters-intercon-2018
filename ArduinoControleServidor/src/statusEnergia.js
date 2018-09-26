var five = require("johnny-five"), photoresistor;
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/horarioCompleto");
var teste = 0;

exports.verificar = function(){

    photoresistor = new five.Sensor({
        pin: "A15",
        freq: 2000
      });
    
    photoresistor.on("data", function() {
        var value = parseInt(this.value/100);
       
        if ((teste != value) && (teste != value+1) && (teste != value-1) && (teste != value+2) && (teste != value-2) && (teste != value+3) && (teste != value-3)){
            teste = value;

            if(value >= 3){
                firebase.database().ref('sensorEnergia').set({
                    luz : true
                })
                console.log( horarioCompleto.getHorario() + " - Energia OK!" );
            } else {
                firebase.database().ref('sensorEnergia').set({
                    luz : false
                })
                console.log( horarioCompleto.getHorario() + " - Sem energia!" );

            }
        }
    });
}