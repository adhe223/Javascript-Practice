let StringWordMapper = require('../src/Strings/StringWordMapper');
let longestCommonPrefix = require('../src/Strings/LongestCommonPrefix');
let licenseStringFormatter = require('../src/Strings/LicenseStringFormatter');
let isAllUnique = require('../src/Strings/AllUniqueChars');

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

    describe("longest common prefix", function() {
        it("should return a when given ['a'']", function() {
            let arr = ['a'];
            expect(longestCommonPrefix(arr)).toEqual("a");
        });

        it("should return '' when given ['a', 'b']", function() {
            let arr = ['a', 'b'];
            expect(longestCommonPrefix(arr)).toEqual("");
        });
    });

    describe("license string formmater", function() {
        it("should return the correct string", function() {
            expect(licenseStringFormatter("2-4A0r7-4k", 4)).toEqual("24A0-R74K");
        });
    });

    describe("All characters unique checker", function() {
        it("should return true for all uniques", function() {
            let strTest = "hi alex";
            expect(isAllUnique(strTest)).toEqual(true);
        });

        it("should return false for not all uniques", function() {
            let strTest = "hello there";
            expect(isAllUnique(strTest)).toEqual(false);
        });
    });
});