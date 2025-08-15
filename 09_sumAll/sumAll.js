const sumAll = function(start,end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end))  {
        return "ERROR"
    }

    let small , big;
    (start > end) 
    ? (big = start, small = end)
    : (small = start, big = end);

    let result = 0
    for(let i = small; i <= big; i++)
    {
        result += i
    }
    return result
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
