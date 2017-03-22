let findMagicIndex = function(arr) {
    return findMagicIndexWorker(arr, 0, arr.length - 1);
};

let findMagicIndexWorker = function(arr, start, end) {
    if (end < start) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);
    let val = arr[mid];

    if (val === mid) {
        return mid;
    }

    if (val < mid) {
        return findMagicIndexWorker(arr, mid + 1, end);
    } else {
        return findMagicIndexWorker(arr, start, mid - 1);
    }
};

module.exports = findMagicIndex;