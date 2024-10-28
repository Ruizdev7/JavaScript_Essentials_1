// 2.1.1 Data types and type conversions

/**
Programs are intended to process data. 
No matter if it is a web shop application, a human resources management system, or a computer game,
each of these programs reads, processes and stores huge amounts of data. 

In the previous chapter, we already learned how to declare, initiate, and modify the variables that allow 
these data to be stored in the context of a running program. 

While discussing variables, the concept of data types appeared, and it turned out that the JavaScript language is weakly typed, 
so among other things it allows you to change the type of data stored in one variable.

We can divide the data according to their properties. 
For example, you will certainly intuitively distinguish between numeric data and text data. 
Such classification is of course arbitrary. 

Numbers can be further divided into, for example, integer numbers and real numbers.

Distinguishing data by their types is one of the characteristic features of any programming language. 
Each type of data is connected with certain operations we can perform on it. 
Usually, there are also methods of converting data between selected types (e.g. a number can be converted so that it is saved as a string).

In JavaScript, data types are divided into primitive (or simple) and complex (or composite). 
Among the primitive types, we can find numbers and strings of characters, 
while the complex types include, for example, arrays and objects.

The difference between these data types is contained quite precisely in their names. 
The primitive types, well, are simply not complex. If you write a data of a primitive type into a variable, 
one particular value will be stored there. 

This value will be atomic, in other words, it will not be possible to extract components from it. 

Data of complex types, such as an array, will consist of many elements of primitive (not complex) types.

Thus, we will logically deal with primitive types first.

Before we move on to discussing data types, we need to introduce one more new concept: literals.

Literals are a way of noting specific values (data) in the program code. 
Literals are found in virtually all programming languages, including JavaScript. 
We used literals in the previous chapter when initializing variables.

Let's take a look at an example:
 */
/**

let year = 1990;
console.log(year); //  ->  1990
console.log(1991); //  ->  1991
console.log("Alice"); //  ->  Alice

*/

/**
The typeof operator

While learning about JavaScript data types, the typeof operator may be useful. 
Actually, it is also useful for normal work with this language, so it would be good if you remembered it for later. 
We will devote one of the later chapters to operators, but at this point it is enough to know that an operator is a symbol 
or name that represents some action to be performed on the indicated arguments. 

For example, the + symbol is a two-argument operator representing summation.

The typeof operator just mentioned is unary (it takes only one argument) 
and informs us of the type of data indicated as a given argument. 

The argument can be either a literal or a variable – in the latter case we will be told about the type of data stored in it. 
The typeof operator returns a string with one of the fixed values assigned to each of the types.

All possible return values of the typeof operator are:

"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"

 */

/** 
let year = 1990;
console.log(typeof year); //  ->  number
console.log(typeof 1991); //  ->  number

let name = "Alice";
console.log(typeof name); //  ->  string
console.log(typeof "Bob"); //  ->  string

let typeOfYear = typeof year;
console.log(typeOfYear); //  ->  number
console.log(typeof typeOfYear); //  ->  string
 */
