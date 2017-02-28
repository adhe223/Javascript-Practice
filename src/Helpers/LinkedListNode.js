function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

LinkedListNode.prototype.appendToTail = function(oToAppend) {
    let oNode = this;
    while (oNode.next) {
        oNode = oNode.next;
    }

    oNode.next = oToAppend;
};

module.exports = LinkedListNode;