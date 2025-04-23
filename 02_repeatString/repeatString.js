const repeatString = function(string, num) {
    let emptyStr = ""
    if (num < 0) {
        emptyStr = "ERROR"
    } else {
        for (i = 0; i < num; i++) {
            emptyStr += string
        }
    }
    return emptyStr
};

// Do not edit below this line
module.exports = repeatString;
