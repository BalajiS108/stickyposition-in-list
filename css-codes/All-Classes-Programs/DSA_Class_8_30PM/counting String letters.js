let str = "AAAABBAACDA"; //4A2B2A1C1D1A
let count = 1;
let str1 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count += 1;
  } else {
    str1 = str1 + count + str[i];
    count = 1;
  }
}
console.log(str1);
