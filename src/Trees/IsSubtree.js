let isSubstree = function(oT1, oT2) {
    let q = [];
    q.push(oT1);

    while (q.length > 0) {
        let oNode = q.pop();
        if (!oNode) {continue;}

        // Find a match, then compare the subtrees
        if (oNode.value === oT2.value) {
            let bSame = compareTrees(oNode, oT2);
            if (bSame) {
                return true;
            }
        }

        q.push(oNode.left);
        q.push(oNode.right);
    }

    return false;
};

let compareTrees = function(oHead1, oHead2) {
    // Make sure that one isn't null and the other exists
    if ((oHead1 && !oHead2) || (!oHead1 && oHead2)) {
        return false;
    } else if (!oHead1 && !oHead2) {
        return true;
    }

    if (oHead1.value !== oHead2.value) {
        return false;
    }

    let bLeftSame = compareTrees(oHead1.left, oHead2.left);
    let bRightSame = compareTrees(oHead1.right, oHead2.right);
    return bLeftSame && bRightSame;
};

module.exports = isSubstree;