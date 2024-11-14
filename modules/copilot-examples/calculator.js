// calculator.js
// A simple calculator module

/**
 * Adds two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The sum of the two numbers
 */
function add(a, b) {
  return a + b;
}

/**
* Subtracts the second number from the first
* @param {number} a - The first number
* @param {number} b - The second number
* @returns {number} - The difference between the two numbers
*/
function subtract(a, b) {
  return a - b;
}

/**
* Multiplies two numbers
* @param {number} a - The first number
* @param {number} b - The second number
* @returns {number} - The product of the two numbers
*/
function multiply(a, b) {
  return a * b;
}

/**
* Divides the first number by the second
* @param {number} a - The numerator
* @param {number} b - The denominator
* @returns {number} - The quotient of the two numbers
*/
function divide(a, b) {
  if (b === 0) {
      console.error('Error: Division by zero');
      return null;
  }
  return a / b;
}

/**
* Calculates the square of a number
* @param {number} a - The number to square
* @returns {number} - The square of the number
*/
function square(a) {
  return a ** 2;
}

/**
* Calculates the square root of a number
* @param {number} a - The number to find the square root of
* @returns {number} - The square root of the number
*/
function squareRoot(a) {
  if (a < 0) {
      console.error('Error: Square root of a negative number');
      return null;
  }
  return Math.sqrt(a);
}

// Export the functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot
};
