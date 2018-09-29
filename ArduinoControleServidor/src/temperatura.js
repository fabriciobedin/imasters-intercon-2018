var five = require("johnny-five");
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/time");
var teste = 0;

exports.verificar = function(){
    var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 13,
        freq: 5000
    });

    thermometer.on("change", function() {
        var value = parseInt(this.celsius);
        
        if (teste != value){
            teste = value;

            firebase.database().ref('temperatura').child('temperatura').set({
                celsius : value
            })

            firebase.database().ref('temperatura').child('horario').set({
                horario : horarioCompleto.getHorario()
            })

            console.log( horarioCompleto.getHorario() + " - Temperatura: " + value + "°C" );
        }
    });
}