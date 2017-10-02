stringy = require('../stringy.js');
console.log(stringy, stringy(3));
describe("UnitTests", function() {

  it("small_test", function() {
    // Failure message:
    // Didn't get expected result for small-sized input
    expect(stringy(3)).toBe("101");
  });

  it("medium_test", function() {
    // Failure message:
    // Didn't get expected result for medium-sized input
    expect(stringy(15)).toBe("101010101010101");
  });

  it("neo_test", function() {
    // Failure message:
    // Failed to return "1" for 1
    expect(stringy(1)).toBe("1");
  });

  it("float_test", function() {
    // Failure message:
    // Failed to round down input element. Hint: look up Math.floor
    expect(stringy(2.5)).toBe("10");
  });

});