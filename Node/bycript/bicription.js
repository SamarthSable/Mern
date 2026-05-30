import bcrypt from "bcrypt";
let pass = "Pass@123";

let hashedPass = await bcrypt.hash(pass, 10);
console.log(hashedPass);

let isMatch = await bcrypt.compare(pass, hashedPass);

console.log(isMatch);
