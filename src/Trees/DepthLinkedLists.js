let LinkedListNode = require('../Helpers/LinkedListNode');

function DepthLinkedLists() {
}

DepthLinkedLists.prototype.getDepthLists = function(oHead) {
    let linkedLists = [];
    let q = [];
    let depth = 0;

    // This queue holds objects that have a LinkedListNode and a depth
    q.push({
        node: oHead,
        depth: depth
    });
    depth++;

    while (q.length > 0) {
        let oInfo = q.shift();
        let oNode = oInfo.node;
        depth = oInfo.depth;

        let oLinkedListNode = new LinkedListNode(oNode.value);
        if (linkedLists[depth]) {
            linkedLists[depth].appendToTail(oLinkedListNode);
        } else {
            linkedLists.push(oLinkedListNode);
        }

        if (oNode.left) {
            q.push({
                node: oNode.left,
                depth: depth + 1
            });
        }
        if (oNode.right) {
            q.push({
                node: oNode.right,
                depth: depth + 1
            });
        }
    }

    return linkedLists;
};

module.exports = DepthLinkedLists;