const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// const penceString = "399p";
// 1. Stores the price as a string.

// 2.Removes the letter "p" from the end.
// const penceStringWithoutTrailingP = penceString.substring(
  // 0,
  // penceString.length - 1
// );

// 3.Adds zeros at the beginning if needed.
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4.Gets the pounds part of the price.
// const pounds = paddedPenceNumberString.substring(
  // 0,
  // paddedPenceNumberString.length - 2
// );

// 5.Gets the pence part and adds a zero at the end if needed.
// const pence = paddedPenceNumberString
  // .substring(paddedPenceNumberString.length - 2)
  // .padEnd(2, "0");

// 6.Prints the price in pounds and pence.
// console.log(`£${pounds}.${pence}`);

