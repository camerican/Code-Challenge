fibonacci = require("../fibonacci");

describe("UnitTests", function() {

  it("add", function() {
    // Failure message:
    // Your add function must add 1 and 2 to produce 3
    expect(add(1, 2)).toBe(3);
  });
  it("first_digit", function() {
    // Failure message:
    // First digit should be 1
    expect(fibonacci(1)).toBe(1);
  });
  it("second_digit", function() {
    // Failure message:
    // Second digit should be 1
    expect(fibonacci(2)).toBe(1);
  });
  it("third_digit", function() {
    // Failure message:
    // Third digit should be 2
    expect(fibonacci(3)).toBe(2);
  });
  it("0th_digit", function() {
    // Failure message:
    // Should return 0 for 0
    expect(fibonacci(0)).toBe(0);
  });
  it("4th_digit", function() {
    // Failure message:
    // Should return 3 for 4
    expect(fibonacci(4)).toBe(3);
  });
  it("6th_digit", function() {
    // Failure message:
    // Should return 8 for 6
    expect(fibonacci(6)).toBe(8);
  });
  it("100th_digit", function() {
    // Failure message:
    // Should return correct result for 100th digit
    expect(fibonacci(100)).toBe(354224848179262000000);
  });
  it("random_tests", function() {
    // Failure message:
    // Must pass battery of random tests
    function fibTest( x ) {
      let last = 1
      , current = 0;
      for( let i=0, temp; i<x; i++ ) {
        temp = current;
        current = last + current;
        last = temp;
      }
      return current;
    }
    for(let i=0, rand; i<50; i++) {
      rand = Math.floor(Math.random() * 1000);
      expect(fibonacci(rand)).toBe(fibTest(rand));
    }
  });
});