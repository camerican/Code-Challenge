validEmail = require("../validateEmail");

describe("UnitTests", function() {
  it("character_at_beginning", function() {
    // Failure message:
    // There should be one valid alpha character at the beginning of the email
    expect(validEmail('a@abc.com')).toBe(true);
    expect(validEmail('Z@abc.com')).toBe(true);
    expect(validEmail('$@abc.com')).toBe(false);
    expect(validEmail('4@abc.com')).toBe(false);
  });
  it("valid_characters_before_at", function() {
    // Failure message:
    // Only valid alpha numeric characters may be before the @ symbol
    expect(validEmail('aardvark@antsbetasty.com')).toBe(true);
    expect(validEmail('sa_ss.meister@sass.com')).toBe(true);
    expect(validEmail('denni$@california')).toBe(false);
    expect(validEmail('bugs bunny@warnerbros.com')).toBe(false);
    expect(validEmail('lebron23@cleveland.com')).toBe(true);
  });
  it("at_character", function() {
    // Failure message:
    // We require an at character in the middle of the string
    expect(validEmail('joe@news.com')).toBe(true);
    expect(validEmail('@news.com')).toBe(false);
    expect(validEmail('billy@')).toBe(false);
    expect(validEmail('happy.com')).toBe(false);
  });
  it("valid_characters_after_at", function() {
    // Failure message:
    // We require valid characters after the @
    expect(validEmail('joe@.com')).toBe(false);
    expect(validEmail('victor@per%ent.com')).toBe(false);
    expect(validEmail('james@_.com')).toBe(true);
    expect(validEmail('nick@-.com')).toBe(true);
    expect(validEmail('logan@2.com')).toBe(true);
  });
  it("valid_termination_with_period_plus_word_char", function() {
    // Failure message:
    // The email must end with a valid period + word char
    expect(validEmail('prince.harry@bbc.co.uk')).toBe(true);
    expect(validEmail('me@the.best.darn.list.of.subdomains.ever.com')).toBe(true);
    expect(validEmail('trouble@period.')).toBe(false);
    expect(validEmail('sadly@here.2')).toBe(true);
    expect(validEmail('me@you')).toBe(false);
    expect(validEmail('john.mulaney@gridsystems.com.')).toBe(false);
  });
});