function StringWordMapper() {
    this.punctuation = [',', '.', '"', '?', ':', '!', ' ', '(', ')'];
}

StringWordMapper.prototype.getCountsHash = function(strInput) {
    let oWordCounts = {};
    strInput = strInput.toLowerCase();

    let iStart = 0;
    for (let i = 0; i < strInput.length; i++) {
        let cCurrent = strInput.charAt(i);
        if (this.punctuation.indexOf(cCurrent) > -1) {
            // Get the previous word
            let strWord = strInput.substring(iStart, i);
            oWordCounts[strWord] = oWordCounts[strWord] ? oWordCounts[strWord] + 1 : 1;

            iStart = i + 1;
            continue;
        }
    }

    // Grab the last word
    let strWord = strInput.substring(iStart);
    oWordCounts[strWord] = oWordCounts[strWord] ? oWordCounts[strWord] + 1 : 1;

    // "" will be added if punctation are back to back. We could stop this earlier, or just remove now
    delete oWordCounts[""];

    return oWordCounts;
};

module.exports = StringWordMapper;