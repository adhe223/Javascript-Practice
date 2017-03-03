let Graph = require('../Helpers/Graph');
let Node = require('../Helpers/Node');

// TODO: This problem. Takes a ton of code.
getBuildOrder = function(aProjects, aProjectPairs) {
    let oDepsGraph = addPairsToGraph(aProjectPairs);
};

touchAllNodes = function(oNode, oProjects) {
    let q = [];
    q.push(oNode);
    oNode.visited = true;

    while(q.length > 0) {
        let oCurrentNode = q.shift();
        delete oProjects[]

        for (let i = 0; i < oCurrentNode.adjacents.length; i++) {
            let oNeighbor = oCurrentNode.adjacents[i];
            if (!oNeighbor.visited) {
                q.push(oNeighbor);
                oNeighbor.visited = true;
            }
        }
    }

    return null;
};



addPairsToGraph = function(aProjectPairs) {
    let oGraph = new Graph();

    // Parse through the pairs and add to the graph
    for (let i = 0; i < aProjectPairs.length; i++) {
        let oPair = aProjectPairs[i];
        let strDependee = oPair.strDependee;
        let strDependent = oPair.strDependent;

        let oDependentNode = oGraph.oNodes[strDependent] ? oGraph.oNodes[strDependent] : new Node(strDependent);
        let oDependeeNode = oGraph.oNodes[strDependee] ? oGraph.oNodes[strDependee] : new Node(strDependee);
        oDependentNode.adjacents.push(oDependeeNode);

        oGraph.oNodes[oDependentNode.value] = oDependentNode;
        oGraph.oNodes[oDependeeNode.value] = oDependeeNode;
    }

    return oGraph;
};