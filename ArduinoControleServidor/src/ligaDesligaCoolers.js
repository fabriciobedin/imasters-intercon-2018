var five = require("johnny-five"), relay;
var firebase = require("./firebase").firebase;

exports.executar = function(){

    relay = new five.Relay(41);
    var ref = firebase.database().ref("ligaDesligaCoolers");

    ref.orderByKey().on("child_changed", function(snapshot) {

        if (snapshot.val() == 1) {
            relay.on();
        }

        if (snapshot.val() == 0) {
            relay.off();
        }
    });
}
