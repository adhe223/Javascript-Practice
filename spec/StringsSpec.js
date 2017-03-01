let StringWordMapper = require('../src/Strings/StringWordMapper');

describe("Strings test suite", function() {
    describe("StringWordMapper", function() {
        let tester = new StringWordMapper();

        it("should count the words", function() {
            let strInput = "hello ann go up the ann tree hello tree tree";
            let oWordHash = tester.getCountsHash(strInput);
            expect(oWordHash["hello"]).toEqual(2);
            expect(oWordHash["ann"]).toEqual(2);
            expect(oWordHash["tree"]).toEqual(3);
            expect(oWordHash["go"]).toEqual(1);
        });

        it("should work with punctuation heavy string.", function() {
            let strInput = "clifford the big red dog (clifford). Ate the roof.....";
            let oWordHash = tester.getCountsHash(strInput);
            expect(oWordHash["clifford"]).toEqual(2);
            expect(oWordHash["ate"]).toEqual(1);
        });
    });
});