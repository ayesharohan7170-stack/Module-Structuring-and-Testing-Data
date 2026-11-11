// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

 const cityOfBirth = "Bolton";
 console.log(`I was born in ${cityOfBirth}`);

//  bcz you are declaring the constant after the console.log.constant 
//  variables cannot be used after console.log
// The const variable must be initialized before you can use it.
// TDZ is simply the time when a variable exists but cannot yet be used.
// If I try to access the variable during the TDZ,
// JavaScript throws a ReferenceError.
// Once the variable is initialized, I can use it normally.