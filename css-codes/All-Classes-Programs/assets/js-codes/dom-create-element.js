// console.log("Hello");

const name = ["rahul", "ankit", "sahil", "mitesh"];

for (let i = 0; i < 4; i++) {
  var newDiv = document.createElement("div");
  //Add class
  newDiv.className = "hello";

  //Add id
  newDiv.id = "hello 1";

  //Add Attribute
  newDiv.setAttribute("title", "hello div");

  //create text node
  var newDivText = document.createTextNode(name[i]);

  //add text to div
  newDiv.appendChild(newDivText);

  var container = document.querySelector("header .container");
  var h1 = document.querySelector("header h1");
  container.insertBefore(newDiv, h1);
  newDiv.style.fontSize = "30px";
}
