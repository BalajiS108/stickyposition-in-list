/**
 * const input = "aaaabbaaccccccccccccccccccde";

// Output
{
    character: 'c',
    count: 18
}
 */
const input = "aaaabbaaccc345678cccccccccc#$%^&*(cccccde";
let input1 = input.toLowerCase();
let obj1 = {};
let counter = 0;
for (let i = 0; i <= input1.length; i++) {
  if (input1.charCodeAt(i) >= 97 && input1.charCodeAt(i) <= 122)
    if (!obj1.hasOwnProperty(input1[i])) {
      obj1[input[i]] = 1;
    } else {
      obj1[input[i]] = obj1[input[i]] + 1;
    }
}
console.log(obj1);
let objkeys = Object.keys(obj1);
let objvalues = Object.values(obj1);
let str = "";
for (let i = 0; i < objkeys.length; i++) {
  str = str + objkeys[i] + "=" + objvalues[i] + " ";
}
console.log(str);

// --------------------------------
