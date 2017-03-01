function IsBST() {
    this.iLastVal = Number.MIN_VALUE;
}

IsBST.prototype.checkTree = function(oHead) {
    if (!oHead) {
        return true;
    }

    if (!this.checkTree(oHead.left)) {return false;}

    if (this.iLastVal > oHead.value) {
        return false;
    } else {
        this.iLastVal = oHead.value;
    }

    return this.checkTree(oHead.right);
};

module.exports = IsBST;