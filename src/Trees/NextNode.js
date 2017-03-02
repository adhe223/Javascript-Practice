getNextNode = function(oNode) {
    // Head node?
    if (!oNode.oParent) {
        if (oNode.left) {
            return traverseLeft(oNode);
        } else {
            return null;
        }
    }

    // Left child?
    if (oNode.oParent.left && oNode.oParent.left === oNode) {
        if (oNode.right) {
            traverseLeft(oNode.right);
        } else {
            return oNode.oParent;
        }
    }

    // Right child
    if (oNode.right) {
        return traverseRight(oNode)
    } else {
        return null;
    }
};

traverseLeft = function(oNode) {
    if (!oNode.left) {
        return oNode;
    } else {
        return traverseLeft(oNode.left);
    }
};

traverseRight = function(oNode) {
    if (!oNode.right) {
        return oNode;
    } else {
        return traverseRight(oNode.right);
    }
};

module.exports = getNextNode;

