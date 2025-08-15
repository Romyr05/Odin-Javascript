function repeatString(str, number){
    if(number < 0){
        return "ERROR"
    }
    let repeated = ""
    for(let i = 0;i<number;i++)
    {
        repeated = repeated + str
    }   
    return repeated
}

console.log(repeatString('',-1))


module.exports = repeatString;