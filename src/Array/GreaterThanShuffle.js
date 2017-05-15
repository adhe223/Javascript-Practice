/*
 There are two integer array arrayA and arrayB in the same size and two integer countA and countB. If arrayA[i] > arrayB[i], then we increase countA by 1, if arrayB[i]>arrayA[i], then we increase countB by 1. We will do nothing otherwise. Now you are given arrayA and arrayB, write a function to shuffle arrayA and so you can get countA > countB. Assume the input array are always valid, not empty and the input is guaranteed to have answer.

 For example:

 arrayA = [12, 24, 8, 32]
 arrayB = [13, 25, 32, 11]

 After shuffle:

 arrayA = [24, 32, 8, 12]
 arrayB = [13, 25, 32, 11]
 */

let greaterThanShuffle = function(arrA, arrB) {
    let aRes = [];
    arrA.sort(function(a, b){return a-b});  // Sort decreasing

    for (let i = 0; i < arrB.length; i++) {
        let iFirstGreaterIndx = getfirstGreaterThan(arrA, arrB[i], 0, arrA.length - 1);
        if (iFirstGreaterIndx > -1) {
            aRes.push(arrA[iFirstGreaterIndx]);
            arrA.splice(iFirstGreaterIndx, 1)
        } else {
            // Add our lowest valued number since we can't go greater anyway
            aRes.push(arrA.shift());
        }
    }

    return aRes;
};

function getfirstGreaterThan(aSorted, iTarget, iStart, iEnd) {
    if (iStart === iEnd && aSorted[iEnd] > iTarget) {
        return iEnd;
    } else if (iStart === iEnd) {
        return -1;
    }

    let iMid = Math.floor((iStart + iEnd) / 2);
    if (aSorted[iMid] > iTarget) {
        // Not iMid + 1 because there may be no other numbers greater than the target, so we hae to keep the number at iMid around
        return getfirstGreaterThan(aSorted, iTarget, iStart, iMid);
    } else {
        return getfirstGreaterThan(aSorted, iTarget, iMid + 1, iEnd);
    }
}

module.exports = greaterThanShuffle;