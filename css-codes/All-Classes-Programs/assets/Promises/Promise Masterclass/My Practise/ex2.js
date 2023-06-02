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
    }, 2000);
  });
}

async function fun() {
  try {
    const doubleNumber1 = await doubleNumber(100);
    console.log("doubled output=", doubleNumber1);
    const trippledNumber1 = await tripleNumber(1000);
    console.log("trippled output=", trippledNumber1);
  } catch (err) {
    console.log("error is=", err);
  }
}
fun();
