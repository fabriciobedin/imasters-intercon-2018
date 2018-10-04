const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.alertRackOpen = functions.database.ref('/rackServidor/photo/status')
    .onUpdate((change, context) => {
      var newState = ""+change.after.val();
      admin.database().ref('/smartphones').once('value').then(
            function(snapshot) {
              var tokens = snapshot.val();
              if(tokens){
                  var currentToken;
                  for(var key in tokens){
                    
                    currentToken = tokens[key]
                    var message = {
                      data: {
                        rack: newState
                      },
                      token: currentToken
                    };
                    console.log(currentToken);
                    admin.messaging().send(message)
                    .catch(error => {
                      console.log(error);
                    });
                  }
              }
              return change.after.ref.set(0);
            })
            .catch(error => {
              console.log(error);              
            });

            return change.after.ref.set(0);
      });


exports.alertChangeEnergy = functions.database.ref('/sensorEnergia/status/status')
    .onUpdate((change, context) => {
      var newState = ""+change.after.val();
      admin.database().ref('/smartphones').once('value').then(
            function(snapshot) {
              var tokens = snapshot.val();
              if(tokens){
                  var currentToken;
                  for(var key in tokens){
                    
                    currentToken = tokens[key]
                    var message = {
                      data: {
                        state: newState
                      },
                      token: currentToken
                    };
                    console.log(currentToken);
                    admin.messaging().send(message)
                    .catch(error => {
                      console.log(error);
                    });
                  }
              }
              return change.after.ref.set(parseInt(change.after.val()));
            })
            .catch(error => {
              console.log(error);              
            });

            return change.after.ref.set(parseInt(change.after.val()));
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
