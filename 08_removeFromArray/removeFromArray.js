const removeFromArray_ownSOL = function(array,...number) {
    for(let i = 0; i< array.length; i++){
        for(let j = 0; j < number.length; j++){
            if(array[i] === number[j]){
                array.splice(i,1)
                i--
            }
        }

    }
    return array
};

const removeFromArray = function(array,...number){
    const newArr = [];
    array.map((item) => {
        if(!number.includes(item)){
            newArr.push(item)
        }
    })
    return newArr
}


console.log(removeFromArray([1, 2, 3, 4], 3,2));

// Do not edit below this line
module.exports = removeFromArray;