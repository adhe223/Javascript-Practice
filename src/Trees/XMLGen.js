let strRes = "";

let genXML = function(oNode) {
    createNode(oNode);
    return strRes;
};

let createNode = function(oNode) {
    if (!oNode) {
        return;
    }

    strRes += "<" + oNode.value + ">";
    genXML(oNode.left);
    genXML(oNode.right);
    strRes += "</" + oNode.value + ">";
};

module.exports = genXML;