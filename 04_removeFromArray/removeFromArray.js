const removeFromArray = function(arr, ...elements) {
    const filtered = arr.filter(item => !elements.includes(item));
    arr.length = 0;
    arr.push(...filtered);
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
