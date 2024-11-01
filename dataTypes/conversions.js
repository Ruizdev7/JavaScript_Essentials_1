/**
 * Primitive construction functions
 *
 * Using literals is not the only way to create variables of the given primitive types.
 * The second option is to make them using constructor functions. These types of functions are mainly used in JavaScript
 * for object-oriented programming, which is outside the scope of our course.
 *
 * However, these few listed constructor functions can also be used to create primitives, not just objects
 * (this is not a general feature, but only for the listed functions).
 *
 * The following functions will return primitives of a given type: Boolean, Number, BigInt, and String.
 *
 * Most of these functions can be called without any arguments. In such a situation:
 *
 * the function String will by default create and return an empty string – primitive "";
 * the function Number will by default create and return the value 0;
 * the function Boolean will by default create and return the value of false.
 * The function BigInt, unlike other constructor functions, requires you to pass some initial value to it.
 * This can be an integer number that will be converted to a BigInt (see examples).
 */

const str = String();
const num = Number();
const bool = Boolean();

console.log(str); //  ->
console.log(num); //  ->  0
console.log(bool); //  ->  false

const big1 = BigInt(42);
console.log(big1); //  ->  42n

// const big2 = BigInt(); //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

// But creating default values is not impressive at all. We can accomplish these using literals. So what do we use these functions for? Well, we use them in type conversions.

/**
 * It’s a pretty common situation to have a value of one type but to need a value of another type. The simplest example is when we have a number, but we need to add it to some text. Conversions in JavaScript happen automatically in specific situations, but can also be used explicitly through functions like String() or Number(). Earlier we saw how those functions could be used to create default values of those types, but that’s not all they can do. Those functions also accept arguments in parentheses and (if possible) will convert them to a given type.
 */

const num2 = 42;

const strFromNum1 = String(num2);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);
