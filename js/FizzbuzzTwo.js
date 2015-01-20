var FizzbuzzTwo = function() {};

FizzbuzzTwo.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

FizzbuzzTwo.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};

FizzbuzzTwo.prototype.isDivisibleByThreeAndFive = function(number) {
  return number % 3 === 0 && number % 5 === 0;
};

FizzbuzzTwo.prototype.play = function(number) {
  if (this.isDivisibleByThreeAndFive(number)) return 'FizzBuzz';
  if (this.isDivisibleByThree(number)) return 'Fizz';
  if (this.isDivisibleByFive(number)) return 'Buzz';
  return number;
};
