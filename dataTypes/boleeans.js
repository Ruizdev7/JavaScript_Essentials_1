/**
 * Boolean

The Boolean is a logical data type. 
It can only take one of two values: true or false. 
It’s mainly used as a conditional expression needed for deciding what part of the code should be executed, 
or how long something should be repeated (this is called a control flow statement, and we’ll take a closer look at it in Module 4).

Booleans are also used as what is commonly referred to as a flag, a variable that signals something that can be either present or absent, 
enabled or disabled, etc. Like any other variable, booleans should have clear and informative names. 
It’s not mandatory, but we can often see that boolean flag names are prefixed with "is", to show the intent of checking this for true/ false values.


We can perform, without conversion (i.e. change to another type) logical operations on boolean values, 
some perhaps that you know from mathematics, such as NOT, AND, and OR (the symbols !, && and || correspondingly). 
We will find out more about them in the chapter on operators.
* 
*/

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean
