/**
 DESCRIPTION:
Write a function that takes a list of strings as an argument and 
returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    For example, if this array were passed as an argument:

    ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    Your function would return the following array:

    ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    The elements in the returned array should be in the same order as in the initial array passed to your function, 
    albeit with the 'geese' removed. 
    Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
 */

    /*  
1. What is the problem asking me to do? 
-Return a filtered list containing the same elements but with the 'geese' removed

2. How can I go about solving the problem?
-check what words exist in the strings
-if the strings have any of the elements from the 'geese' array, remove them
-return the new array 
3. Implement my plan
4. Look back/check/refactor
**/

// solution 1 is lengthy though thorough. It utilizes a for loop, through birds. Setting a placeholder variable to check each element
// it has a temp arr to later push the elements that are not geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   // Create an empty array to store non-geese birds
   var nonGeese = [];
   // Loop through each bird in the input array
   for (var i = 0; i < birds.length; i++) {
     var currentBird = birds[i];
     // Check if the current bird is not in the geese array
     if (geese.indexOf(currentBird) === -1) {
       // If not in geese array, add it to the nonGeese array
       nonGeese.push(currentBird);
     }
   }
   // Return the array containing non-geese birds
   return nonGeese;
  }

  // solution2 utilizes the filter method through variable declaration, to gather elements not in the geese array
  function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // Use the filter method to create a new array without geese
    var filteredBirds = birds.filter(function(bird) {
      // Return true for elements not present in the geese array
      return geese.indexOf(bird) === -1;
    });
    // Return the filtered array
    return filteredBirds;
  }

  // solution 3 utilizes the .includes() method to return elements from the birds that are NOT geese
  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return birds.filter(g => !geese.includes(g))
  };