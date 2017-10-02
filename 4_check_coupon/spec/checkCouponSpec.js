Coupon = require("../checkCoupon.js");

describe("UnitTests", function() {

  it("valid_coupon_confirm", function() {
    // Failure message:
    // Coupon with future date should be valid
    expect((new Coupon('ABCD','July 4, 2017')).checkCoupon()).toBe(true);
  });
  it("invalid_coupon_reject", function() {
    // Failure message:
    // Coupon with past date should be invalid
    expect((new Coupon('1234','April 4, 2016')).checkCoupon()).toBe(false);
  });
  it("invalid_coupon_reject2", function() {
    // Failure message:
    // Hint: Make certain you convert the string representation of dates to Date objects (e.g. new Date("July 4, 2016") will create a date object)
    expect((new Coupon('X8X8','November 11, 2016')).checkCoupon()).toBe(false);
  });
  it("valid_coupon_confirm2", function() {
    // Failure message:
    // Hint: Make certain you're comparing Date objects, not String representations of dates
    expect((new Coupon('ZZN3','April 25, 2018')).checkCoupon()).toBe(true);
  });
});