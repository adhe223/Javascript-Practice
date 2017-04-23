let partitionList = function(oNode, iPartition) {
    let oPrev = null;
    let oLessHead = null;
    let oLessTail = null;
    let oHead = oNode;

    while (oNode) {
        if (oNode.val < iPartition) {
            if (oLessTail) {
                oLessTail.next = oNode;
                oLessTail = oNode;
                oLessTail.next = null;
            } else {
                oLessTail = oNode;
                oLessTail.next = null;
                oLessHead = oLessTail;
            }

            // Now we need to remove
            if (oPrev) {
                // Not the head
                oPrev.next = oNode.next;
            } else {
                // Is the head
                oHead = oNode.next;
            }

            oNode = oNode.next;
        } else {
            oPrev = oNode;
            oNode = oNode.next;
        }
    }

    // Simply append
    oLessTail.next = oHead;
    return oLessHead;
};

module.exports = partitionList;

// A nice solution is to keep one list with head and tail pointers, and to grow in each direction.