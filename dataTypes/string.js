/**
 * The String type represents a sequence of characters forming a piece of text.
 * Common operations on texts include concatenation, extraction of the substring, and checking the length of the string.
 * Strings are extensively used in programming and even more so in web development, as both HTML and a big part of Internet content is text.
 *
 * The most common use of text in web development includes:
 * links and paths to resources;
 * tokens;
 * checking user-filled forms and input;
 * dynamic content generation
 *
 * Strings, like other primitives, are immutable, so when we want to change even one letter in a string, in reality, we create a new string.
 *
 * In previous examples, we already used character strings. We used quotation marks to indicate that a given text is to be treated as a string (i.e. String type).
 * String literals can be created using single or double quotes, as long as both beginning and end quote characters match up.
 */

let country = "Malawi";
let continent = "Africa";

console.log(country); //  ->  Malawi
console.log(typeof country); //  ->  string
console.log(continent); //  ->  Africa
console.log(typeof continent); //  ->  string

/**
 * If you use double quotes to mark a string, you can place single quotes inside the string, and they will be treated as ordinary characters.
 * This will also work in the opposite situation (i.e. placing double quotes between the single quotes).
 */

let message1 = "The  vessel  'Mars'  called  at  the  port.";
let message2 = 'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';

console.log(message1); //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2); //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

/**
 * If you want to put a single or double quote inside the string, you can also use the escape character – backslash.
 * A quote mark preceded by the \ (backslash) character will be interpreted as ordinary characters that are part of our string,
 * not parts of a literal construction.
 *
 * The backslash itself, if it is to be treated as an ordinary character (not a control character),
 * must also be preceded by ... an escape character (i.e. a backslash).
 */

let message11 = "The  vessel  'Mars'  called  at  the  port.";
let message22 = 'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';

console.log(message11); //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message22); //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

let path = "C:\\Windows";
console.log(path); //  ->  C:\Windows

/**
 * Trying to perform arithmetic operations on String type values, such as subtraction, multiplication, or division, will usually end in an error.
 * More precisely, the NaN value will be returned as a result of the action.
 *
 * Why is this happening? Seeing the arithmetic operators -, *, or \, the JavaScript interpreter tries to interpret the given values as numbers,
 * or convert them into numbers. So if the character strings consists of digits, the automatic conversion will be successful
 * and we will get the result of the arithmetic action as a Number type value.
 *
 * If the character string cannot be interpreted as a number (and converted) we will get the NaN result. We will talk more about conversion in a moment.
 */

let path2 = "C:\\Windows" - "Windows";
console.log(path2); //  ->  NaN

let test = "100" - "10";
console.log(test); //  ->  90
console.log(typeof test); //  ->  number

/**
 * The exception is the addition operation, which will not be treated as an arithmetic one,
 * but as an attempt to create a new string by combining two input strings.
 */

let path3 = "C:\\" + "Windows";
console.log(path3); //  ->  C:\Windows

let test3 = "100" + "10";
console.log(test3); //  ->  10010
console.log(typeof test3); //  ->  string

/**
 * A very convenient mechanism that was introduced to JavaScript in 2015 is string interpolation.
 * It allows you to treat a character string as a template, in which you can place values in selected places,
 * such as those taken from variables.
 *
 * Such a literal is created using backticks (or grave accents) instead of quotation marks.
 * The places where values are inserted are marked with curly brackets preceded by a $ sign.
 */

let country2 = "Malawi";
let continent2 = "Africa";

let sentence = `${country2} is located in ${continent2}.`;
console.log(sentence); //  ->  Malawi  is  located  in  Africa.

/**
 * You can do a lot of useful work on String type data.
 * Unfortunately, they require two new concepts: methods (and indirectly, objects) and autoboxing.
 *
 * The exact explanation of both concepts goes beyond the scope of this course, so we will try to make them a little simpler.
 *
 * In one of the previous chapters, we introduced the concept of a function, also in a somewhat simplified form. Now let’s talk about methods.
 *
 * A method is a special kind of function that belongs to an object. Objects are complex data types, which can consist of many values (stored in properties) and methods.
 * If you want to call the method of an object, you write the name of the method after a dot. Does this remind you of something?
 * This is exactly the notation you use when calling console.log.
 * The console object has many other methods besides the log method, such as time and timeEnd (which can be used to measure time).
 */

console.time();
console.log("test  console"); //  ->  test  console
console.timeEnd(); //  ->  default:  0.108154296875  ms
/**
 * All data of primitive types such as Number, BigInt, Boolean, or String have corresponding objects to which they can be converted.
 * Each of these objects will have methods designed for a specific data type. At this point,
 * we come to another concept, that is, autoboxing. If a dot appears after a literal representing a primitive type,
 * or after a variable containing this type of data, the JavaScript interpreter tries to treat this value as an object and not a primitive.
 * For this purpose, it converts the primitive to the corresponding object on the fly, which has the appropriate methods (i.e. it performs autoboxing).
 * A bit confusing, isn't it? Fortunately, in order to use methods, we don't have to understand it exactly – it's enough to follow the given convention.
 */

let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k

/**
 * In the variable river, we store the primitive of a String type. In the next line, we refer to this variable,
 * writing a dot after its name and the name of one of the methods – charAt (a method of the String class object).
 * Although the primitive has no methods that can be called, the interpreter temporarily converts this value to a suitable object
 * that already has such methods. One of these methods is charAt, which we now call. The method operates on a string originally placed in the river variable,
 * and returns a single letter from the specified position (letters are counted starting from 0).
 *
 * After the operation is completed, the interpreter removes the temporary object. So from our point of view, it looks like we just called a
 * method on a given primitive type.
 */

let str = "java script language";

console.log(str.length); // -> 20
console.log("test".length); // -> 4

console.log(str.charAt(0)); // -> 'j'
console.log("abc".charAt(1)); // -> 'b'

console.log(str.slice(0, 4)); // -> 'java'
console.log("test".slice(1, 3)); // -> 'es'

console.log(str.split(" ")); // -> ['java', 'script', 'language']
console.log("192.168.1.1".split(".")); // -> ['192', '168', '1', '1']

/**
 * To understand it properly, it is necessary to run examples of String type data.
 * Do not be afraid to experiment by changing the data in the examples, adding new variables, or displaying additional information on the console.
 */
