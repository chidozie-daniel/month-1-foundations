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

const a = 15;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

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
console.log(' ');
console.log(' ');

// ------- Assignment Operators-----//
console.log('----Assignment operations');
// >> Addition assignment (+=)//
console.log('1)Addition assignment---');
let score = 50;
console.log(`The score is ${score}`);
console.log(`If we increase the score by 10, it's ${score += 10}`);
let balance = 100;
console.log(`The balance is ${balance}. if we increase it by 50, then it's ${balance += 50}`);
console.log(' ');
console.log('2) Subtraction assignment');
console.log(`The balance is ${balance} and if we decrement it by 20 then it becomes ${balance -= 20}`);