


function thr(age) {
    const messageOne = "- Your target heart-rate when exercising should be, "
    if (age <= 20) {
        return messageOne + "100-170 BPM."
}   if (age <= 30) {
        return messageOne + "93-162 BPM."
}   if (age <= 40) {
        return messageOne + "89-157 BPM."
}   if (age <= 50) {
    return messageOne + "85-148 BPM."
}
    }




module.exports = thr;