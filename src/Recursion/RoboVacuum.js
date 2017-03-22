function RoboVaccuum(mGrid) {
    this.mGrid = mGrid;
    this.oCache = {};
    this.iMoveCount = 0;
}

RoboVaccuum.prototype.walk = function(iX, iY) {
    let bInBoundsRight, bInBoundsDown;
    let iRows = this.mGrid.length;
    let iCols = this.mGrid[0].length;

    if (iY === this.mGrid.length - 1 && iX === this.mGrid[0].length - 1) {
        return true;
    }
    this.oCache['' + iX + iY] = true;
    this.iMoveCount++;

    bInBoundsRight = iX + 1 < iCols;
    bInBoundsDown = iY + 1 < iRows;

    if (bInBoundsRight || bInBoundsDown) {
        let bIsTraversibleRight = bInBoundsRight && this.mGrid[iY][iX + 1] && !this.oCache['' + (iX + 1) + iY];
        let bIsTraversibleDown = bInBoundsDown && this.mGrid[iY + 1][iX] && !this.oCache['' + iX + (iY + 1)];
        if (bIsTraversibleRight && bIsTraversibleDown) {
            return this.walk(iX + 1, iY) || this.walk(iX, iY + 1);
        } else if (bIsTraversibleRight) {
            return this.walk(iX + 1, iY);
        } else if (bIsTraversibleDown) {
            return this.walk(iX, iY + 1);
        }
    }

    return false; // Stuck!
};

module.exports = RoboVaccuum;