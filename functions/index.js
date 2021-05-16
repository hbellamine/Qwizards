// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const app = require("express")();

// admin.initializeApp();
// const config = {
//     apiKey: "AIzaSyB91ShPu9QyJ7uVcRnbmdCtrfk7HC-Zd0E",
//     authDomain: "qwizards-5b134.firebaseapp.com",
//     databaseURL: "https://qwizards-5b134.firebaseio.com",
//     projectId: "qwizards-5b134",
//     storageBucket: "qwizards-5b134.appspot.com",
//     messagingSenderId: "239116512188",
//     appId: "1:239116512188:web:502016d7383894d2c259b9",
//     measurementId: "G-GKTG27JRBF"
// };

// const firebase = require("firebase");
// firebase.initializeApp(config);

// const db = admin.firestore();

// app.get("/getbooks", (req, res) => {
//   db.collection("bookslist")
//     .get()
//     .then((data) => {
//       let books = [];
//       data.forEach((doc) => {
//         books.push(doc.data());
//       });
//       return res.json(books);
//     })
//     .catch((err) => console.error(err));
// });

// exports.api = functions.https.onRequest(app);
