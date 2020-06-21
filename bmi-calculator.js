

// Calculating BMI.
function bmiCalculator(height, weight) {
    const bmi = (weight / height / height) * 703;
        const message = "- Your BMI is  "
        if (bmi < 18) {
            return message + Math.round(bmi) + "." + " You're underweight! Eat a bagel!!!"
        }       if (bmi <= 25) {
                    return message + Math.round(bmi) + "." + " Which is healthy... Good for you!"
            }   if (bmi <= 30) {
                    return message + Math.round(bmi) + "." + " Too much muscle or too much pizza?"
            }   if (bmi >= 31) {
                    return message + Math.round(bmi) + " Time to start working out!"
            }   else {
            return "You need to enter your height & weight!"
            }
        }
    

    
    
    
    




module.exports = bmiCalculator;