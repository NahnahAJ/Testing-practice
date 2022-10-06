const stringLength  = require("./task1");
const reverseString  = require("./task2");
const capitalize  = require("./task4");


// TASK 3
const Calculator = {
  add: true,
  subtract: true,
  divide: true,
  multiply: true
};

describe('Calculator', () => {
  test('add', () => {
    expect(Calculator.add).toBeTruthy();
  });

  test('subtract', () => {
    expect(Calculator.subtract).toBeTruthy();
  });

  test('multiply', () => {
    expect(Calculator.multiply).toBeTruthy();
  });

  test('divide', () => {
    expect(Calculator.divide).toBeTruthy();
  });
});


// TASK 4
it('Should Capitalize', () => 
expect(capitalize('ananas')).toBe('Ananas')
)

// TASK 1
it('works', () =>
expect(stringLength('Hello')).toBe(5)
)

//TASK 2
test('Doesnt work', () =>
expect(() => stringLength('Hello my what is your name')).toThrow()
)

test('Should be reversed', () =>
  expect(reverseString('Nahnah')).toBe('hanhaN')
)
