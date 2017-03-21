let SuperSort = require('../src/Sort/SuperSort');
let anagramSort = require('../src/Sort/AnagramSort');

describe("Sort testing suite", function() {
    describe("SuperSort", function() {
        let arr = [4,2,7,1,3,5,1,6];

        it("returns a sorted array", function() {
            let sorter = new SuperSort(10);
            expect(sorter.sort(arr)).toEqual([1,1,2,3,4,5,6,7]);
        });
    });

    describe("Anagram sort", function() {
        it("should group the anagrams together", function() {
            let aStrings = ['dog', 'alex', 'papa', 'god', 'ppaa', 'ape'];
            let aPostSort = ["ape", "god", "dog", "ppaa", "papa", "alex"];
            let aResult = anagramSort(aStrings);
            expect(aResult).toEqual(aPostSort);
        });
    });
});
