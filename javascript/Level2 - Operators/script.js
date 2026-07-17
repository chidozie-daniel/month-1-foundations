// ----Arithmetic operators are the ones you already know from mathematics ----//
console.log("---We'll start with arithmetic operators")
const num1 = 20;
const num2 = 5;

// Addition
const sum = num1 + num2;

// Subtraction
const difference = num1 - num2;

// Multiplication
const product = num1 * num2;

// Division
const quotient = num1 / num2;

// Modulus is remainder after division
const modulus = num1 % num2;

// Exponent is raising a number to a power
const exponentResult = num1 ** num2;

// Display properly and descriptively
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`The difference between ${num1} and ${num2} is ${difference}`);
console.log(`The product of ${num1} and ${num2} is ${product}`);
console.log(`${num1} divided by ${num2} is ${quotient}`);
console.log(`The remainder after you divide ${num1} by ${num2} is ${modulus}`);
console.log(`If you raise ${num1} to the power of ${num2}, the result is ${exponentResult}`);
console.log();
// arithmetic operators practice
const a = 15;
const b = 4;
console.log(`a is ${a} and b is ${b}`);
console.log(`The sum of a and b is ${a + b}`);
console.log(`The difference between a and b is ${a - b}`);
console.log(`The product of a and b is ${a * b}`);
console.log(`The division of a by b gives result as ${a / b}`);
console.log(`The remainder after a is divided by b is ${a % b}`);
console.log(`a raised to the power of b is ${a ** b}`);
console.log();


// Code challenge or practice
// I create and assign the variables
const price = 250;
const quantity = 3;

/* 
Calculate and print:

Total cost
Half of the total cost
The remainder when the total cost is divided by 4
The square of the quantity
*/
const totalCost = price * quantity;
const halfTotalCost = totalCost / 2;
const remainder = totalCost % 4;
const quantitySquare = quantity ** 2;
console.log(`The total cost is ${totalCost}`);
console.log(`Half of the total cost is ${halfTotalCost}`);
console.log(`The remainder after the total cost is divided by 4 is ${remainder}`)
console.log(`The square of the quantity is ${quantitySquare}`);
console.log();
console.log();

// Assignment Operators
console.log('----Assignment operators');
// -----Addition assignment (+=)
console.log('1)Addition assignment---');
let scoreValue = 50;
console.log(`The score is ${scoreValue}`);
console.log(`If we increase the score by 10, it's ${scoreValue += 10}`);
let balance = 100;
console.log(`The balance is ${balance}. if we increase it by 50, then it's ${balance += 50}`);
console.log();

// ----Subtraction assignment -=
console.log('2) Subtraction assignment');
console.log(`The balance is ${balance} and if we decrement it by 20 then it becomes ${balance -= 20}`);
let lives = 5;
console.log(`The original lives are ${lives}; reduced by 1, they are ${lives -= 1}`);
console.log();

// ----Multiplication assignment *=
console.log('3) Multiplication assignment');
let salary = 2000;
console.log(`if salary is ${salary}`);
salary *= 2;
console.log(`When doubled it will be ${salary}`);
console.log();

// ----Division assignment /=
console.log('4) Division assignment');
let discountPrice = 800;
console.log(`The discount price is ${discountPrice}`);
discountPrice /= 2;
console.log(`Half the discount price is ${discountPrice}`);
console.log();

// ----Modulus assignment %=
console.log('5) Modulus assignment');
let remainderNumber = 17;
console.log(`Let's try a number, say ${remainderNumber}`);
remainderNumber %= 3;
console.log(`If 17 were divided by 3, the remainder would be ${remainderNumber}`);
console.log();

// ---- Exponent assignment **=
console.log('6) Exponent assignment');
let value = 4;
value **= 3;
console.log(`When 4 is raised to the power of 3 it's ${value}`);
console.log();

/*
Then perform these actions in order:

Player defeats an enemy → +10
Player opens a treasure chest → +25
Player takes damage → -8
Double the score because of a bonus event.
Divide the score by 3.
Print the score after every step using descriptive messages.

This is a code challenge
*/
console.log('----Game Score program');
let score = 0;
console.log(`Initial score: ${score}`);
console.log(`Player defeats an enemy, new score is ${score += 10}`);
console.log(`After Opening treasure chest, updated score is ${score += 25}`);
console.log(`Player has taken damage. Score drops to ${score -= 8}`);
console.log(`Bonus event happens. Score doubled: ${score *= 2}`);
console.log(`Score divided by 3 results to: ${score /= 3}`);
console.log();

// ---- Comparison operators
console.log('\n >> Comparison operators');
console.log('1) Equality: Loose and Strict');
console.log('Loose equality :');
console.log(`Is 10 equal to 10? ${10 == 10}`);
console.log(`Is 10 equal to 5? ${10 == 5}`);
console.log(`Is 5 equal to "5"? ${5 == "5"}`);
console.log();

console.log('Strict equality :');
console.log(`Again, is 5 equal to "5"? ${5 === "5"}`);
console.log(`Is 10 equal to 10? ${10 === 10}`);
console.log();

console.log('2) Not Equal :');
console.log('Loose inequality !=');
console.log(`10 is not equal to 5. ${10 != 5}`);
console.log(`10 is not equal to 10? ${10 != 10}`);
console.log();

console.log('Strict inequality !==');
console.log(10 !== 5);
console.log(5 !== "5");// true because the types are different
console.log();

console.log('3) Greater than > ');
console.log(`20 is greater than 10? ${20 > 10}`);
console.log(`Is 5 greater than 10? ${5 > 10}`);
console.log();

console.log('4) Less than < ');
console.log(`Is 5 less than 10? ${5 < 10}`);
console.log();

console.log('5) Greater than or equal to >=');
console.log(`is 18 greater than or equal to 18? ${18 >= 18}`);
console.log(`is 20 greater than or equal to 18? ${20 >= 18}`)
console.log();

console.log('6) less than or equal to <=');
console.log(`is 15 less than or equal to 20? ${15 <= 20}`);
console.log(`is 20 less than or equal to 15? ${20 <= 15}`);
console.log();

console.log("-----\n Coding challenge");
let username = "Daniel";
let enteredUsername = "Daniel";

let password = "javascript123";
let enteredPassword = "javascript123";

console.log(`Username matches: ${username === enteredUsername}`);
console.log(`Password matches: ${password === enteredPassword}`)
console.log()
enteredPassword = "password";
console.log('After editing');
console.log(`Password matches: ${password === enteredPassword}`);
console.log();
console.log();

console.log("\n ---Logical operators");
console.log("There are only 3 logical operators: &&, ||, !. These are used everywhere in javascript, react, node.js, express and Typescript");
console.log("\n 1) AND (&&): Both conditions must be true");
let age = 20;
let hasID = true;
console.log(`Is the user 18 and above, and does he have an ID? ${age >= 18 && hasID}`);

console.log("\n 2) OR(||): Only one condition has to be true");
const hasCard = true;
const hasCash = false;
console.log(`Customer has card or some cash? ${hasCard || hasCash}`);//Because the person has a card.

console.log("\n 3) NOT(!): Simply reverses a boolean");
const isLoggedIn = true;
console.log(`User is logged in? ${!isLoggedIn}`);
const isOnline = false;
console.log(`is the user online? ${!isOnline}`);
//combining them
age = 20;
// hasID = true;
const hasTicket = true;

console.log(age >= 18 && hasID && hasTicket);

// const age = 20;
hasID = false;
// const hasTicket = true;

console.log(age >= 18 && hasID && hasTicket);