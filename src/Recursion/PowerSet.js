let aPowerSet = [];

let getPowerSetEntry = function(aSet) {
    getPowerset(aSet);
    aPowerSet.push([]);
    return aPowerSet;
};

let getPowerset = function(aSet) {
    if (aSet.length === 0) {
        return;
    }

    aPowerSet.push(aSet);
    for (let i = 0; i < aSet.length; i++) {
        let aTemp = aSet.slice(0, i);
        aTemp = aTemp.concat(aSet.slice(i + 1));
        getPowerset(aTemp);
    }
};

module.exports = getPowerSetEntry;