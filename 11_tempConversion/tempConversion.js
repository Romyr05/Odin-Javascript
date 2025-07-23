const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5/9)
  return Math.round(temp * 10) / 10
};

const convertToFahrenheit = function(temp) {
  temp = temp * 1.8 + 32
  return Math.round(temp * 10) / 10
};

console.log(convertToCelsius(32))
console.log(convertToFahrenheit(100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
