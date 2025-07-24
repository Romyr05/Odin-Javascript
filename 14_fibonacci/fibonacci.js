const fibonacci = function(n) {
    n = Number(n);
    if(n<0){
        return "OOPS"
    }
    if(n <=1){
        return n
    }
    current = 0
    next = 1;

    for(let i = 2; i<=n; i++){
        result = current + next;
        current = next;
        next = result;
    }
    return result;

};

console.log(fibonacci("-21"));





// Do not edit below this line
module.exports = fibonacci;
