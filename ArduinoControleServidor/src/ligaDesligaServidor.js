var five = require("johnny-five"), relay;
var firebase = require("./firebase").firebase;

exports.executar = function(){

    relay = new five.Relay(39);
    var ref = firebase.database().ref("ligaDesligaServidor");

    ref.orderByKey().on("child_changed", function(snapshot) {

        if (snapshot.val() == 1) {
            relay.on();
            setTimeout(function() {
                relay.off();
            }, 1000);
        }

        if (snapshot.val() == 7) {
            relay.on();
            setTimeout(function() {
                relay.off();
            }, 7000);
        }
    });
}
