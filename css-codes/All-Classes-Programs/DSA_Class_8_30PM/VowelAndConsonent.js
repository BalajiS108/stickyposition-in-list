const checkCharacter = (input) => {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  return !vowels.hasOwnProperty(input) ? "Consonant" : "Vowel";
  //return !(input in vowels) ? "Consonant" : "Vowel";
};

checkCharacter("a");
