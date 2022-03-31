// calculator 

export default class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      return a / b;
    }
  }

// stringlength
const stringLength = (str) => {
    const string = str.length;
  
    if (string <= 0 || string > 10) {
      return 'String must contain 1-10 characters.';
    } else {
      return string;
    }
  }
  
 // reverse string
const reverseString = (str) => {
    const split = str.split('');
    const reverse = split.reverse();
    const joinString = reverse.join('');
    return joinString;
  };
  
// capitalize first letter
const capitalize = (str) => {
  const result = str.charAt(0).toUpperCase() + str.slice(1);
  return result;
};

    export {stringLength, reverseString, Calculator, capitalize};
