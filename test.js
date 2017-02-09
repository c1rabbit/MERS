var assert = require('assert');
var should = require('chai').should;
var expect = require('chai').expect;
var mers = require('./mers');

describe('mers', function() {
  describe('generate() with invalid input', function() {
    it('orgID too short', function() {
      var test = function(){mers.generate("123456",null);}
      expect(test).to.throw(Error);
    });
    it('orgID too long', function() {
      var test = function(){ mers.generate("12345678",null);}
      expect(test).to.throw(Error);

    });
    it('loanNum too long', function() {
      var test = function(){ mers.generate("1234567","12345678901");}
      expect(test).to.throw(Error);
    });
  });
  describe('generate() with valid input', function() {
    it('sample min 1', function() {
      assert.equal(4, mers.generate("1111111","1111111111").digit);
    });
    it('sample min 2', function() {
      assert.equal(8, mers.generate("1111111","1111111").digit);
    });
    it('sample min 3', function() {
      assert.equal(7, mers.generate("1234567","1234567890").digit);
    });
    it('sample min 4', function() {
      assert.equal(0, mers.generate("1010116","0000000104").digit);
    });
    it('sample min 4 w/ letter in Loan Number', function() {
      assert.equal(0, mers.generate("1010116","V104").digit);
    });
    it('sample min 4 w/ letter in Loan Number in middle', function() {
      assert.equal(0, mers.generate("1010116","01V04").digit);
    });
    it('sample min 4 w/ "@" in Loan Number', function() {
      assert.equal(0, mers.generate("1010116","@0104").digit);
    });
    it('sample min 4 w/ "-" in Loan Number', function() {
      assert.equal(0, mers.generate("1010116","0-1-04").digit);
    });
  });
  describe('validate() with invalid input', function() {
    it('min too long', function() {
      var test = function(){ mers.validate("1234567890123456789");}
      expect(test).to.throw(Error);
    });
    it('min too short', function() {
      var test = function(){ mers.validate("12345678901234567");}
      expect(test).to.throw(Error);
    });
  });
  describe('validate() with valid input', function() {
    it('sample min 1', function() {
      assert.equal(true, mers.validate("111111111111111114"));
    });
    it('sample min 2', function() {
      assert.equal(true, mers.validate("111111100011111118"));
    });
    it('sample min 3', function() {
      assert.equal(true, mers.validate("123456712345678907"));
    });
    it('sample min 4', function() {
      assert.equal(true, mers.validate("101011600000001040"));
    });
  });
});
