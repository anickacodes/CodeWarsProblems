/*
DESCRIPTION:
Write a function that:

returns a sequence (index begins with 1) of all the even characters from a string.
If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

    "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
    "a"             --> "invalid string"
*/

/*
1. What's the problem asking?
-Return a sequence (an array?) of even characters from a string
-If the string has less than 2 characters OR longer than 100 characters, return 'invalid string'

2. What steps should I take?
-Check length of the string
-Loop through the string. What does the string look like? Utilize console.logs 
-FILTER THROUGH: If any index is even, PUSH it into a new array
-Return those even indexes
3. Implement the plan from #2
Remember, if the length requirements aren't met, it is an 'invalid string'
4. Look back/Check/Refactor
**/

// solution 1 - utilize a for loop with conditionals
function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  let evenNumberedCharacters = [];

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      evenNumberedCharacters.push(string[i]);
    }
  }
  return evenNumberedCharacters;
}

// solution 2 utilizes the Array.from method to convert the string into an array of characters
// and then uses the filter method to select only the characters at odd indices.

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";

  return Array.from(string).filter((char, index) => index % 2 === 1);
}

//   solution 3 slice(1, string.length, 2) extracts the characters at odd indices,
// and split('') converts the result into an array of characters
function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";

  return string.slice(1, string.length, 2).split("");
}
