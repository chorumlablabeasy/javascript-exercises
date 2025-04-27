const fibonacci = function(number) {
    const fibonacci = [0, 1, 1]
    if (typeof(number) === "string") { Number(number) }
    if (number < 0) { return "OOPS" }
    for (let i = 3; i <= number; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci[number]
};

// Do not edit below this line
module.exports = fibonacci;
