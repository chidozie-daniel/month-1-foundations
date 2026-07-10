console.log("Hello World");
console.log("I'm Daniel...");
console.log("I am Learning JavaScript");
console.log(2026);
console.log("I want to become a MERN Stack developer");
console.log("JavaScript is my main language");
console.log(10 + 2);
console.log("Experimenting is one of the fastest ways to build intuition.");

/*
Mini Challenge

Without looking back, try writing code that:

Creates a variable called firstName with your name.
Creates a variable called country with "Nigeria".
Creates a variable called age with your age.
Creates a variable called isStudent with true.
Prints all four values to the console.

Then try this:

Change the value of age.
Change the value of country.

Ask yourself:

Should age use let or const?
Should country use let or const?

Thinking about why a value might or might not change is more important than memorizing the keywords.
*/

const firstName = "Daniel";
const country = "Nigeria";
const age = 17;
const isStudent = true;

console.log(`I am ${firstName} from ${country}. I am ${age} years old ${isStudent}`);
console.log(typeof age);

/*
Creates one variable of each of the five data types above.
string
number
boolean
undefined
null
*/
let score;
const selectedSubject = null;

console.log("The datatype of score is ", typeof score);
console.log("The datatype of selected subject is ", typeof selectedSubject);

const price = 99.99;
const isLoggedIn = false;
console.log("The datatype of price is ", price);
console.log("The log in state is ", isLoggedIn);