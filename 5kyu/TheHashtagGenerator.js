/*
DESCRIPTION:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
    Examples
    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false
**/

/* 
1. What is the problem asking me to do?
-Generate hashtags as follows: 
-Output should start with a hashtag
-All Words should have the first letter capitalized
-If the final Output/result is more than 140 characters : return false
-If the Input or the Output/Result is an empty string : return false

2. How can I go about slving this problem? 
-If the string is empty return false
-Split the string into individual words
-Capitalize the first letters
-Create a variable to add '#' to the beginning of the words
-Check length afterwards. If more than 140 : false 
-retun the hashtag-added word

3. Follow my plan

4. Go back/check/refactor
**/

// solution 1 utilizes .split() to create words and utilizes .map() to create a new array of UpperCases First letters only with .slice()
// Manually adds hash to beginning of each word 
function generateHashtag (str) {
    console.log(str)
  // If the input or the result is an empty string it must return false.
     if (!str || str.trim() === '') {
          return false;
      }
    const words = str.split(' ')
  // All words must have their first letter capitalized.
    const upperCasedWord = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //    must start with a hashtag (#).
    const hash = `#${upperCasedWord.join('')}`
  // If the final result is longer than 140 chars it must return false.
    if (hash.length> 140) return false; return hash;
}

// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
