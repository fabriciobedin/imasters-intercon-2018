const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// See documentation on defining a message payload.
var payload = {
  data: {
    value: 1
  }
};

exports.alertChangeEnergy = 
  functions.database.ref('/sensorEnergia/status/status')
    .onUpdate((snapshot, context) => {
      var newState = snapshot.val();
      payload.data.value = newState;

      admin.database().ref('/smartphones').once('value').then(
            function(snapshot) {
              var tokens = snapshot.val();
              if(tokens){
                  var currentToken;
                  var data = [];
                  for(var key in tokens){
                    currentToken = tokens[key]
                    admin.messaging().sendToDevice(currentToken, payload)
                    .then(success => {
                        return;
                    })
                    .catch(error => {
                        return;
                    });
                  }
              }
            });

      return;
    });

exports.stopAlarm = functions.https.onRequest((request, response) => {
  admin.database().ref('/token').once('value').then(
      function(snapshot) {
        var registrationToken = snapshot.val();

        admin.messaging().sendToDevice(registrationToken, payload)
        .then(success => {
            response.send("{'sucess': true}");
            return;
        })
        .catch(error => {
            response.send("{'sucess': false}");
            return;
        });

        return;
      }
  ).catch(error => {
            response.send("{'sucess': false}");
            return;
        });
  
});
