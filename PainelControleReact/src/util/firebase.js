import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDIuJ1xQAizRbG0i7OgrEYf7VAw_9UWtDk",
    authDomain: "intercon-c43d2.firebaseapp.com",
    databaseURL: "https://intercon-c43d2.firebaseio.com",
    projectId: "intercon-c43d2",
    storageBucket: "intercon-c43d2.appspot.com",
    messagingSenderId: "921263850776"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();