// TASK 1

const stringLength = (newNumber) => {

  if(newNumber.length > 1 && newNumber.length <= 10) {
    return newNumber.length;
  }
  else {
    throw new Error('you are using the wrong JDK');
  }
}

module.exports = stringLength