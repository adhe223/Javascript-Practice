let getPossibleStairRoutes = require('../src/Recursion/StepHopper');
let RoboVacuum = require('../src/Recursion/RoboVacuum');

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
        it("should traverse to bottom right", function() {
            let mTest = [
                [true, true, false, true],
                [false, true, false, true],
                [true, true, true, true],
                [false, false, true, true]
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
});