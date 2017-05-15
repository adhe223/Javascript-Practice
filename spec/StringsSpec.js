let StringWordMapper = require('../src/Strings/StringWordMapper');
let longestCommonPrefix = require('../src/Strings/LongestCommonPrefix');
let licenseStringFormatter = require('../src/Strings/LicenseStringFormatter');
let isAllUnique = require('../src/Strings/AllUniqueChars');
let isPermute = require('../src/Strings/IsPermutation');
let urlify = require('../src/Strings/URLify');
let WordCloud = require('../src/Strings/WordCloud');
let getIncreasingSubstrings = require('../src/Strings/IncreasingSubstrings');

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

    describe("Is Permutation checker", function() {
        it("should return true for dog and god", function() {
            let strOriginal = "dog";
            let strPermute = "god";
            expect(isPermute(strOriginal, strPermute)).toEqual(true);
        });

        it("should return false for dog and gog", function() {
            let strOriginal = "dog";
            let strPermute = "gog";
            expect(isPermute(strOriginal, strPermute)).toEqual(false);
        });
    });

    describe("URLifier", function() {
        it("should replace the spaces with %20", function() {
            let aInput = ['h', 'e', 'l', 'l', 'o', ' ', 'a', '', ''];
            expect(urlify(aInput, 6)).toEqual(['h', 'e', 'l', 'l', 'o', '%', '2', '0', 'a']);
        });
    });

    describe("WordCloud", function() {
        it("should count the words and add them to its hash", function() {
            let strInput = "After beating the eggs, Dana read the next step:";
            let wc = new WordCloud(strInput);
            wc.buildHash();

            expect(wc.oWordHash['after']).toEqual(1);
            expect(wc.oWordHash['the']).toEqual(2);
            expect(wc.oWordHash['eggs']).toEqual(1);
            expect(wc.oWordHash['step']).toEqual(1);
            expect(wc.oWordHash[':']).toBeUndefined();
        });

        it("should respect caps reasonably", function() {
            let strInput = "After Bill at the cake.He payed the bill after.";
            let wc = new WordCloud(strInput);
            wc.buildHash();

            expect(wc.oWordHash['after']).toEqual(2);
            expect(wc.oWordHash['bill']).toEqual(2);
        });
    });

    describe("Increasing Substrings", function() {
        it("should return ab, ad", function() {
            let str = "abad";
            let aRes = getIncreasingSubstrings(str);
            expect(aRes).toEqual(["ab", "ad"]);
        });
    });
});