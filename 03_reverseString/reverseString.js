const reverseString = function(string) {
    const letterArray = []
    for (let i = 0; i < string.length; i++) {
        letterArray.push(string.slice(i, i+1))
    }
    const reversedString = letterArray.reverse().join("")
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
