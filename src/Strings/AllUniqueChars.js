let isAllUnique = function(strInput) {
    let oHash = {};

    if (strInput.length > 128) {
        return false;
    }

    for (let i = 0; i < strInput.length; i++) {
        let char = strInput.charAt(i);
        if (oHash[char]) {
            return false;
        } else {
            oHash[char] = true;
        }
    }

    return true;
};

let isAllUniqueByte = function(strInput) {
    let aChars = new Array(128);

    if (strInput.length > 128) {
        return false;
    }

    for (let i = 0; i < strInput.length; i++) {
        let char = strInput.charAt(i);
        if (aChars[char]) {
            return false;
        } else {
            aChars[char] = true;
        }
    }

    return true;
};

// If we can modify the string we can sort and then see if the same character appears next to each other
let isAllUniqueNoStorage = function(strInput) {
    for (let i = 0; i < strInput.length; i++) {
        for (let j = i + 1; j < strInput.length; j++) {
            if (strInput.charAt(i) === strInput.charAt(j)) {
                return false;
            }
        }
    }

    return true;
};

module.exports = isAllUniqueByte;