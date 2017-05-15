let shuffle = require('../src/Array/Shuffle');
let HelperMethods = require('../src/Helpers/Methods');
let findDuplicate = require('../src/Array/DuplicateValue');
let greaterThanShuffle = require('../src/Array/GreaterThanShuffle');
let matrixSpiralPrint = require('../src/Array/MatrixSpiralPrint');

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

    describe("Shuffle array to have a higher greater than count than the other array", function() {
        it("should have a greater count than array B", function() {
            let arrA = [12,24,8,32];
            let arrB = [13,25,32,11];

            let aShuffled = greaterThanShuffle(arrA, arrB);
            expect(aShuffled).toEqual([24,32,8,12]);
        });
    });

    describe("Matrix Spiral Print", function() {
        it("should do it", function() {
            let m = [
                [1,2,3,4],
                [12,13,14,5],
                [11,16,15,6],
                [10,9,8,7]
            ];
            matrixSpiralPrint(m);
        });
    });
});