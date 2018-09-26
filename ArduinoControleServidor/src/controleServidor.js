var five = require("johnny-five"), relay;
var firebase = require("./util/firebaseConfig").firebase;
var horarioCompleto = require("./util/horarioCompleto");
var refStatusServidor = firebase.database().ref("servidor/status").child('status');
var refControleServidor = firebase.database().ref("servidor/controle");
var statusServidor = 3;

exports.iniciar = function(){

    relay = new five.Relay(39);

    refStatusServidor.orderByKey().on("value", function(snapshot) {
        if (snapshot.val() == 0) {
            statusServidor = false;
        } else {
            statusServidor = true;
        }
    });

    refControleServidor.orderByKey().on("child_changed", function(snapshot) {

        if (snapshot.val() == 1) {
            if(statusServidor){
                console.log( horarioCompleto.getHorario() + " - Desligando o servidor..." );
            }else{
                console.log( horarioCompleto.getHorario() + " - Ligando o servidor..." );
            }
            
            relay.on();
            setTimeout(function() {
                relay.off();
            }, 1000);

            firebase.database().ref('servidor').child('controle').set({
                controle : 3
            })
        }

        if (snapshot.val() == 6) {
            console.log( horarioCompleto.getHorario() + " - Forçando desligamento do servidor..." );
            relay.on();
            
            setTimeout(function() {
                relay.off();
            }, 6000);

            firebase.database().ref('servidor').child('controle').set({
                controle : 3
            })
        }
    });

   


}
