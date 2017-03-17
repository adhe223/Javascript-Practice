let HelperMethods = require('../Helpers/Methods');

let shuffle = function(aInput) {
    aInput.forEach((val, i) => {
        let newIndx = HelperMethods.getRandom(i, aInput.length - 1);
        if (newIndx === i) {return;}

        let temp = aInput[newIndx];
        aInput[newIndx] = val;
        aInput[i] = temp;
    });
};

module.exports = shuffle;