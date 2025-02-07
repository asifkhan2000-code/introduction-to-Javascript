const prompt = require('prompt-sync')();

const ageInput = prompt('Enter your age: ');
const age = Number(ageInput);

if (isNaN(age)) {
    console.log('Invalid age. Please enter a number.');
} else {
    age >= 18 ? console.log('You can vote') : console.log("You can't vote");
}

let priceInput = prompt('Enter the price of the product: ');
let price = Number(priceInput);

if (isNaN(price)) {
    console.log('Invalid price. Please enter a number.');
} else {
    const isLeaderInput = prompt('Are you a leader? (yes/no): ').toLowerCase();
    const isLeader = isLeaderInput === 'yes';
    price = isLeader ? (price > 1000 ? price / 2 : price) : price + 1000;
    console.log('Price is: ' + price);
}
