import React, { Fragment } from 'react'



// function setup() {
//     createCanvas(710,400);
//     noFill();
//     mic = new p5.AudioIn();
//     mic.start();
//     fft = new p5.FFT();
//     fft.setInput(mic);
// }

// function draw() {
//     background(200);
//     var spectrum = fft.analyze();
//     beginShape();
//     for (i = 0; i<spectrum.length; i++) {
//     if (spectrum[i] > 250){
//         console.log(i);
//         if (i == 17){
//         firebase.database().ref().set({
//             nota: "Nota Do "
//         });
//         } else if (i == 18) {
//         firebase.database().ref().set({
//             nota: "Nota Re "
//         });
//         }  else if (i == 21) {
//         firebase.database().ref().set({
//             nota: "Nota Mi "
//         });
//         } else if (i == 24) {
//         firebase.database().ref().set({
//             nota: "Nota Fa "
//         });
//         } else if (i == 26) {
//         firebase.database().ref().set({
//             nota: "Nota Sol"
//         });
//         } else if (i == 28) {
//         firebase.database().ref().set({
//             nota: "Nota La "
//         });
//         } else if (i == 30) {
//         firebase.database().ref().set({
//             nota: "Nota Si "
//         });
//         }
//     }
//     vertex(i, map(spectrum[i], 0, 255, height, 0) );
//     }
//     endShape();
// }

export const Ocarina = () => (
    
        <Fragment>
        <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
        <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.sound.min.js"></script>
        <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
        <div style={{backgroundColor: "#ffffff", width: "98.5%" ,  height: "50%"}}>
           <h2>Ocarina</h2>


           {/* {setup}
           {draw}
           {new p5()}
  */}
            {/* <canvas id="defaultCanvas0" width="1420" height="800" style="width: 710px; height: 400px;"></canvas> */}
            </div>
        </Fragment>
        
    )




