// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// it will gives aan ERROR because we are declaring a constant decimalnumber inside the function and
//  its already declared in the function as its parameter.the same identifier cannot be declared again .

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

//I removed the constant decimalNumber bcz it's already exist as a parameter of function.
// then i call the function in the consol.log with the argument 0.5.
// after this it will return the value of 0.5 to convertTOpercentage.
// after it multiplies it with 100 and add the % sign.
// the answer will be 50%


// // Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));