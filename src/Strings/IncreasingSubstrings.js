/*
 Write a function that receives a string an returns a list of all the substrings (of length >= 2) composed by consecutive characters. E.g input : "BCCDE" , output: ["BC","CD","CDE","DE"]
 */

let getIncreasingSubstrings = function(str) {
    let aRes = [];
    for (let i = 0; i < str.length - 1; i++) {
        isIncreasing(str.substring(i, str.length), aRes);
    }

    return aRes;
};


function isIncreasing(str, aRes) {
    let iLast = str.charCodeAt(0);
    for (let i = 1; i < str.length; i++) {
        let iCurrent = str.charCodeAt(i);
        if (iLast >= iCurrent) {
            return;
        }

        aRes.push(str.substring(0, i + 1));
        iLast = iCurrent;
    }
}

module.exports = getIncreasingSubstrings;