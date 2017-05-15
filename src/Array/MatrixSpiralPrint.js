let printSpiral = function(m) {
    let colMin = 0, colMax = m[0].length - 1, rowMin = 0, rowMax = m.length - 1;
    let col = 0, row = 0;

    while (col >= colMin && col <= colMax && row >= rowMin && row <= rowMax) {
        for (col; col < colMax; col++) {
            console.log(m[row][col]);
        }
        rowMin++;

        for (row; row < rowMax; row++) {
            console.log(m[row][col]);
        }
        colMax--;

        for (col; col > colMin; col--) {
            console.log(m[row][col]);
        }
        rowMax--;

        for (row; row > rowMin; row--) {
            console.log(m[row][col]);
        }
        colMin++;

        console.log(m[row][col]);
        col++;
    }
};

module.exports = printSpiral;