const minimum = 1;
const maximum = 100;



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
console.log(num)
// Math.random() is used when you want JavaScript to pick a random number for you.
// calculates how many whole numbers
// are in the range, including both the minimum and maximum.
//  Math.floor() rounds down to a whole number.
// Without +1, the maximum number will not be included.
