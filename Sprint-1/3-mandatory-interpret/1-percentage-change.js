let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// Line 4: replaceAll() and Number()
// Line 5: replaceAll() and Number()


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The Error is displaying on Line 5 .there is a missing comma in replaceAll Function. 

// c) Identify all the lines that are variable reassignment statements
// Line 4 and 5

// d) Identify all the lines that are variable declarations
// Line 1 , 2 , 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//  It's replacing the comma in the carPrice with an empty string.
// The Number is converting the string into integar for next methametical operation.

//  then after one year by subtracting the new price from the original price.//
// It calculates how much the car price has decreased


//  then We divide by the original price because we want to know
// how much the car's value has decreased compared to its starting price.
// The result tells us the percentage decrease in the car's price.
