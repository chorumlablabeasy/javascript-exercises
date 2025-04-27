const convertToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    let fractionalPart = celsius - Math.floor(celsius)
    let roundedFractionalPart = Math.round(fractionalPart * 10) / 10
    return celsius = Math.floor(celsius) + roundedFractionalPart
};

const convertToFahrenheit = function(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    let fractionalPart = fahrenheit - Math.floor(fahrenheit)
    let roundedFractionalPart = Math.round(fractionalPart * 10) / 10
    return fahrenheit = Math.floor(fahrenheit) + roundedFractionalPart
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
