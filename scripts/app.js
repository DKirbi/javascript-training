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

//concat() joins two or more strings together, can basically be used instead of the + operator 
//"hello" + " world" "Hello.".concat(" ", "World");

let text1 = "My name is";
let text2 = "Davor The Developer";
let fullText = text1.concat(" ", text2);

console.log(fullText);

//trim() method removes whitespaces from a string both sides

let whitespaceText = "       Here's a lot of white space        ";
let noWhiteSpaceText = whitespaceText.trim();

console.log(noWhiteSpaceText);

// ES2019 added the string method trimStart() to javascript, works exactly like trim, but only removes whitespace from the start of the string
//Similarly works trimEnd() which removes only the space after the string

//padStart() and padEnd() pad a string with another string at the start or at the end

let paddedNum = 5;
let paddedString = paddedNum.toString();
let padded = paddedString.padEnd(4, "x");

console.log(padded);

//To access a character from a string we can simply type Property[]


let startLetter = text2[0];
console.log(startLetter);

//this is a new way of selecting the starting characters, the old way was to use charAt(). Whereas property might return undefined if the character is not found, charAt returns an empty string. Property does look like we are accessing an array, but we are not. The property[] is a read only string.

//split() returns the string into an array of characters

let text3 = "Hello World";

let chars = text3.split("");

console.log(chars);

//Comparisons 
//Greater/less a < b, a > b
//Greater/less than or equals a <= b, a >= b
//Equals a == b
//Not equals a != b

//Boolean is always the result
// true means "yes", "correct" or "the truth"
// false means "no", "wrong" or "not the truth"

console.log( 2 > 1);
console.log( 2 == 1);
console.log( 2 != 1);

// a comparison result can be assigned to a variable like any value

let result2 = 5 > 4;
console.log(result2);

//We can also compare strings, but it is a bit complex

console.log('Glow' > 'Glee'); //true

//In the first one we are guessing if the first string is bigger than the second. What the comparison here does is, it's comparing every letter of its position in the alphabet. 
//G is the same as G. l is the same as l. Whereas o is greater than e, we stop here, the first string is greater
//But is A letter bigger than a? No, that's because we are comparing the indexes of internal table encodings of Javascript 

//Comparison of different types

console.log('2' > 1 );
console.log('01' == 1);
//When comparing values of different types, javascript converts these values to numbers

//A strict equality operator checks the equality without type conversion

console.log( 0 === false); //false because the types are different

//if conditionals
if (new Date().getHours() < 18) {
    console.log('Good day!')
} 
else {
    console.log('Good evening!');
}

// If the rules in the parenthesis is true, execute first block of code else, execute the other part

//else if can contain additional rules

const time = new Date().getHours(); //Gets an integer of current hours of the day
let greeting; //create an empty variable
if (time < 10) {
    greeting = "Good morning";

} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.getElementById("greeting").innerHTML = greeting;

//OR operator || can be used in if conditionals for checking multiple values

let hour = 12; 
let isWeekend = true;

// if(hour < 10 || hour > 18 || isWeekend) {
//     alert('The office is closed.');
// }

//The OR operator evaluates operands from left to right, it only stops when it catches a truthy operand, if all the operands are false, the last value is selected

//And operator is respresented with two ampersands &&

let hour2 = 12;
let minute = 30;
if(hour2 == 12 && minute == 30) {
    console.log('The time is 12:30');
}

//In an if statemenet both operands need to return true, so that the statement will return true, if one of the statements returns false, the result is always false

//The precedence of AND &&  operators is higher than OR || so the code a && b || c && d is esentially the same as if the &&  expressions were in parenthesis (a && b) || (c && d)

// ! (NOT) is the boolean NOT operator represented by the exclamation sign !

//const result3 = !someValue;

//The operator accepts a single argument and does the following: 
//1. Covnerts the operand to boolean type: true/false
//2. Returns the inverse value

console.log(!"non-empty string"); //simply converts the value to boolean and inverses it to false

console.log(!!"non-empty string"); // converts the string to a boolean value and double inverses it to true

//A double !! is sometimes used for converting a value to boolean type
//There is a better way of writing this with the built-in Boolean function

console.log(Boolean("non-empty string")); //returns true

console.log(Boolean(null)); // returns false

//Ternary operators are very short conditionals between true and false, basically the same as an if conditional but it's a lot shorter
const themeSelection = document.querySelector('.themeSelect');
const html = document.querySelector('html');

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

themeSelection.addEventListener('change', () => themeSelection.value === 'black' 
? update('black', 'white')
: update('white', 'black')    
);