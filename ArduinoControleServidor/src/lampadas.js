var five = require("johnny-five"), relay1, relay2, relay3, relay4, relay5, relay6, relay7;
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/time");

exports.iniciar = function(){

    relay1 = new five.Relay(4);
    relay2 = new five.Relay(5);
    relay3 = new five.Relay(6);
    relay4 = new five.Relay(7);
    relay5 = new five.Relay(8);
    relay6 = new five.Relay(9);
    relay7 = new five.Relay(10);
    
    var lamp1 = firebase.database().ref("lampadas/lamp1").child('controle');
    var lamp2 = firebase.database().ref("lampadas/lamp2").child('controle');
    var lamp3 = firebase.database().ref("lampadas/lamp3").child('controle');
    var lamp4 = firebase.database().ref("lampadas/lamp4").child('controle');
    var lamp5 = firebase.database().ref("lampadas/lamp5").child('controle');
    var lamp6 = firebase.database().ref("lampadas/lamp6").child('controle');
    var lamp7 = firebase.database().ref("lampadas/lamp7").child('controle');


    lamp1.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay1.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 1 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay1.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 1 desligada!" );
        }
    });

    lamp2.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay2.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 2 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay2.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 2 desligada!" );
        }
    });

    lamp3.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay3.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 3 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay3.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 3 desligada!" );
        }
    });

    lamp4.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay4.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 4 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay4.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 4 desligada!" );
        }
    });

    lamp5.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay5.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 5 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay5.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 5 desligada!" );
        }
    });

    lamp6.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay6.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 6 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay6.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 6 desligada!" );
        }
    });

    lamp7.on("value", function(snapshot) {

        if (snapshot.val() == 1) {
            relay7.on();
            console.log( horarioCompleto.getHorario() + " - Lampada 7 ligada!" );
        }

        if (snapshot.val() == 0) {
            relay7.off();
            console.log( horarioCompleto.getHorario() + " - Lampada 7 desligada!" );
        }
    });
}
