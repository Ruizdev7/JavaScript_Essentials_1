/**
 * Conversion to BigInt
 *
 * In order for conversions to a BigInt to succeed, we require a Number or String representing a number as a value to be converted.
 * Values for conversion can be given in the default decimal form, as well as in hexadecimal, octal, or binary form.
 * This applies both to the situation where we give the Number and String literals as arguments (or variables containing data of those types).
 *
 * We can also use exponential notation, but only for Number arguments. Unlike other conversions, conversion to a BigInt will throw an error,
 * and will stop the program when unable to convert a given value.
 *
 * Note: When testing the following example, please pay attention to the fact that the first error prevents further code execution.
 * So run the example several times in succession, removing the wrong calls one by one.
 *
 */

console.log(BigInt(11)); //  ->  11n
console.log(BigInt(0x11)); //  ->  17n
console.log(BigInt(11e2)); //  ->  1100n

console.log(BigInt(true)); //  ->  1n

console.log(BigInt("11")); //  ->  11n
console.log(BigInt("0x11")); //  ->  17n

console.log(BigInt(null)); //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt

console.log(BigInt(undefined)); //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

console.log(BigInt(NaN)); //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

/**
 * Conversions can also happen automatically, and they happen all the time.
 * This simple example will demonstrate it (we tested a similar example when discussing the String type):
 */

const str1 = 42 + "1";
console.log(str1); //  ->  421
console.log(typeof str1); //  ->  string

const str2 = 42 - "1";
console.log(str2); //  ->  41
console.log(typeof str2); //  ->  number

/**
 * So what’s going on? The details will be shown in the chapter on operators,
 * but the short answer is that when we try to perform an addition when one of the arguments is a string,
 * JavaScript will convert the rest of the arguments to a string as well.
 *
 * This is what is happening with str1 in the example.
 * Subtraction with a string, however, doesn't make much sense, so in that case JavaScript converts everything to Numbers.
 */
