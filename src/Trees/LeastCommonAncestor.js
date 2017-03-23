let getLeastCommonAncestor = function(oHead, oNode1, oNode2) {
    let firstPath = [],
        secondPath = [];

    firstPath = traverse(oHead, oNode1, firstPath);
    secondPath = traverse(oHead, oNode2, secondPath);
    let oSolution = null;

    while (firstPath.length > 0 && secondPath.length > 0) {
        let oNode1 = firstPath.shift();
        let oNode2 = secondPath.shift();

        if (oNode1 === oNode2) {
            oSolution = oNode1;
        }
    }

    return oSolution;
};

let traverse = function(oNode, oToFind, aPath) {
    if (!oNode) {return;}

    aPath.push(oNode);
    if (oNode === oToFind) {
        return aPath;
    }

    return traverse(oNode.left, oToFind, aPath.slice()) || traverse(oNode.right, oToFind, aPath.slice());
};

module.exports = getLeastCommonAncestor;