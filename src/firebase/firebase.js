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

const onValueChange = database.ref().on(
  "value",
  (snapshot) => {
    const val = snapshot.val();
    console.log(val.name, "is a", val.job.title, "at", val.job.company);
  },
  (e) => {
    console.log("Error with data fetching", e);
  }
);

setTimeout(() => {
  database.ref().update({
    name: "Jake",
    "job/title": "Developer",
    "job/company": "Google",
  });
}, 3500);

setTimeout(() => {
  database.ref().off("value", onValueChange);
}, 7000);

setTimeout(() => {
  database.ref().update({
    name: "Jake Koppel",
    "job/title": "Dev",
    "job/company": "Facebook",
  });
}, 10500);

// database
//   .ref("location/country")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Jacob Koppel",
//     age: 27,
//     stressLevel: 6,
//     job: {
//       title: "Web Developer",
//       company: "Freelance",
//     },
//     location: {
//       city: "Spotswood",
//       country: "United States",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded");
//   })
//   .catch((e) => {
//     console.log("Did not remove data", e);
//   });
