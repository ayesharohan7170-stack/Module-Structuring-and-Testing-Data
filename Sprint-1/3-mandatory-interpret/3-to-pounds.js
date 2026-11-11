const penceString = "399p";

// 1. Remove the letter "p" from the end. by using .substring
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 2. Add zeros at the beginning if needed.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 3. Get the pounds part by removing the last two digits.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 4. Get the remaining pence (last two digits).
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 5. Print the final price.
console.log(`£${pounds}.${pence}`);

// Output: £3.99

// The program first removes the letter "p".
// Then padStart() adds zeros at the beginning if needed.
// substring() separates the pounds from the remaining pence.
// padEnd() adds a zero at the end if needed.
// Finally, console.log() prints the price in pounds and pence.
