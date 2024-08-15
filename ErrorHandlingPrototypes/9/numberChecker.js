function numberChecker(numbersArray) {
    // Return a function that takes a number as an argument
    return function(number) {
        // Check if the number is in the numbersArray
        return numbersArray.includes(number);
    };
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(myArray);

console.log(checkNumber(3)); // true
console.log(checkNumber(6)); // false
