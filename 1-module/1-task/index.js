/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

// factorial(0); // 1
// factorial(1); // 1
// factorial(3); // 6
// factorial(5); // 120

function factorial(n) {
  // var n = 4;
  var result = 1;
  while(n){
    result *= n--;
  }
  return result;
}
