// Predict and explain first...
//  =============> write your prediction here

//this function takes. input as an parameter and then it will capitalize the string by 
// taking the 0 index of the string and then add the other characters of string by using slice. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str
// }
// =============> write your explanation here
// =============> write your new code here

// The originsl code gives an error because the string is declared twice.
// This causes a SyntaxError: Identifier 'str' has already been declared.



// 1- here first I change the name of our variable because str is an build-in function and we can't name a variable like this.
// 2- then I call the function with an string input.
// 3- The function takes the first character of the string.
// 4- then converts it to uppercase using toUpperCase(), and then adds the remaining characters using slice(1).
//5-  Atlast the function returns the capitalised string "Hobby".

function capitalise(str) {
  let x = `${str[0].toUpperCase()}${str.slice(1)}`;
  return(x);
}
capitalise("hobby")
