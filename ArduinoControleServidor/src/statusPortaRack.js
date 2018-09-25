var five = require("johnny-five");
var firebase = require("./firebase").firebase;

exports.verificar = function(){
      var sensorPorta = new five.Button({
            pin: 4, 
            invert: true
      });

      sensorPorta.on("press", function() {

            var horarioCompleto = gerarLogData();
      
            console.log( horarioCompleto + " - Abriu Porta Rack" );
            firebase.database().ref('sensorPortaRack').set({
                  status : 1,
                  horarioAbriu : horarioCompleto
            })

            // firebase.database().ref('horarioPortaRackAbriu').set({
            //       horario : horarioCompleto
            // })
      });

      sensorPorta.on("release", function() {

            var horarioCompleto = gerarLogData();

            console.log( horarioCompleto + " - Fechou Porta Rack" );
            firebase.database().ref('sensorPortaRack').set({
                  status : 0,
                  horarioFechou : horarioCompleto  
            })

            // firebase.database().ref('horarioPortaRackFechou').set({
            //       horario : horarioCompleto        
            // })
      });

}

function gerarLogData(){
      var data = new Date();

      var dia = 0;
      (parseInt(data.getDate()) < 10) ? (dia = ("0" + data.getDate())) : (dia = data.getDate());

      var mes = 0;
      (parseInt(data.getMonth()) < 9) ? (mes = ("0" + (data.getMonth()+1))) : (mes = data.getMonth()+1);

      var horas = 0;
      (parseInt(data.getHours()) < 10) ? (horas = ("0" + data.getHours())) : (horas = data.getHours());

      var minutos = 0;
      (parseInt(data.getMinutes()) < 10) ? (minutos = ("0" + data.getMinutes())) : (minutos = data.getMinutes());

      var segundos = 0;
      (parseInt(data.getSeconds()) < 10) ? (segundos = ("0" + data.getSeconds())) : (segundos = data.getSeconds());

      return(dia + "/" + mes +"/"+ data.getFullYear() + " - " + horas + ":" + minutos + ":" + segundos);
}