const palindromes = function (string) { 
    alphaNumeric_lower = string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    console.log(alphaNumeric_lower)

    let all = alphaNumeric_lower.length
    for(let i = 0; i<alphaNumeric_lower.length;i++){
        if(alphaNumeric_lower[all - 1] !== alphaNumeric_lower[i]){
            return false
        }
        all--
    }
    return true
};

console.log(palindromes('A car a man a maraca'));



// Do not edit below this line
module.exports = palindromes;
