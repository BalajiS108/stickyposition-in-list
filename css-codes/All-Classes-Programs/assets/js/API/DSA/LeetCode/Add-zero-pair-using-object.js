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
    // const currentNum = numbers[i];
    const toFindNumber =
      numbers[i] > 0 ? numbers[i] * -1 : Math.abs(numbers[i]);

    if (register.hasOwnProperty(toFindNumber)) {
      return [i, register[toFindNumber]];
    } else {
      register[numbers[i]] = i;
    }
  }
};

console.log(findZeroPairV2([1, 2, 3, 4, 1, 4, -1]));
