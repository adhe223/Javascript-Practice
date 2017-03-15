const PUNCTUATION = [',',';','.','!','?', ':'];
const TERMINAL_PUNC = ['!', '?', '.'];

function WordCloud(strInput) {
    this.strInput = strInput;
    this.oWordHash = {};
}

WordCloud.prototype.buildHash = function() {
    let iStart = 0;
    for (let i = 0; i < this.strInput.length; i++) {
        let c = this.strInput.charAt(i);
        let isPunc = (c === ' ' || PUNCTUATION.some((cPunc) => {
            return cPunc === c;
        }));

        if (isPunc) {
            let strWord = this.strInput.substring(iStart, i);
            strWord = this._storeCapitalize(iStart, strWord) ? strWord : strWord.toLowerCase();
            this.oWordHash[strWord] = this.oWordHash[strWord] ? this.oWordHash[strWord] + 1 : 1;
            iStart = i + 1;
        }
    }

    // If we reach the end we should add the last word
    if (iStart !== this.strInput.length) {
        let strWord = this.strInput.substring(iStart);
        strWord = this._storeCapitalize(iStart, strWord) ? strWord : strWord.toLowerCase();
        this.oWordHash[strWord] = this.oWordHash[strWord] ? this.oWordHash[strWord] + 1 : 1;
    }
};

WordCloud.prototype._storeCapitalize = function(iIndex, strWord) {
    if (iIndex === 0) {return false;}

    let cPrev = this.strInput.charAt(iIndex - 1);
    return TERMINAL_PUNC.some((cPunc) => {
        return cPrev === cPunc;
    });
};

module.exports = WordCloud;