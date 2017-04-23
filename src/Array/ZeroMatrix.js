let zeroMatrix = function(m) {
    let r = [];
    let c = [];

    // Mark where we have zeros
    for (let row = 0; row < m.length; row++) {
        for (let col = 0; col < m[row].length; col++) {
            if (m[row][col] === 0) {
                r.push(row);
                c.push(col);
            }
        }
    }

    // Go back and zero out
    // Rows
    for (let i = 0; i < r.length; i++) {
        let row = r[i];
        for (let col = 0; col < m[row].length; col++) {
            m[row][col] = 0;
        }
    }

    // Cols
    for (let i = 0; i < c.length; i++) {
        let col = c[i];
        for (let row = 0; row < m.length; row++) {
            m[row][col] = 0;
        }
    }
};

module.exports = zeroMatrix;