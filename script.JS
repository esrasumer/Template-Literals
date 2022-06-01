//Tempalte Literals

const fullName = 'Sena Turan';
const city = 'izmir';
const yearOfBrith = 1999;

let val;

val = 'My name is ' + fullName + ' I\'m ' + (2022 - yearOfBrith) + ' years old. And I live in ' + city;

val = `my name is ${fullName} I'm ${2022 - yearOfBrith} years old and I live in ${city} .`;

// ternary operator

val = `my name is ${fullName} I'm ${(2022 - yearOfBrith>=18)?'over 18' : 'under 18'} years old and I live in ${city} .`;

console.log(val);