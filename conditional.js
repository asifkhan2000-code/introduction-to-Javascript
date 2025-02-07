const prompt = require('prompt-sync')();

const personWeight = parseFloat(prompt('Enter your weight in kg: '));
const personHeight = parseFloat(prompt('Enter your height in meters: '));

if (isNaN(personWeight) || isNaN(personHeight) || personHeight <= 0) {
    console.log('Invalid input. Please enter valid numbers.');
} else {
    const BMI = parseFloat((personWeight / (personHeight * personHeight)).toFixed(1));
    console.log(`Your BMI is: ${BMI}`);

    if (BMI >= 18.5 && BMI <= 25) {
        console.log('Normal');
    } else if (BMI > 40) {
        console.log('Obese Class III');
    } else if (BMI > 35) {
        console.log('Obese Class II');
    } else if (BMI > 30) {
        console.log('Obese Class I');
    } else if (BMI > 25) {
        console.log('Overweight');
    } else if (BMI > 17 && BMI < 18.5) {
        console.log('Mild thinness');
    } else if (BMI > 16) {
        console.log('Moderate thinness');
    } else {
        console.log('Severe Thinness');
    }
}
