const prompt = require('prompt-sync')();
const myScore = parseFloat(prompt('Enter your obtained mark: '));
const friendScore = parseFloat(prompt('Enter your friends obtained mark: '));
if (
    isNaN(friendScore) ||
    friendScore < 0 ||
    friendScore > 100 ||
    isNaN(myScore) ||
    myScore < 0 ||
    myScore > 100
) {
    console.log('Invalid number');
} else {
    if (myScore > 80) {
        if (friendScore >= 80) {
            console.log("Let's go out for lunch");
        } else if (friendScore >= 60) {
            console.log('Good luck my friend for the next time');
        } else if (friendScore >= 40) {
            console.log('I will leave your message as unseen');
        } else {
            console.log('I will block you');
        }
    } else {
        console.log('Going to home and sleep');
    }
}
