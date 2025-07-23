const palindromes = function (string) { 


    clean = string.replace(/[^a-z0-9]/gi, "")
    clean_lower = clean.toLowerCase()

    s_right = clean_lower.length -1 
    s_left = 0

    
    while(s_left < s_right){
        if (clean_lower[s_right] !== clean_lower[s_left]){
            return false
        }
        s_right--;
        s_left++;
    }
    return true
};

console.log(palindromes('A car a man a maraca'));



// Do not edit below this line
module.exports = palindromes;
