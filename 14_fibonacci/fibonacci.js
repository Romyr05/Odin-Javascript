function fibonacci(number){
    if(number < 0){
        return "OOPS"
    }

    let n1 = 0
    let n2 = 1
    let sum = 0

    for(let i = 2; i<=number;i++){
        sum = n1 + n2
        n1 = n2
        n2 = sum
    }
    return sum
}

test = fibonacci(4)
console.log(test);
