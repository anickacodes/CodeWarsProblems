/* 
DESCRIPTION:
Write a function that 
-accepts an array of 10 integers (between 0 and 9), 
    -that returns a string of those numbers in the form of a phone number.

    Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

**/

/*
1. What is the problem asking me to do?
-Return a string of 10 numbers in (xxx) xxx-xxxx
-Ensure the spaces are included  
2. How would I go about solving the problem?
-initalize format
-ensure the valid length of the string
-what does the string look like? Utilize console.logs
-Loop through the string & replace each digit with an 'x'
-return the formatted string
3. Implement my plan
4. Look back/check/refactor
**/

// solution 1 utilizes a simple for loop and an initial format variable
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

// solution 2 slices the string of numbers into segments using concatenation & rejoins
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

// solution 3 uses Regular Expression to join the replaced set of /whatever's in here/ - 
// which is 3 groups of characters (...$1 group) ... group3 uses * to get the remaing characters
// with the right side captured group
function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
  }