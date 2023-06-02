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

async function performOperations() {
  try {
    const doubledNumber = await doubleNumber("25");
    console.log("Doubled number:", doubledNumber);

    const tripledNumber = await tripleNumber(10);
    console.log("Tripled number:", tripledNumber);
  } catch (error) {
    console.log(error);
  }
}

performOperations();
