const prompt = require('prompt-sync')();
let burgerPrice = parseFloat(prompt('Enter price of the burger: '));
if (isNaN(burgerPrice)) {
    console.log('Invalid price of the burger, enter valid number');
} else {
    let totalPrice = 0;
    if (burgerPrice > 500) {
        totalPrice = burgerPrice;
        console.log('Total price remains ' + totalPrice);
        console.log('Because cocacola is free');
    } else {
        totalPrice = burgerPrice + 30;
        console.log("Total price increases to " + totalPrice);
        console.log('Because cocacola is not free');
    }
}
