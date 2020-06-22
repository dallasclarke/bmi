// Back-End
const bmiCalculator = require("./bmi-calculator");
    const calorieIntake = require("./calories");
        const waterIntake = require("./water-intake");
            const thr = require("./thr");

// Assigning UserInput
const gender = getInput(0);
    const age = getInput(1);
        const height = getInput(2);
            const weight = getInput(3);

if (gender === undefined) {
    return console.log("Please enter Gender, Age, Height & Weight.")
}

// Assigning functions to Variable.
let bmiResult = bmiCalculator(height, weight);
    let caloriesResult = calorieIntake(gender, age, height, weight);
        let dailyWaterIntake = waterIntake(weight);
            let heartRange = thr(age);


console.log(bmiResult)
    console.log(caloriesResult)
        console.log(dailyWaterIntake)
            console.log(heartRange)
            










function getInput(i) {
    return process.argv[i + 2];
}