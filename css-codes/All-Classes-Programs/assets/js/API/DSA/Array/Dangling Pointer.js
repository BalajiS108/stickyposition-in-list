let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1 = [4, 5, 6];

console.log(arr1); // prints [4, 5, 6]
console.log(arr2); // prints [1, 2, 3]

//arr1 & arr2 have same reference but two different values hence arr2 is
//dangling pointer here

let arr3 = arr2.slice(1, 2);
console.log(arr3);
