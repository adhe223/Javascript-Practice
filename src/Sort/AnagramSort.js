let anagramSort = function(aStrings) {
    anagramQuicksort(aStrings, 0, aStrings.length - 1);
    return aStrings;
};

let anagramQuicksort = function(arr, iLow, iHigh) {
    let pivot,
        iPart;

    if (iLow < iHigh) {
        pivot = iHigh;
        iPart = partition(arr, pivot, iLow, iHigh);

        anagramQuicksort(arr, iPart + 1, iHigh);
    }

    return arr;
};

let partition = function(arr, pivot, low, high) {
    let pivotVal = arr[pivot],
        iPart = low;

    for(let i = low; i < high; i++) {
        if (isAnagram(arr[i], pivotVal)) {
            swap(arr, i, iPart);
            iPart++;
        }
    }

    swap(arr, high, iPart);
    return iPart;
};

let swap = function(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

let isAnagram = function (str1, str2) {
    let oChars = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let char     = str1.charAt(i);
        oChars[char] = oChars[char] ? oChars[char] + 1 : 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2.charAt(i);
        if (oChars[char]) {
            oChars[char]--;
            if (oChars[char] < 0) {
                return false;
            }
            else if (oChars[char] === 0) {
                delete oChars[char];
            }
        }
        else {
            return false;
        }
    }

    // Check the char hash is empty
    return Object.keys(oChars).length === 0;
};

module.exports = anagramSort;