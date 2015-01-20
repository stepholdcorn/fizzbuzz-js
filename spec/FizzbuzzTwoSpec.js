describe('FizzbuzzTwo', function() {

  var fizzbuzztwo;

  describe('knows when a number', function() {

    it('is divisible by 3', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.isDivisibleByThree(3)).toBe(true);
    });

    it('is NOT divisible by 3', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.isDivisibleByThree(4)).toBe(false);
    });

    it('is divisible by 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.isDivisibleByFive(5)).toBe(true);
    });

    it('is NOT divisible by 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.isDivisibleByFive(7)).toBe(false);
    });

    it('is divisible by 3 and 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('is NOT divisible by 3 and 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.isDivisibleByThreeAndFive(12)).toBe(false);
    });

  });

  describe('displays the correct word when a number', function() {

    it('is divisible by 3', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.play(3)).toEqual('Fizz');
    });

    it('is NOT divisible by 3', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.play(4)).toEqual(4);
    });

    it('is divisible by 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.play(5)).toEqual('Buzz');
    });

    it('is NOT divisible by 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.play(7)).toEqual(7);
    });

    it ('is divisible by 3 and 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.play(15)).toEqual('FizzBuzz');
    });

    it ('is NOT divisible by 3 and 5', function() {
      fizzbuzztwo = new FizzbuzzTwo();
      expect(fizzbuzztwo.play(12)).toEqual('Fizz');
    });

  });

});