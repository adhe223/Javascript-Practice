findDuplicate = function(arriOneDup, iMax) {
    // Find the sum of 1...n
    let iSum = (Math.pow(iMax, 2) + iMax) / 2;

    let iArrSum = 0;
    for (let i = 0; i < arriOneDup.length; i++) {
        iArrSum += arriOneDup[i];
    }

    return iArrSum - iSum;
};

module.exports = findDuplicate;