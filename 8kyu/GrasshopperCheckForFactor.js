/*
DESCRIPTION:
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

/*
 POLYA'S PROBLEM SOLVING TECHNIQUE
1. What is the problem? What is the question asking you to do?
2. Make a plan to solve it / satisfy requirements
3. Implement the plan 
4. Go back & check. If need be: Revise / Refactor
*/

/* 
1. The problem is asking to see if 'factor' is a factor of 'base'
Understand what a factor is
Understand what a base is
2. Do the instructions provide problem solving steps? 
How can I check what my params are?
How can i check if factor is a factor oos base?
Well, if base divided by factor gives me 0 aka no remainders, then it is a factor
So if that is true- I will return true
Otherwise, I will return false
3. if (base%factor === 0) return true;
4. Can I simplify my solution??
**/

// solution 1 uses an if/else block

function checkForFactor(base, factor) {
  console.log(base);
  console.log(factor);
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

// solution 2 uses an if consitional
function checkForFactor(base, factor) {
  //   is it a factor? is it's remainder 0
  console.log("base", base + "factor", factor);
  if (base % factor === 0) return true;
  return false;
}

// solution 3 utilizes ternary
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false;
}

// solution 4 - Simply return the checking of the requirements
function checkForFactor(base, factor) {
  return base % factor === 0;
}
