const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return Error("Both numbers must be positive integers,");
    }

    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
