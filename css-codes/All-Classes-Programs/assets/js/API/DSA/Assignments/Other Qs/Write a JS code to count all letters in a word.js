const fun = (word) => {
  const obj = {};
  for (let i = 0; i < word.length; i++) {
    if (!obj.hasOwnProperty(word[i])) {
      obj[word[i]] = 1;
    } else {
      obj[word[i]] += 1;
    }
  }
  let count = 0;
  let uniqueChars = Object.keys(obj);
  for (let i = 0; i < Object.keys(obj).length; i++) {
    count = count + 1;
    console.log("Unique chars=", uniqueChars[i]);
  }
  console.log("Total unique characters are:", count);
  let arrValues = Object.values(obj);
  let count1 = 0;
  for (let i = 0; i < Object.values(obj).length; i++) {
    count1 = count1 + arrValues[i];
    if (arrValues[i] === 2) {
      console.log("Non Unique chars=", Object.keys(obj)[i]);
    }
  }
  console.log("Totalcharacters are:", count1);

  console.log(obj);
};

fun("abcdefgabcd");

// var str = "Suggesting";
// var count = new Array(26);
// str = str.toLowerCase();
// for (var i = 0; i < str.length; i++) {
//   if (count[str.charCodeAt(i) - 97]) {
//     count[str.charCodeAt(i) - 97]++; // Increment count
//   } else {
//     count[str.charCodeAt(i) - 97] = 1; // Add entry
//   }
// }
// for (var i = 0; i < 26; i++) {
//   if (count[i]) {
//     console.log(`Character ${i + "a"} has occured ${count[i]} number of times`);
//   }
// }
