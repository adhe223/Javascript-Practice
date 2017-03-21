let sortedArrayMerge = function (arr1, iArr1, arr2) {
    let iArr2 = arr2.length - 1,
        iCurrent = iArr1.length - 1;

    while (iArr1 >= 0 && iArr2 >= 0) {
        if (arr1[iArr1] < arr2[iArr2]) {
            arr1[iCurrent] = arr1[iArr1];
            iArr1--;
        } else {
            arr2[iCurrent] = arr2[iArr2];
            iArr2--;
        }
        iCurrent--;
    }

    // If items are left in arr2, copy them
    while (iArr2 >= 0) {
        arr1[iCurrent] = arr2[iArr2];
        iArr2--;
        iCurrent--;
    }
};

module.exports = sortedArrayMerge;