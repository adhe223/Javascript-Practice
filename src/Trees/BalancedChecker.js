function BalancedChecker() {

}

BalancedChecker.prototype.isBalanced = function(oHead) {
    return this.getHeight(oHead) !== Number.MIN_VALUE;
};

BalancedChecker.prototype.getHeight = function(oNode) {
    if (!oNode) {
        return -1;
    }

    let iLeftHeight = this.getHeight(oNode.left);
    if (iLeftHeight === Number.MIN_VALUE) {
        return iLeftHeight;
    }

    let iRightHeight = this.getHeight(oNode.right);
    if (iRightHeight === Number.MIN_VALUE) {
        return iRightHeight;
    }

    if (Math.abs(iLeftHeight - iRightHeight) > 1) {
        return Number.MIN_VALUE;
    } else {
        return Math.max(iLeftHeight, iRightHeight) + 1;
    }
};

module.exports = BalancedChecker;