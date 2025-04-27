const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(arr) {
  return arr.reduce((sum, number) => (sum += number), 0)
};

const multiply = function(arr) {
  return arr.reduce((multiply, number) => multiply *= number, 1)
};

const power = function(number, power) {
  let result = number
  for (let i = 0; i < power - 1; i++) {
    result *= number
  }
  return result
};

const factorial = function(number) {
  let result = 1
  for (let i = number; i >= 1; i--) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
