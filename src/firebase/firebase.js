import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeA6GguZx-SLfVrvXGG8d-EJwoqBCn290",
  authDomain: "expensify-aaec5.firebaseapp.com",
  databaseURL: "https://expensify-aaec5-default-rtdb.firebaseio.com",
  projectId: "expensify-aaec5",
  storageBucket: "expensify-aaec5.appspot.com",
  messagingSenderId: "412883875658",
  appId: "1:412883875658:web:7c7fdcfdadfc46178fb3b3",
  measurementId: "G-KSVXGHWS2B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: "Jacob Koppel",
  age: 27,
  isSingle: true,
  location: {
    city: "Spotswood",
    country: "United States",
  },
  //   attributes: {
  //     height: "5'9",
  //     weight: 185,
  //   },
});

// database.ref().set("This is my data");

database.ref("age").set(28);
database.ref("location/city").set("New York City");
database.ref("attributes").set({
  height: "5'9",
  weight: 184,
});
