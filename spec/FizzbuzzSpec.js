describe('Fizzbuzz', function() {

	var fizzbuzz;

	describe('knows when a number', function() {

		it('is divisible by 3', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('is NOT divisible by 3', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('is divisible by 5', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('is NOT divisible by 5', function() {
			fizzbuzz = new Fizzbuzz();
			expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
		});

	});

});