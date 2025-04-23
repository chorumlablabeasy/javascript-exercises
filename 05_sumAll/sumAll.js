const sumAll = function(num1, num2) {
    if ((num1 >= 0 && num2 >= 0) &&
        (typeof(num1) === "number" && typeof(num2) === "number") &&
        (Number.isInteger(num1) && Number.isInteger(num2))) {
        const bigNum = Math.max(num1, num2)
        const smallNum = Math.min(num1, num2)
        const emptyArray = []
        for (let i = smallNum; i <= bigNum; i++) {
            emptyArray.push(i)
        }
        return emptyArray.reduce((sum, number) => sum += number, 0)
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;