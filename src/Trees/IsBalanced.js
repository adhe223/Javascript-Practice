let isBalanced = function(oHead) {
    if (getDepth(oHead) === -1) {
        return false;
    } else {
        return true;
    }
};

function getDepth(oNode) {
    // Base case
    if (!oNode) {return 0;}

    let leftDepth = getDepth(oNode.left);
    if (leftHeight === -1) {
        return -1;
    }

    let rightDepth = getDepth(oNode.right);
    if (rightDepth === -1) {
        // Bubble up
        return -1;
    }

    // Do Work
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return -1;
    }

    // Return our depth
    return 1 + Math.max(leftDepth, rightDepth);
}

module.exports = isBalanced;