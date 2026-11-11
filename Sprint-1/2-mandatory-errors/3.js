const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// The slice function is string method and cardNumber is an integar thats why it's giving an error.so we 
// need to convert the integar into string first and then we can apply the slice function.
// .slice(-4) takes the last 4 characters from the string.
//  String() is a built-in function that converts a value into a string.
// .toString() is a method called directly on the value.
// String() is safer than .toString() for null and undefined.