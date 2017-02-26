let findDuplicate = require('../../src/Array/DuplicateValue');

describe("Find Duplicate", function() {
    it("should find the duplicate", function() {
        let arr = [1,2,2,3];
        expect(2).toEqual(findDuplicate(arr, 3));
    });
});