const reverseString = function(string) {
    split = string.split("");
    string_len = string.length;
    let reverse = "";
    for(let i = string_len; i>0 ; i--){
    reverse += split[i-1];
}
    return reverse
};

console.log(reverseString(''))

// Do not edit below this line
module.exports = reverseString;
