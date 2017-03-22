let getPossibleStairRoutes = require('../src/Recursion/StepHopper');
let RoboVacuum = require('../src/Recursion/RoboVacuum');
let findMagicIndex = require('../src/Recursion/MagicIndex');
let getPowerSet = require('../src/Recursion/PowerSet');

describe("Recursion test suite", function() {
    describe("Stair hopper possibilities", function() {
        it("should return 2 for n = 2", function() {
            expect(getPossibleStairRoutes(2)).toEqual(2);
        });

        it("should return 4 for n = 3", function() {
            expect(getPossibleStairRoutes(3)).toEqual(4);
        });
    });

    describe("Robovacuum", function() {
        it("should traverse to bottom right tricky", function() {
            let mTest = [
                [true, true, false, true],
                [false, true, false, true],
                [true, true, true, true],
                [false, false, true, true]
            ];
            let oRobo = new RoboVacuum(mTest);

            expect(oRobo.walk(0, 0)).toEqual(true);
        });

        it("should traverse to bottom right", function() {
            let mTest = [
                [true, true, true, true],
                [true, true, true, true],
                [true, true, false, false],
                [true, true, true, true]
            ];
            let oRobo = new RoboVacuum(mTest);

            expect(oRobo.walk(0, 0)).toEqual(true);
        });

        it("should traverse to bottom right corridor", function() {
            let mTest = [
                [true, false, false, true],
                [true, false, false, true],
                [true, false, false, false],
                [true, true, true, true]
            ];
            let oRobo = new RoboVacuum(mTest);

            expect(oRobo.walk(0, 0)).toEqual(true);
        });

        it("should get stuck", function() {
            let mTest = [
                [true, true, false, true],
                [false, false, false, true],
                [true, true, true, true],
                [false, false, true, true]
            ];
            let oRobo = new RoboVacuum(mTest);

            expect(oRobo.walk(0, 0)).toEqual(false);
        });
    });

    describe("MagicIndex finder", function() {
        it("should return 3", function() {
            let aTest = [-5, 0, 1, 3, 8];
            expect(findMagicIndex(aTest)).toEqual(3);
        });

        it("should return -1", function() {
            let aTest = [-5, 0, 1, 2, 8];
            expect(findMagicIndex(aTest)).toEqual(-1);
        });
    });
});