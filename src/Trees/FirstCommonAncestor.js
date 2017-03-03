// Given two doubley linked nodes, find the first common ancestor in a binary tree
getFirstAncestor = function(oNode1, oNode2) {
    // Traverse up the tree for each, marking nodes as you go
    while (oNode1 || oNode2) {
        if (oNode1) {
            if (oNode1.visited === true) {
                return oNode1;
            }
            oNode1.visited = true;
            oNode1 = oNode1.oParent;
        }

        if (oNode2) {
            if (oNode2.visited === true) {
                return oNode2;
            }
            oNode2.visited = true;
            oNode2 = oNode2.oParent;
        }
    }
};

module.exports = getFirstAncestor;