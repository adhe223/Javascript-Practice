let urlify = function(aInput, indx) {
    let finalIndx = aInput.length - 1;
    for (let i = indx; i >= 0; i--) {
        let char = aInput[i];

        if (char === ' ') {
            aInput[finalIndx] = '0';
            aInput[finalIndx - 1] = '2';
            aInput[finalIndx - 2] = '%';
            finalIndx = finalIndx - 3;
        } else {
            aInput[finalIndx] = char;
            finalIndx--;
        }
    }

    return aInput;
};

module.exports = urlify;