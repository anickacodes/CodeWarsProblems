/*
Description:
You task to pass only this tests :

a == false
!a == false
a == !a
*/

/* 
1. What is the problem? What is the question asking you to do?
    The goal is to make the following tests pass:

    a == false
    !a == false
    a == !a
2. Make a plan to solve it / satisfy requirements
    For the first test (a == false), a should be false.
    For the second test (!a == false), the negation of a should be false, meaning a should be true.
    For the third test (a == !a), a should be equal to the negation of itself, which is contradictory.
    There is no value of a that satisfies all three conditions simultaneously.
    What is a falsy value?
3. Implement the plan 
4. Go back & check. If need be: Revise / Refactor
**/

// solution 1 sets a to be the string 0 which equates to false . !a would be true
const a = '0';


/* 

here's a walkthrough using the command line/ terminal / node.js 

$ node                                       
Welcome to Node.js v20.0.0.
Type ".help" for more information.

> let a = 0
undefined

> a
0

> !a
true

> !!a
false

> a = []
[]

> a
[]

> !a
false

> !!a
true

 **/