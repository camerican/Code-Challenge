reverseNumbers = require('../reverseNumbers');

describe("UnitTests", function() {

  it("basic_test", function() {
    // Failure message:
    // Expect number to be returned as an array of numbers in reverse order
    expect(JSON.stringify(reverseNumbers(1234))).toBe(JSON.stringify([4,3,2,1]));
  });
  it("agent_zero", function() {
    // Failure message:
    // Argument of 0 should return an array with 0 in it
    expect(JSON.stringify(reverseNumbers(0))).toBe(JSON.stringify([0]));
  });
  it("long_test", function() {
    // Failure message:
    // Long sequence of numbers should be processed correctly
    expect(JSON.stringify(reverseNumbers(75242435513))).toBe(JSON.stringify([3,1,5,5,3,4,2,4,2,5,7]));
  });

});