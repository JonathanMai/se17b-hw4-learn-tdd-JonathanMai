var assert = require("assert"); // core module
var C = require('../cash.js');  // our module


describe('Cash Register', function(){
  describe('Module C', function(){
	it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
	// First test
	  it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);// Checks if we get the right change.
	})
	// Second test
	it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);// Checks if we get the right change.
	})
	// Third test
	it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
    assert.deepEqual(C.getChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);// Checks if we get the right change.
	});
  })
});  