function testingPractice() {
  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  function reverseString(string) {
    let reversedString = "";
    for(let index = 0; index < string.length; index++) {
      reversedString += string[string.length - 1 - index];
    }
    return reversedString;
  }

  const calculator = {
    add(firstNum, secondNum) {
      return firstNum + secondNum;
    },
    subtract(firstNum, secondNum) {
      return firstNum - secondNum;
    },
    divide(firstNum, secondNum) {
      return firstNum / secondNum;
    },
    multiply(firstNum, secondNum) {
      return firstNum * secondNum;
    }  
  }

  function caesarCipher(string, shiftFactor) {
    let chiperedString = "";
    for(let index = 0; index < string.length; index++) {
      chiperedString += shiftChar(string[index], shiftFactor, categorizeChar(string[index]));
    }
    return chiperedString;
  }

  function categorizeChar(char) {
    const charCode = char.codePointAt(0);
    if(charCode >= 65 && charCode <= 90) return "uppercase";
    else if(charCode >= 97 && charCode <= 122) return "lowercase";
    else return "others";
  }

  function shiftChar(char, shiftFactor, category) {
    let charCode = char.codePointAt(0);
    switch(category) {
      case "uppercase":
        charCode += shiftFactor;
        if(charCode < 65) return String.fromCodePoint(charCode + 26);
        else if(charCode > 90) return String.fromCodePoint(charCode - 26);
        else return String.fromCodePoint(charCode);
      case "lowercase":
        charCode += shiftFactor;
        if(charCode < 97) return String.fromCodePoint(charCode + 26);
        else if(charCode > 122) return String.fromCodePoint(charCode - 26);
        else return String.fromCodePoint(charCode);
      case "others":
        return String.fromCodePoint(charCode);
    }
  }

  function analyzeArray(array) {
    return {
      average: array.reduce((total, current) => total + current) / array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length
    };
  }

  return { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
}

export default testingPractice;