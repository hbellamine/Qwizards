import firebase from 'firebase'
import 'firebase/storage'
import "firebase/auth";

const config = firebase.initializeApp({
    "projectId": "qwizards-5b134",
    "appId": "1:239116512188:web:422a2d1646cb8739c259b9",
    "databaseURL": "https://qwizards-5b134.firebaseio.com",
    "storageBucket": "qwizards-5b134.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyB91ShPu9QyJ7uVcRnbmdCtrfk7HC-Zd0E",
    "authDomain": "qwizards-5b134.firebaseapp.com",
    "messagingSenderId": "239116512188",
    "measurementId": "G-7E8JBMS5ND"
  });

export default firebase;