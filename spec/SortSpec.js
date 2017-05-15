let SuperSort = require('../src/Sort/SuperSort');
let anagramSort = require('../src/Sort/AnagramSort');
let Point = require('../src/Helpers/Point');
let getKPointDistance = require('../src/Sort/PointDistances');

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

    describe("Get k closest point to 0,0", function() {
        it("should return first 3", function() {
            let aPoints = [];
            aPoints.push(new Point(3, 4));
            aPoints.push(new Point(0, 0));
            aPoints.push(new Point(1, 1));
            aPoints.push(new Point(2, 2));
            aPoints.push(new Point(3, 3));

            let aRes = getKPointDistance(aPoints, 2);
            expect(aRes[0].x).toEqual(0);
            expect(aRes[1].x).toEqual(1);
        });
    });
});
