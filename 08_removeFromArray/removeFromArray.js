const removeFromArray = function(array,...number) {
    for(let i =0; i<array.length;i++)
    {
        for(let j = 0; j<number.length;j++){
            console.log(number[j])
            if(number[j] === array[i])
            {
                array.splice(i,1)
                i--
            }
        }
    }
    return array
};

console.log(removeFromArray([1, 2, 3, 4], 3,2));

// Do not edit below this line
module.exports = removeFromArray;