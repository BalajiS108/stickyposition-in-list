/**
 * @ description:-Optimal Partition of String
 * Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
 * It can be shown that 4 is the minimum number of substrings needed.
 *
 * Algorithm:
 * take input as string,also take one blank string & blank array
 * take for loop for iterating over string
 * push each letter into blank string till its not already there
 * if it is present then add the previous string into array as one element
 * & the calculate the array length & return same.
 */

function optimalStringPartition(s) {
  //   console.log(s);
  let str = "";
  let result = "";
  let obj = {};
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (!obj.hasOwnProperty(s[i])) {
      str = str + s[i]; //ab
      obj[s[i]] = 1;
    } else {
      obj[s[i]] += 1;
      counter += 1;
      result = result + " " + str;
      str = "";
      str = str + s[i];
    }
  }

  console.log(counter);
  console.log(result);
  console.log(obj);
}

optimalStringPartition("sss");
