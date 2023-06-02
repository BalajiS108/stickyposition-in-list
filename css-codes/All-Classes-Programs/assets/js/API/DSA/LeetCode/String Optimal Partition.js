var partitionString = function (s) {
  let newSet = new Set();
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (newSet.has(s[i])) {
      count = count + 1;

      console.log(newSet);
      newSet = new Set();
      newSet.add(s[i]);
    } else {
      newSet.add(s[i]);
    }
  }
  return count;
};
console.log(partitionString("abacaba"));
