var assert = require('assert');
var mers = require('./mers');

describe('mers', function() {
  describe('generate() with invalid input', function() {
    it('orgID too short', function() {
      assert.equal(null, mers.generate("12345",null));
    });
    it('orgID too long', function() {
      assert.equal(null, mers.generate("1234567",null));
    });
    it('loanNum too long', function() {
      assert.equal(null, mers.generate("123456","0123456789"));
    });

  });
  describe('generate() with valid input', function() {
    it('sample min 1', function() {
      assert.equal(3, mers.generate("111111","11111"));
    });
  });
  describe('validate() with invalid input', function() {
    it('min too long', function() {
      assert.equal(null, mers.validate("012345678901234567"));
    });
    it('min too short', function() {
      assert.equal(null, mers.validate("1"));
    });
  });
  describe('validate() with valid input', function() {
    it('sample min 1', function() {
      assert.equal(true, mers.validate("1111110000111113"));
    });
  });
});
