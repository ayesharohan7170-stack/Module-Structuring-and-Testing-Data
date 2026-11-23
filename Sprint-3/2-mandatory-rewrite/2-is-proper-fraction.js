
    // add your completed function from key-implement here
function isProperFraction(numerator, denominator) {
  if (denominator <= 0) return false;
  if (Math.abs(numerator) < denominator) return true;
    return false;
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );  
}

module.exports = isProperFraction;