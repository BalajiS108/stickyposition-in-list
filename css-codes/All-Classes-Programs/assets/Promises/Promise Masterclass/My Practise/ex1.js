function tripleNumber(num1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(num1)) {
        reject(`${num1} is not a number`);
      } else {
        resolve(num1 * 3);
      }
    }, 2000);
  });
}

function doubleNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(num)) {
        reject(`${num} is not a number`);
      } else {
        resolve(num * 2);
      }
    }, 5000);
  });
}
doubleNumber("25")
  .then((result) => {
    console.log(" doubled no is=", result);
    return tripleNumber(10);
  })
  .then((result) => console.log("trippled no is", result))
  .catch((err) => console.log(err));
