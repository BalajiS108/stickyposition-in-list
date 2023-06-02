const obj = [
  {
    fName: "Balaji",
    lName: "sawant",
    id: 1,
  },
  {
    fName: "Nikhil",
    lName: "Vaidya",
    id: 2,
  },
  {
    fName: "abc",
    lName: "xyz",
    id: 3,
  },
];
for (let i = 0; i < obj.length; i++) {
  const { fName, lName, id } = obj[i];
  console.log(fName, lName, id);
}
