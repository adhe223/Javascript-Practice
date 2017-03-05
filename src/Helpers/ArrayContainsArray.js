let arrayContainsArray = function(aGiven ,aArrs) {
    let bContains = false;

    for (let i = 0; i < aArrs.length; i++) {
        if (aArrs[i].length !== aGiven.length) {
            continue;
        }

        let bSame = true;
        for (let j = 0; j < aArrs[i].length; j++) {
            if (aArrs[i][j] !== aGiven[j]) {
                bSame = false;
                break;
            }
        }

        if (bSame) {
            return true;
        }
    }

    return false;
};

module.exports = arrayContainsArray;