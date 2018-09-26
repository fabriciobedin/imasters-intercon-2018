var five = require("johnny-five");
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/horarioCompleto");
var teste = 0;

exports.verificar = function(){
    var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 2
    });

    thermometer.on("change", function() {
        var value = parseInt(this.celsius);
        
        if ((teste != value) && (teste != value+1) && (teste != value-1)){
            teste = value;

            firebase.database().ref('temperatura').set({
                temperatura : value
            })

            console.log( value + "°C" );
        }
    });
}