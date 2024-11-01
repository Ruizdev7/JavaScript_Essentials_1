/**
 * The undefined type has only one value: undefined. It’s the default value that all variables have after a declaration
 * if no value is assigned to them. You can also assign the value undefined to any variable, but in general, this should be avoided,
 * because if we need to mark a variable as not holding any meaningful value, we should use null.
 */

let declaredVar;
console.log(typeof declaredVar); //  ->  undefined

declaredVar = 5;
console.log(typeof declaredVar); //  ->  number

declaredVar = undefined;
console.log(typeof declaredVar); //  ->  undefined

//The  undefined  value  can  also  be  returned  by  the  typeof  operator  when  a  non-existent  variable  is  used  as  an  argument.

console.log(typeof notDeclaredVar); //  ->  undefined
console.log(notDeclaredVar); //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined

/**
 * Symbol
 *
 * The Symbol type is, well... complicated to say the least. And fortunately, not particularly useful to us.
 * It’s a new primitive type that was added to JavaScript in 2015. It doesn't have any literal value,
 * and can only be created using a special constructor function. Symbols are a form of identifier that are guaranteed to be unique.
 *
 * Symbols are an advanced topic, and to understand their power and usefulness, we’ll need to cover a lot of other topics first,
 * so for now, just remember that the Symbol type exists.
 */
