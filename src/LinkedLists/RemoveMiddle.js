let removeNode = function(oNode) {
    oNode.value = oNode.next.value;
    oNode.next = oNode.next.next;
};

module.exports = removeNode;