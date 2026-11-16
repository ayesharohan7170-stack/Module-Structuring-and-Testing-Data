// Predict and explain first...

// =============> write your prediction here
// The code loooks good to me except one thing we write console.log inside and outside the function.
// the function is not returning any value it just print it that's why it display undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// it's multiplying the value of a and b that give us 320 and then it print it.
// it means it's not storing any in the function.and the result say undefined.
// so we created a return statement that returns the value backto function so 
// we can use it somewhere.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
