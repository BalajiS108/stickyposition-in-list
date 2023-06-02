// import { firstName, lastName, cityName } from "./data.js";
import* as data from "../Practice/data.js"
import { add } from "../Practice/addition.js";
import { subtraction } from "../Practice/subtraction.js";
console.log(`Welcome ${data.firstName} ${data.lastName} to ${data.cityName}`);
console.log("Addition is:", add(10, 2));
console.log("Subtraction is:", subtraction(10, 2));
