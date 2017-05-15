let getKPointDistances = function(aPoints, k) {
    aPoints.sort(function (oPoint1, oPoint2) {
        let nDistance1 = Math.sqrt(Math.pow(oPoint1.x, 2) + Math.pow(oPoint1.y, 2));
        let nDistance2 = Math.sqrt(Math.pow(oPoint2.x, 2) + Math.pow(oPoint2.y, 2));

        return nDistance1 - nDistance2;
    });

    return aPoints.slice(0, k);
};

module.exports = getKPointDistances;