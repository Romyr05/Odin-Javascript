const sumAll = function(start,end) {
    result = 0
    if(start < 0 || !Number.isInteger(start) || !Number.isInteger(end) ){
        return "ERROR"
    }
    bigger = (start > end ) ? start : end
    smaller = (start < end ) ? start : end

    while(smaller <= bigger)
    {
        result = result+smaller
        smaller++;
    }
    return result
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
