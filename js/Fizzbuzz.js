var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  if (number % 3 === 0) {
    return 'Fizz';
  }
  else {
    return number;
  }
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return 'Buzz';
  }
  else {
    return number;
  }
};

Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }
  else {
    return number;
  }
};