let aPossibleOutputs = [];

let getAllPossibleArrays = function(oHead) {
    let aOutputNormal = [];
    let aOutputSwitch = [];

    let stackNormal = [];
    let stackSwitch = [];
    stackNormal.push(oHead);
    stackSwitch.push(oHead);

    while (stackNormal.length > 0) {
        let oNode = stackNormal.pop();

        aOutputNormal.push(oNode.value);
        if (oNode.left) {stackNormal.push(oNode.left);}
        if (oNode.right) {stackNormal.push(oNode.right);}
    }

    while (stackSwitch.length > 0) {
        let oNode = stackSwitch.pop();

        aOutputSwitch.push(oNode.value);
        if (oNode.left) {stackSwitch.push(oNode.right);}
        if (oNode.right) {stackSwitch.push(oNode.left);}
    }

    aPossibleOutputs.push(aOutputNormal);
    aPossibleOutputs.push(aOutputSwitch);
    return aPossibleOutputs;
};

module.exports = getAllPossibleArrays;