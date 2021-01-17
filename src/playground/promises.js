const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Jake",
    //   age: 27,
    // });
    reject("Something went wrong");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

console.log("after");
