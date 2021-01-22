// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Jake",
      age: 27,
    });
    // reject("Something went wrong");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 1500);
    });
  })
  .then((str) => {
    console.log("does this run?", str);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

console.log("after");
