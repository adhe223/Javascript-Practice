let getPossibleStairRoutes = require('../src/Recursion/StepHopper');

describe("Recursion test suite", function() {
    describe("Stair hopper possibilities", function() {
        it("should return 2 for n = 2", function() {
            expect(getPossibleStairRoutes(2)).toEqual(2);
        });

        it("should return 4 for n = 3", function() {
            expect(getPossibleStairRoutes(3)).toEqual(4);
        });
    });
});