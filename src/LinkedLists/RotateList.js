let rotateList = function(oHead, k) {
    if (!oHead) {return null;}
    let oOriginalHead = oHead;
    let oNewHead;
    let oBeforeNewHead;

    for (let i = 0; i < k; i++) {
        if (i === k-1) {
            oBeforeNewHead = oHead;
        }

        if (oHead.next) {
            oHead = oHead.next;
        } else {
            oHead = oOriginalHead;
        }
    }

    // Advanced to the new head
    oNewHead = oHead;

    // The list is correct until we hit the tail, at the tail, we set the original head as the next
    while (oHead.next) {
        oHead = oHead.next;
    }

    oHead.next = oOriginalHead;
    oBeforeNewHead.next = null;

    return oNewHead;
};

module.exports = rotateList;