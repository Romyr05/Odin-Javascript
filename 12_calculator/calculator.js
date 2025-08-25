function add (num1, num2) {
  return num1 + num2
}

function subtract (num1, num2){
  return num1 - num2
}

function sum(array){
  length = array.length
  let sum_total = 0
  for(let i = 0;i<length;i++){
    sum_total += array[i]
  }
  return sum_total
}


function multiply(array){
  length = array.length
  let multiply_total = 1
  for(let i = 0;i<length;i++){
    multiply_total *= array[i]
  }
  return multiply_total
}

function power(number , exponent)
{
  return number ** exponent
}

function factorial(number){
  if(number === 1 || number === 0){
    return 1
  }
  return number * factorial(number-1)
}

test = add(0,0)
console.log(test);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
