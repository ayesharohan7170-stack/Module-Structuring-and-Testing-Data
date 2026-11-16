// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// because it's parameter is missing.so number is gonna always be 103 so we
// have to gave num to parameter

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// This means that even if we  we call getLastDigit(42), getLastDigit(105) or getLastDigit(806),
//  the function ignores those arguments and always uses 103.
// That's why the result is always 3.
// because no parameter is given to the function getLastDigit
// Finally, correct the code to fix the problem
// =============> write your new code 

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// we are giving an argument without it's parameter so the number will always be 103.
// then we changed it to and give it a argument num that return the value . 
// When we call the function with different numbers, the parameter receives each number.
// Then .toString() changes the number into text, and .slice(-1) gets the last digit.
