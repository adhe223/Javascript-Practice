let isSingleRiffle = function(aShuffledDeck) {
    let iFirstHalf = 1;
    let iSecondHalf = 26;

    for (let i = 1; i <= aShuffledDeck.length; i++) {
        let iCurrVal = aShuffledDeck[i];
        if (iCurrVal === iFirstHalf) {
            iFirstHalf++;
        } else if (iCurrVal === iSecondHalf) {
            iSecondHalf++;
        } else {
            return false;
        }
    }
    return true;
};

module.exports = isSingleRiffle;