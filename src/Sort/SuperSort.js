function SuperSort(iMaxScore) {
    this.oScores = {};
    this.arriSorted = [];
    this.iMaxScore = iMaxScore;
}

SuperSort.prototype.sort = function(arriToSort) {
    this._populateScores(arriToSort);

    // Now we just need to iterate over oScores and return a sorted array
    for (let i = 0; i <= this.iMaxScore; i++) {
        let iCount = this.oScores[i] || 0;
        this._addScores(i, iCount, this.arriSorted);
    }

    return this.arriSorted;
};

SuperSort.prototype._populateScores = function(arriToSort) {
    for (let i = 0; i < arriToSort.length; i++) {
        let iNum = arriToSort[i];
        let iCount = this.oScores[iNum] || 0;   // the key on oScores is actually a string that js will implicitly convert

        this.oScores[iNum] = iCount + 1;
    }
};

SuperSort.prototype._addScores = function(iNum, iCount, arrNums) {
    for (let i = 1; i <= iCount; i++) {
        arrNums.push(iNum);
    }
};

module.exports = SuperSort;