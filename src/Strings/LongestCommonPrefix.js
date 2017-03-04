/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let iShortestLength = Number.MAX_VALUE;
    let strShortest = "";
    let aShortestChars = [];
    let iPrefixLength = Number.MAX_VALUE;

    // Get the shortest string, that is the max
    for (let i = 0; i < strs.length; i++) {
        let strCurr = strs[i];
        if (strCurr.length < iShortestLength) {
            iShortestLength = strCurr.length;
            strShortest = strCurr;
        }
    }

    // Build array of chars
    for (let i = 0; i < strShortest.length; i++) {
        aShortestChars.push(strShortest.charAt(i));
    }

    for (let i = 0; i < strs.length; i++) {
        let strCurr = strs[i];
        let iCurrPrefixLength = Number.MAX_VALUE;

        // Iterate each character up to the shortest length
        for (let j = 0; j < iShortestLength; j++) {
            if (strCurr.charAt(j) === aShortestChars[j]) {
                iCurrPrefixLength = j + 1;
            } else {
                if (iCurrPrefixLength === Number.MAX_VALUE) {iCurrPrefixLength=0;}
                iPrefixLength = iCurrPrefixLength < iPrefixLength ? iCurrPrefixLength : iPrefixLength;
                break;
            }
        }

        iPrefixLength = iCurrPrefixLength < iPrefixLength ? iCurrPrefixLength : iPrefixLength;
    }

    // Return string
    return strShortest.substring(0, iPrefixLength);
};

let longestCommonPrefixV2 = function(strs) {
    for (pos = 0; pos < strs[0].length; pos++) {
        for (word = 1; word < strs.length; word++) {
            if (strs[0].charAt(pos) !== strs[word].charAt(pos) || pos === strs[0].length) {
                return strs[0].substring(0, pos);
            }
        }
    }
    return strs[0];
};

module.exports = longestCommonPrefixV2;