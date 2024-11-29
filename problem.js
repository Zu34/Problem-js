
//1. Guessing game\\

// !.#1 Method.!
// Generate a random
// Math.floor(Math.random() * (max - min + 1)) + min;

let RandomNum = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
let user_guess;
// for(;;) is a great option for nonstoping loop 
for (;;) {
    user_guess = parseInt(prompt("Guess a number:"));
    
    if (user_guess === RandomNum) {
       alert("Good Guess!"); 
       break;

    } else {
        alert("Try Again!"); }
    
}

console.log("You got it! The number was " + RandomNum);

// ________________\\

// !.#2 Method. Using while with a true looping since we know!

let Random_Num = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
let u_Guess;
while(true) {
    user_guess = parseInt(prompt("Guess a number between 25 & 20:"));
    
    if (user_guess === Random_Num) {
        alert("Good Guess!");
        break; 
    } else {
        alert("Try Again!");
    }
}

// !--#3 Method calling function//
let Randomnumber = Math.floor(Math.random() * 15);
// create function
function guessNum() {
    let Guess = parseInt(prompt("guess a number between 0 & 15:"));

    if (Guess === Randomnumber) {
        alert("Good Guess!");
    } else {
        alert("Try Again!");
        guessNum(); 
    }
}
// Start calling the function
guessNum();
console.log("You got it! The number was " + Randomnumber);


// --!! program #2\\
// Mulipication table for any num user inputs \\

let X = parseInt(prompt("Enter a number:"));

// Loop the 12 table 
for (let i = 1; i <= 12; i++) {
    let result = X * i;
    console.log(X + " x " + i + " = " + (result));
}

// another way\\
let z;
do {
    z = Number(prompt(" enter a number to multiply"));
    if (isNaN(z)) {
        console.log("error.");
    }
} while (isNaN(z));

console.log("Multiplication table for " + z + ":");
for (let i = 1; i <= 12; i++) {
    console.log(z + " x " + i + " = " + (z * i));
}

// -Program #3 -\\

// Simple Calculator\\

// Write a program that asks the user to enter two numbers and a mathematical
// operator (+, -, *, or /). The program should perform the operation and display the
// result.
// just logically!!\\

// // user input for two numbers
// user input for an operator 
//logging based on operation result
// but we need to loop over the operators we have in our program

// -----SOLUTION-------------------\\

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let Op = prompt("Enter an operator (+, -, *, /):");

let result;

// Condition Checks, checking up which operator is entered \\
if (Op === '+') {
    result = num1 + num2;
} else if (Op === '-') {
    result = num1 - num2;
} else if (Op === '*') {
    result = num1 * num2;
} else if (Op === '/') {
    // Check for x/0 by zero
    if (num2 === 0) {
        result = "Error! Division by zero.";
    } else {
        result = num1 / num2;
    }
} else {
    result = "wrong operator!";
}
console.log("Result: " + result);

// using switch case\\
let n1 = Number(prompt("Enter the first number:"));
let n2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

let Result;

switch (operator) {
    case '+':
        Result = n1 + n2;
        break;
    case '-':
        Result = n1 - n2;
        break;
    case '*':
        Result = n1 * n2;
        break;
    case '/':
        if (n2 === 0) {
            Result = "no division by zero!!";
        } else {
            Result = n1 / n2;
        }
        break;
    default:
        Result = "invalid operator!";
}

console.log("Result: " + Result);


// --!! \\
//  factorial of a number using user input\\
// n! = n * (n-1) * (n-2) *..* 1

let x = Number(prompt("Enter a number to get its factorial:"));

if (x < 0) {
    alert(" factorial is unknown for negative numbers.");
} else {
    let factorial = 1;
    for (let i = 1; i <= x; i++)
     factorial *= i;
    alert("The factorial of " + x + " is " + factorial);
}


// #5\\
// Word Reverse using prompt\\

let w = prompt("enter a word:");
let reverseWord = '';

for (let i = w.length - 1; i >= 0; i--)
     {
    reverseWord += w[i];
}
alert("The reversed word is: " + reverseWord);

