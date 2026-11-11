const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// six
// b) How many function calls are there?
// Console.log is the only function call in the above code.


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It takes mode of movielenght with 60 .and the result is 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? 
// It's subtracting the remainingSeconds from movielength and dividing it with 60 to get the totalHours.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// I think time_Left or remaining_Time is the better names for this variable .it dispalys the
// totalHours,remainingMinutes,remainingSeconds means it displays the remaining_time.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// const movieLength = 8784;
// 2 hours,26 minutes,24 seconds
// so this program converts the movielength into time format.