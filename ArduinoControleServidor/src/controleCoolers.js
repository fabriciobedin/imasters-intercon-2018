var five = require("johnny-five"), relay;
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/horarioCompleto").getHorario();

exports.iniciar = function(){

    relay = new five.Relay(41);
    var ref = firebase.database().ref("bancoCoolers/controle");

    ref.orderByKey().on("child_changed", function(snapshot) {

        if (snapshot.val() == 1) {
            relay.on();
            console.log( horarioCompleto + " - Banco de coolers ligado!" );
        }

        if (snapshot.val() == 0) {
            relay.off();
            console.log( horarioCompleto + " - Banco de coolers desligado!" );

        }
    });
}
