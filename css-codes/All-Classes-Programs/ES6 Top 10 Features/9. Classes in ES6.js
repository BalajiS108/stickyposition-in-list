//We can create class in ES6 using “class” keyword.
//Classes creation and usage in ES5 was a pain in the rear,
// because there wasn’t a keyword class.

class Profile {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  getData() {
    console.log("First Name=", this.fName);
    console.log("Last Name=", this.lName);
  }
}
let ProfileObj = new Profile("Balaji", "Sawant");
ProfileObj.getData();
