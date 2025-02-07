const prompt = require('prompt-sync')();

const personWeight = prompt('Enter your weight in kg: ');
const weight = Number(personWeight)
const personHeight = prompt('Enter your height in meters: ');
const height = Number(personHeight)

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.log('Invalid input. Please enter valid positive numbers.');
} else {
    const BMI = (personWeight / (personHeight * personHeight)).toFixed(1);
    console.log('Your BMI is:' + BMI);

    if (BMI > 40) {
        console.log('Obese Class III');
    } else if (BMI >= 35) {
        console.log('Obese Class II');
    } else if (BMI >= 30) {
        console.log('Obese Class I');
    } else if (BMI >= 25) {
        console.log('Overweight');
    } else if (BMI >= 18.5) {
        console.log('Normal');
    } else if (BMI >= 17) {
        console.log('Mild thinness');
    } else if (BMI >= 16) {
        console.log('Moderate thinness');
    } else {
        console.log('Severe Thinness');
    }
}
