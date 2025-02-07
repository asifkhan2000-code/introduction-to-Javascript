const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Enter first number: '));
let num2 = parseFloat(prompt('Enter second number: '));

if (isNaN(num1) || isNaN(num2) || num1 === num2) {
    console.log('Invalid numbers. Please enter valid, different numbers.');
} else {
    let result;
    
    if (num1 > num2) {
        result = num1 * 2;
    } else {
        result = num1 + num2;
    }

    console.log('Result is: ' + result);
}
