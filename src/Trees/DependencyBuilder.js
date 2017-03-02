let Graph = require('../Helpers/Graph');
let Node = require('../Helpers/Node');

getBuildOrder = function(aProjects, aProjectPairs) {

};

buildDepsGraph = function(aProjects, aProjectPairs) {
    let oAddedDeps = {};
    let oDeps = {};
    let oGraph = new Graph();

    // Populate the dictionary telling us if we have added a value to the graph
    for (let i = 0; i < aProjects.length; i++) {
        oAddedDeps[aProjects[i]] = false;
    }

    // Parse through the pairs and make the dependency hash map
    for (let i = 0; i < aProjectPairs.length; i++) {
        let oPair = aProjectPairs[i];
        let strDependee = oPair.strDependee;
        let strDependent = oPair.strDependent;

        if (oDeps[strDependent]) {
            oDeps[strDependent].push(strDependee);
        } else {
            oDeps[strDependent] = [strDependee];
        }
    }

    // Build the graph from the hash map
    for (let key in oDeps) {
        if (oDeps.hasOwnProperty(key)) {
            addDeps(oGraph, oDeps, oAddedDeps, key);
        }
    }

};

// Where do we look to see if the node already exists and we're adding a dependee to it
addDeps = function(oGraph, oDeps, oAddedDeps, strDependent) {
    if (oAddedDeps[strDependent]) {
        return;
    }

    let aDeps = this[strDependent];
    for (let i = 0; i < aDeps.length; i++) {
        let strDependee = aDeps[i];

        // Add the dep from the key to the strDependee
        let oDependentNode = new Node(strDependent);
        oDependentNode.adjacents.push(new Node(strDependee));
        oGraph.aNodes.push(oDependentNode);
        oAddedDeps[key] = true;

        // Check if we have already added strDpendees deps
        if (oAddedDeps[strDependee]) {
            return;
        }

        // Otherwise we need to add all the deps from the strDependee
        addDeps(oGraph, oDeps, oAddedDeps, strDependee);
    }
};

getGraphNode = function(oGraph, strToFind) {
    for (let i = 0; i < oGraph.aNodes.length; i++) {
        let oFoundNode = traverseGraph(oNode, strToFind);
        if (oFoundNode) {
            return oFoundNode;
        }
    }

    return null;
};

traverseGraph = function(oNode, strToFind) {
    let stack = [];
    stack.push(oNode);
    oNode.visited = true;

    while(stack.length > 0) {
        let oCurrentNode = stack.pop();
        if (oCurrentNode.value === strToFind) {
            return oCurrentNode;
        }

        for (let i = 0; i < oCurrentNode.adjacents.length; i++) {
            let oNeighbor = oCurrentNode.adjacents[i];
            if (!oNeighbor.visited) {
                stack.push(oNeighbor);
                oNeighbor.visited = true;
            }
        }
    }

    return null;
};