let SuperSort = require('../../src/Sort/SuperSort');

describe("SuperSort", function() {
    let arr = [4,2,7,1,3,5,1,6];

    it("returns a sorted array", function() {
        let sorter = new SuperSort(10);
        expect(sorter.sort(arr)).toEqual([1,1,2,3,4,5,6,7]);
    });
});