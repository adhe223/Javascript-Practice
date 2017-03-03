function DoublyLinkedNode(value, oParent) {
    this.value = value;
    this.oParent = oParent;
    this.bVisited = false;
}

module.exports = DoublyLinkedNode;