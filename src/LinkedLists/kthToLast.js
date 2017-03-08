let getKthToLast = function(oHead, k) {
    let oRunner = oHead;
    for (let i = 0; i < k; i++) {
        if (oRunner) {
            oRunner = oRunner.next;
        } else {
            return null;
        }
    }

    while (oRunner) {
        oHead = oHead.next;
        oRunner = oRunner.next;
    }

    return oHead;
};

module.exports = getKthToLast;