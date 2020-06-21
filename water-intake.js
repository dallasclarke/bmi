

// Calculating water intake in ounces. 
function waterIntake(weight) {
    const intakeOz = weight / 2;
        const messageOne = "- You need to drink a minimum of ";
            const messageTwo = " Oz's of water daily to prevent dehydrations!";
        if (weight === undefined) {
            return "Please enter your weight!";
        }       else {
                    return messageOne + intakeOz + messageTwo;
                }
}




module.exports = waterIntake;