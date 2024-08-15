function convertToNumber(str) {
    try {
      // Attempt to convert the string to a number using parseInt()
      const num = parseInt(str);
  
      // If the conversion is successful and the result is not NaN, return the number
      if (!isNaN(num)) {
        return num;
      }
      else if(isNaN(num)){
        return "Invalid Number" ;
      }
    } catch (error) {
      // If an error occurs during conversion (e.g., invalid input), catch it and return "Invalid number"
      return "Invalid number";
    }
  }

//   Calling the fucntion .. .
// Example usage ...
// Valid input
const numberString = "835399";
const result = convertToNumber(numberString);
console.log(result); // Output: 123

// Invalid input
const nonNumberString = "DINKAR THAKUR";
const invalidResult = convertToNumber(nonNumberString);
console.log(invalidResult); // Output: "Invalid number"


  