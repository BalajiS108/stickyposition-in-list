// const findZeroPair = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     const firstElem = numbers[i];

//     for (let j = i + 1; j < numbers.length; j++) {
//       const secondElem = numbers[j];
//       const sum = firstElem + secondElem;

//       if (sum === 0) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// };

const findZeroPairV2 = (numbers) => {
  const register = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const toFindNumber =
      currentNum > 0 ? currentNum * -1 : Math.abs(currentNum);
    console.log(toFindNumber);

    if (register.hasOwnProperty(toFindNumber)) {
      return [i, register[toFindNumber]];
    }

    register[currentNum] = i;
    console.log(register);
  }
};

console.log(findZeroPairV2([1, 2, 3, 4, -1, 4, -1]));

// const r = {
//   1: 0,
//   2: 1,
//   3: 2,
//   4: 3,
//   "-1": 4,
//   4: 5,
//   "-1": 6,
// };
