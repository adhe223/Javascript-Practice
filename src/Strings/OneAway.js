let isOneAway = function(s1, s2) {
    let iLengthDiff = Math.abs(s1.length - s2.length);

    // If the strings aren't within one character, return false
    if (iLengthDiff > 1) {
        return false;
    }

    let isOneAway = false;
    if (iLengthDiff === 0) {
        isOneAway = replaceCheck(s1, s2);
    }

    if (s1.length < s2.length && !isOneAway) {
        isOneAway = removeCheck(s1, s2);
    }

    if (s1.length > s2.length && !isOneAway) {
        isOneAway = removeCheck(s2, s1);
    }

    return isOneAway;
};

let replaceCheck = function(s1, s2) {
    for (let i = 0; i < s2.length; i++) {
        if (s1.charAt(i) === s2.charAt(i)) {continue;}
        let strTemp = s2.substring(0, i) + s1.charAt(i) + s2.substring(i + 1);
        if (strTemp === s1) {
            return true;
        }
    }
};

let removeCheck = function(s1, s2) {
    // remove each character and see if the strings match
    for (let i = 0; i < s2.length; i++) {
        if (s1.charAt(i) === s2.charAt(i)) {continue;}
        let strTemp = s2.substring(0, i) + s2.substring(i + 1);
        if (strTemp === s1) {
            return true;
        }
    }
};

module.exports = isOneAway;