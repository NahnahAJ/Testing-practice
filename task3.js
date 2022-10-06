// TASK 3
class Calculator {
  constructor (add, subtract, divide, multiply) {
    this.add = add;
    this.subtract = subtract;
    this.divide = divide
    this.multiply = multiply;
  }

addFunction(y, z) {
const sum = y + z;
}

divideFunction(y, z) {
  const divide = y % z;
  }

subtractFunction(y, z) {
  const remainder = y - z;
  }
    
multiplyFunction(y, z) {
  const value = y * z;
  }
}

module.exports.Calculator = Calculator