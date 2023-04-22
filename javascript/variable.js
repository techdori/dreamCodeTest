//1. Use strict
// add ECMAScript 5
// use this for valina javascript

'use strict';

// 2. variable (read/write)
// let (added in ES6)
console.log('Hello World');
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
//has no block scope

{
    age = 4;
    var age;

}
console.log(age);

//3. contants (read only)
//use const whenever possible
// only use let if variable needs to change

// favor immutable data type always for a few reasons;
// - scurity
// - thread safety
// - reduce human mistakes
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
const daysInWeek = 7;
const maxNumber = 5 ;

//4.variable type
//primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
console.log(`value: ${count}, type: ${typeof count}`);

// number - speicla numeric values : infinity. -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!` ; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value:' + helloBob + 'type:'+typeof helloBob);

// boolean
// false : 0 ,null, undefined, NaN, ''
// true : andy other value
const canRead = true;
const test = 3 < 1; 
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, ceate unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id ');
console.log(symbol1 === symbol2); 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age : 20};
ellie.age = 21;

//5 Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
