# Code Challenge #4: checkCoupon

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. 

Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

Rather than modifying checkCoupon, write your code in `verifyDate`.  verifyDate should return true if the expiration date has not yet gone past the comparison date.  That is to say, a February 5, 2017 expiry will still be valid on January 30, 2017 but will be invalid on March 3rd, 2017.

checkCoupon will be expecting a Coupon object as its input, built using the Coupon constructor, and will reference a global variable today to access today's date.