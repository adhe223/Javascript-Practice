/*
Sort a stack using only one other stack and no recursion.
*/
let sortStack = function(aStack) {
    let aOtherStack = [];
    let iSize = aStack.length;

    for (let j = 0; j < aStack.length - 1; j++) {
        let iLowest = Number.MAX_VALUE;
        for (let i = j; i < iSize; i++) {
            let iVal = aStack.pop();
            iLowest = iVal < iLowest ? iVal : iLowest;
            aOtherStack.push(iVal);
        }

        // Lowest goes to bottom
        aStack.push(iLowest);
        while (aOtherStack.length) {
            let iCurrent = aOtherStack.pop();
            if (iCurrent !== iLowest) {
                aStack.push(iCurrent);
            }
        }
    }

    return aStack;
};

module.exports = sortStack;