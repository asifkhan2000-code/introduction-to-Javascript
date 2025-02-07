const prompt = require('prompt-sync')();
let priceInput = prompt('The input price: ');
let price = Number(priceInput);
// checking whether the number is valid or not
if(isNaN(price)) {
    console.log('Invalid number');
}
// whether the number is valid
else {
    const isLeader = true;
    if(isLeader) {
        price = price > 1000 ? price/2 : price;
    }
    else {
        price += 1000
    }
    console.log('Price is: ' + price);
}