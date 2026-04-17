const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

let sum = num1 + num2;
let difference = num1 - num2;

console.log("Sum = " + sum);
console.log("Subtraction = " + difference);