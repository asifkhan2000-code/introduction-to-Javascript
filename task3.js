const prompt = require('prompt-sync')();
let ticketFare = parseFloat(prompt('Ticket fare: $'));
const age = parseFloat(prompt('Enter your age: '));
let discountedFare = 0;
if (isNaN(age) || age <= 0) {
    console.log('Invalid number.Enter valid age number.');
} else {
    if (age <= 10) {
        console.log("You don't need to pay ticket fair");
    } else if (age >= 60) {
        // 15% discount
        discountedFare = ticketFare * 85 / 100;
        console.log(`Discounted fare: $${discountedFare}`)
        } else {
        let isStudent = prompt(
            'Whether you are student or not(yes or no): '
        ).toLowerCase();
        isStudent = isStudent === 'yes';
        if (isStudent) {
            // 50% discount
            discountedFare = ticketFare / 2;
        console.log(`Discounted fare: $${discountedFare}`);
        } else {
            console.log(`No discount, fare remains: $${ticketFare}`)
        }
    }
}
