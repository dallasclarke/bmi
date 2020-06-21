

// Calorie calculator.
function calorieIntake(gender, age, height, weight) {
    const male = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
        const female = 665 + (4.3 * weight) + (4.7 * height) - (6.8 * age);
            const messageOne = "- Based on your inputs, your resting calorie intake as a male is,  "
                const messageTwo = "- Based on your inputs, your resting calorie intake as a female is, "
            if (gender === 'male') {
                return messageOne + Math.round(male) + '.';
    }       if  (gender === 'female') {
                return messageTwo + Math.round(female);
    }       if (gender === undefined) {
                return "Please enter your gender";
    }               


}




module.exports = calorieIntake;