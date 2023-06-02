//Promises are used for asynchronous execution.
//In ES6, we can use promise with arrow function shown below.

function fun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello Balaji");
    }, 3000);
  });
}
fun().then((x) => {
  console.log(x);
});

//In ES5, we need to use setTimeout().
setTimeout(function () {
  console.log("Yay!");
}, 1000);
