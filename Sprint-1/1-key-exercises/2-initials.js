let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0);
console.log(initials);

// https://www.google.com/search?q=get+first+character+of+string+mdn

// charAt(0) returns C from "Creula" because we need C .
// if we use char(1) it will display "r".
// the "+" operator is adding the characters together.  
// it will display nothing for middleName.charAt(0) .or maybe we don't apply anything on it.