"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// • Tests for equality and inequality with strings
let country = 'Pakistan';
console.log("Is country === 'Pakistan'? I predict True.");
console.log(country === 'Pakistan');
console.log("Is country !== 'Pakistan'? I predict false`.");
console.log(country !== 'Pakistan');
// • Tests using the lower case function
let lowerCase = country.toLowerCase();
console.log("Is country === 'Pakistan'? I predict false.");
console.log(country === lowerCase);
// • Numerical tests involving equality and inequality. 
let num = 10;
console.log("Is num equal to 10? I predict true.");
console.log(num === 10);
console.log("Is num not equal 10? I predict false.");
console.log(num != 10);
// greater than and less than.
console.log("Is num greater than 9? I predict true.");
console.log(num > 9);
console.log("Is num less than 0? I predict false.");
console.log(num < 0);
// greater than or equal to.
console.log("Is num greater than or equal to 9? I predict true.");
console.log(num >= 9);
// less than or equal to
console.log(" is num  less than or equal to 8? I predict false");
console.log(num <= 8);
// • Tests using "and" and "or" operators
console.log("is num equal to 10 and less than 99? I predict true");
console.log(num === 10 && num < 99);
console.log("is num either not equal to 10 or greater than 56? I predict false");
console.log(num != 10 || num > 56);
// • Test whether an item is in an array.
let arr = ["Imran Khan", "chairman", "skipper", "AQ Khan"];
console.log("is word Imran Khan in an array? I predict true");
console.log(arr[0] === "Imran Khan");
console.log("is word Imran Khan not in an array? I predict false");
console.log(arr[0] != "Imran Khan");
