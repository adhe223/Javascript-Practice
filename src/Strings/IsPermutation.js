let isPermutation = function(strOriginal, strPermute) {
    let oCharCounts = {};

    for (let i = 0; i < strOriginal.length; i++) {
        let char = strOriginal.charAt(i);
        if (oCharCounts[char]) {
            oCharCounts[char]++;
        } else {
            oCharCounts[char] = 1;
        }
    }

    for (let i = 0; i < strPermute.length; i++) {
        let char = strPermute.charAt(i);
        if (oCharCounts[char]) {
            oCharCounts[char]--;
            if (oCharCounts[char] == 0) {
                delete oCharCounts[char];
            } else if (oCharCounts[char] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return Object.keys(oCharCounts).length === 0;
};

module.exports = isPermutation;