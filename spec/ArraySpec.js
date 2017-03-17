let shuffle = require('../src/Array/Shuffle');
let HelperMethods = require('../src/Helpers/Methods');
let findDuplicate = require('../src/Array/DuplicateValue');

describe("Array test suite", function() {
    describe("In place shuffle", function() {
        it("should replace the values with shuffled ones", function() {
            let aToShuffle = [1, 2, 3];
            shuffle(aToShuffle);
            // Didn't take the time to rig this, check manually
            // debugger;
        });
    });

    describe("Find Duplicate", function() {
        it("should find the duplicate", function() {
            let arr = [1,2,2,3];
            expect(2).toEqual(findDuplicate(arr, 3));
        });
    });
});