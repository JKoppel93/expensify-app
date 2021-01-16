//
// Object Destructuring
//

// const person = {
//   name: "Jake",
//   age: 27,
//   location: {
//     city: "Spotswood",
//     temp: 32
//   }
// };
//
// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin"
//   }
// };
//
// const { name: publisherName = "Self-Published" } = book.publisher;
//
// console.log(publisherName);

//
// Array Destructuring
//

const address = ["123 Fake Street", "Manhattan", "New York", "90210"];
const [, city, state = "Pennsylvania"] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
