var five = require("johnny-five"), photoresistor;
var firebase = require("./firebase").firebase;

exports.executar = function(){

    photoresistor = new five.Sensor({
        pin: "A15",
        freq: 1000
      });
    
      photoresistor.on("data", function() {
        if(this.value > 600){
            firebase.database().ref('sensorEnergia').set({
                luz : false
            })
            console.log("Sem Energia!");
        } else{
            firebase.database().ref('sensorEnergia').set({
                luz : true
            })
        }
      });
}