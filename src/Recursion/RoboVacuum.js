function RoboVaccuum(mGrid) {
    this.mGrid = mGrid;
    this.aMoves = [];
}

RoboVaccuum.prototype.walk = function(iX, iY) {
    let bInBounds;
    let iRows = this.mGrid.length;
    let iCols = this.mGrid[0].length;

    if (iY === this.mGrid.length - 1 && iX === this.mGrid[0].length - 1) {
        return true;
    }

    bInBounds = iX + 1 < iCols;
    if (bInBounds) {
        let bIsTraversible = this.mGrid[iY][iX + 1];
        if (bIsTraversible) {

            return this.walk(iX + 1, iY);
        }
    }

    bInBounds = iY + 1 < iRows;
    if (bInBounds) {
        let bIsTraversible = this.mGrid[iY + 1][iX];
        if (bIsTraversible) {
            return this.walk(iX, iY + 1);
        }
    }

    return false; // Stuck!
};

module.exports = RoboVaccuum;