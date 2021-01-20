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

database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   database
//     .ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val(),
//         });
//       });
//       console.log(expenses);
//     });
// });
