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

//Strings
//Numbers are always typed in directly, without using any quotes. Strings however can be typed in three different ways

let str = "hello";
let str2 = 'world';
let phrase = `We can put two strings together ${str} ${str2}`;
console.log(phrase);


//Backtics are "extended functionality" in javascript, they help us to embed variables and expressions using ${} into a string

let MyName = 'Davor';
console.log(`Hello, ${MyName}`);

console.log(`the result is ${1+3}`);

//True False expressions

let isGreater = 4 > 1;
console.log(isGreater);
//the variable will return 'true' in the conosole

//undefined and null are two 'special not really special' types in Javascript. Null is an empty value while Undefined, is a variable that has no value or has not been defined

let newAge = 100;
newAge = undefined;

console.log(newAge);

//typeof operator defines the type of the operand

const notDefined = typeof undefined; //'undefined'
const zero = typeof 0; // 'number'
const bigInteger = typeof 10n; // big integer
const booLean = typeof true; //'boolean'
const words = typeof "foo"; //string
const sYmbol = typeof Symbol("id"); // "symbol"
const mathematics = typeof Math; // object (1)
const nothing = typeof null // object (2)
const alarm = typeof alert // function (3)

console.log(notDefined);
console.log(zero);
console.log(bigInteger);
console.log(booLean);
console.log(words);
console.log(sYmbol);
console.log(mathematics);
console.log(nothing);
console.log(alarm);


//An example of interpolation or embedding a string into another string
const button1 = document.querySelector("button");
function greet() {
    const name = prompt("What is your name?");

    alert(`Hello ${name}, nice to see you!`);
}

button1.addEventListener("click", greet);

const myString = "123";
const myNum = Number(myString);
console.log( "this is a " + typeof myNum);

//Here we learned that Number object can turn any stringified number into a number type again. This can be useful when the user writes a number into an input, it is a string, but if we want to use that as a number, we need to convert it into a number first.

const myNum2 = 12345;
const myString2 = myNum2.toString();
console.log("this is a " + typeof myString2);

//Here we learned that the toString object, can convert any number into a string

const faveSong = "'T.H.O.R.'";
const score = 95;
const highestScore = 100;
const output = `I like the song ${faveSong}, I gave it a score of ${(score / highestScore) * 100}%.`
console.log(output);

//slice() extracts a part of a string and returns the extracted part in a new string

let fruit = "apple, banana, kiwi";
let partOfFruit = fruit.slice(7,13);
console.log(partOfFruit);

let fruit2 = "apple, banana, kiwi";
let partOfFruit2 = fruit.slice(-12,-6);
console.log(partOfFruit);

//Positive values start the count of strings from 0, while the negative values start the count from the end of the string

//substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part

let str3 = "Apple, Coconut, Kiwi";
let partOfFruit3 = str3.substr(7,7);
console.log(partOfFruit3);

//replace() is a powerful method that replaces a specified value with another value in a string

let oldText = "Please visit Microsoft!";

let newText = oldText.replace("Microsoft", "Slovenia");

console.log(newText);

//replace() only replaces the first string and is also case sensitive. To replace all the strings the /g flag has to be set, or to ignore the case sensitivity the /i flag has to be set

let olderText = "Please visit Microsofty!"

let newerText = olderText.replace(/MICROSOFTY/i, "Brunšvik");

console.log(newerText);

let oldererText = "Please visit Microsoft and Microsoft and Slovenia.";

let newererText = oldererText.replace(/Microsoft/g, "Slavonia");

console.log(newererText);

//concat() joins two or more strings together

let text1 = "My name is";
let text2 = "Davor The Developer";
let fullText = text1.concat(" ", text2);

console.log(fullText);