let iPossibilities;

let getPossibleStairRoutes = function(n) {
    iPossibilities = 0;
    possibleStairRoutes(n);
    return iPossibilities;
};

let possibleStairRoutes = function(n) {
    if (n === 0) {
        iPossibilities++;
        return;
    } else if (n < 0) {
        return;
    }

    possibleStairRoutes(n - 1);
    possibleStairRoutes(n - 2);
    possibleStairRoutes(n - 3);
};

module.exports = getPossibleStairRoutes;