const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json")
const databaseURL = "https://qwizards-5b134.firebaseio.com"
firestoreService.initializeApp(serviceAccount,databaseURL);
firestoreService.restore("data.json")
