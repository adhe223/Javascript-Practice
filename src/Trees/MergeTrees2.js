let mergeTrees = function(oFirst, oSecond) {
    if (!oSecond) { return; }

    mergeTrees(oFirst, oSecond.left);
    mergeTrees(oFirst, oSecond.right);
    oSecond.left = null;
    oSecond.right = null;

    insertNode(oFirst, oSecond);
};

function insertNode(oFirst, oNode) {
    if (oNode.value < oFirst.value) {
        if (oFirst.left) {
            insertNode(oFirst.left, oNode);
        } else {
            oFirst.left = oNode;
        }
    } else {
        if (oFirst.right) {
            insertNode(oFirst.right, oNode);
        } else {
            oFirst.right = oNode;
        }
    }
}

module.exports = mergeTrees;