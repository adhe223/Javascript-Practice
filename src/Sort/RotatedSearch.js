let findElement = function(aNums, iLeft, iRight, iToFind) {
    if (iRight < iLeft) {
        return -1;
    }

    let iMid = Math.floor((iLeft + iRight) / 2);
    if (aNums[iMid] === iToFind) {
        return iMid;
    }

    if (aNums[iLeft] < aNums[iMid]) {
        // We can trust the left side
        if (aNums[iLeft] <= iToFind && aNums[iMid] > iToFind) {
            // Go left
            return findElement(aNums, iLeft, iMid - 1, iToFind);
        } else {
            // Go right
            return findElement(aNums, iMid + 1, iRight, iToFind);
        }
    } else if (aNums[iRight] > aNums[iMid]) {
        // We can trust the right side
        if (aNums[iRight] >= iToFind && aNums[iMid] < iToFind) {
            // Go right
            return findElement(aNums, iMid + 1, iRight, iToFind);
        } else {
            // Go left
            return findElement(aNums, iLeft, iMid - 1, iToFind);
        }
    } else if (aNums[iLeft] === aNums[iMid]) {
        // Left is repeats. Check if right isn't repeats
        if (aNums[iRight] !== aNums[iMid]) {
            // Go right
            return findElement(aNums, iMid + 1, iRight, iToFind);
        } else {
            // Gross, do both
            let iRes = findElement(aNums, iLeft, iMid + 1, iToFind);
            if (iRes === -1) {
                return findElement(aNums, iMid + 1, iRight, iToFind);
            } else {
                return iRes;
            }
        }
    }
    
    return -1;
};

module.exports = findElement;