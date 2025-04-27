const palindromes = function (str) {
    const strArr = str.split("").map(element => element.toLowerCase())
    const filteredStrArr = strArr.filter(element => {
        return element.match(/[a-zA-Z0-9]/)
    })
    return filteredStrArr.length === filteredStrArr.reverse().length && filteredStrArr.every((value, index) => value === filteredStrArr.reverse()[index])
};

// Do not edit below this line
module.exports = palindromes;
