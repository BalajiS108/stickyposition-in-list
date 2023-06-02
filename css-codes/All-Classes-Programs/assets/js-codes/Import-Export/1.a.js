import { userName, userCountry, getMessage } from "../Import-Export/2.b.js";
import { cityName } from "../Import-Export/3.c.js";
import { userName as seconduserName } from "../Import-Export/3.c.js";
import * as userDetails from "../Import-Export/4.d.js";

console.log("Hello ", userName, userCountry, cityName, seconduserName);

console.log(getMessage("Roopesh"));
console.log(getMessage("Roopesh 1"));
console.log(getMessage("Roopesh 2"));
console.log(getMessage("Roopesh 3"));
console.log(userDetails.add(1, 2, 3));
