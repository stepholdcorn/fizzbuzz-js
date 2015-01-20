describe('Fizzbuzz', function() {

	var fizzbuzz;

	describe('knows when a number', function() {

		it('is divisible by 3', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual('Fizz');
		});

		it('is NOT divisible by 3', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByThree(1)).toEqual(1);
		});

		it('is divisible by 5', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByFive(5)).toEqual('Buzz');
		});

		it('is NOT divisible by 5', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByFive(7)).toEqual(7);
		});

		it('is divisible by 3 and 5', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toEqual('FizzBuzz');
		});

		it('is NOT divisible by 3 and 5', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByThreeAndFive(12)).toEqual(12);
		});

	});

});