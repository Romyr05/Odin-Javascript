const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
	arr_len = numbers.length
  all_sum = 0
  for(let i =0 ;i<arr_len; i++){
    all_sum = all_sum + numbers[i]
    console.log(numbers[i])
  }
  console.log(`rawr ${arr_len}`)
  return all_sum;
};

const multiply = function(numbers) {
	arr_len = numbers.length
  all_multi = 1;
  for(let i =0 ;i<arr_len; i++){
    all_multi = all_multi * numbers[i]
    console.log(numbers[i])
  }
  return all_multi;
};

const power = function(num1, pow) {
	return num1 ** pow
};

const factorial = function(number) {
  if (number <= 0 || number === 1)
  {
    return 1;
  }
  else{
    return number * factorial(number-1)
  }
	
};

console.log(multiply([2, 4, 6, 8, 10, 12, 14]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
