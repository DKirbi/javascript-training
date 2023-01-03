//variables are a "named storage" for data
let message;

message = "hello world!";

console.log(message);

// alert(message);

//Variables can be declared on a single line, but it is not recommended
let user = 'John', age = 25, kindMessage = 'hello';


//this is a more convenient way of making variables
let user2 = 'Jane';
let age2 = 33;
let kindlyMessaged = 'Hello Darling!';

//Variables should be written in camelCase if multiple words are stuck together
//Variables cannot start with numbers or have hypens inside them

const BIRTHDAY = '17.11.1989';
// Constants are variables that will not change in the future. If a constant has a hardcoded value, it is best to write that constant in an UPPERCASE
//const age = someCode(BIRTHDAY); 
//Here we have an example of const age, which is going to get a value from a function during runtime, therefore it can be written in camelCase, whereas BIRTHDAY is written in uppercase, since we hardcoded its value.

////////ODIN Excersises/////////


//1
var numberOne = 23;
var numberTwo = 97;

console.log(numberOne + numberTwo);

//2
console.log(1 + 2 + 3 + 4 + 5 + 6);

//3
console.log((4 + 6 + 9)/77);

//4
let a = 10;
console.log(9*a);
let b = 7 * a;
console.log(b);

//5
const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);
const percentagePrint = Math.round(percentage*100) + '%';
console.log(percentagePrint);