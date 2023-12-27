/* 
DESCRIPTION:
Task
Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. 
Otherwise, it should return false. 
If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
**/

/*  
1. What is the problem asking me to do? 
-Return true if the fn from params return true for every element in the sequence(arr)
-Otherwise, return false
-If arr is empty, return true
2. How can I go about solving the problem?
-check what the sequence (arr) is && check what the function (fun) is
-Search through arr & check if it satisfies the conditions of the param function
-Return true if conditons satisfy, false if not 
3. Implement my plan
4. Look back/check/refactor
**/

// solution 1 uses a basic for loop & checks if a particular element is NOT satisfactory
function all( arr, fun ) {
    for(let i = 0; i < arr.length; i++) {
      if(!fun(arr[i])) {
        return false;
      }
    }
    return true;
  }

//   solution 2 uses the .every() method to simply get to the point : this array method only return booleans

function all(arr, fun) {
    return arr.every(fun);
  }