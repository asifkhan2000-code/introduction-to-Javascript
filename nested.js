const prompt = require('prompt-sync')();

const money = parseFloat(prompt("Enter amount of money you have: "));

if (money > 500) {
    console.log('Rich Kid');
} else {
    if (money > 300) {
        console.log('Chole r ki');
    } 
    else {
        if (money > 0 && money < 300) {
            console.log('Gorib shala');
        }
        else {
            console.log('Tore dhar dite parum nah');
        }
    }
}
