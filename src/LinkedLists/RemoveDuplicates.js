let removeDuplicates = function(oHead) {
    let oValues = {};
    let oPrev = null;

    while (oHead) {
        if (oValues[oHead.value]) {
            oPrev.next = oHead.next;
            // Prev will stay the same
        } else {
            oValues[oHead.value] = true;
            oPrev = oHead;
        }
        oHead = oHead.next;
    }
};

module.exports = removeDuplicates;