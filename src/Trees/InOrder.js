function InOrder(oHead) {
    this.oHead = oHead;
    this.output = "";
}

InOrder.prototype.runTraversal = function() {
    this._traverse(this.oHead);
    return this.output;
};

InOrder.prototype._traverse = function(oNode) {
    if (!oNode) {return;}

    this._traverse(oNode.left);
    this.output += oNode.value;
    this._traverse(oNode.right);
};

module.exports = InOrder;