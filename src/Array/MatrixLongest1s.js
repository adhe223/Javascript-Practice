let printLongest1s = function(mBin) {
    let aLongest = [];
    let iLongest = 0;

    for (let i = 0; i < mBin.length; i++) {
        let iStart = 0;
        let iEnd = mBin[i].length - 1;

        // This binary search implementation returns the position of the first one, so the first 1s place
        while (iStart <= iEnd) {
            let iMid = Math.floor((iStart + iEnd) / 2);

            if (mBin[i][iMid] === 0) {
                // Go right
                iStart = iMid + 1;
            } else {
                iEnd = iMid;
            }
        }

        let iNum1s = 0;
        if (mBin[i][iStart] === 1) {
            // 1s in this row
            iNum1s = mBin[i].length - iStart;
        }
        if (iNum1s > iLongest) {
            aLongest = [i];
            iLongest = iNum1s;
        } else if (iNum1s === iLongest) {
            aLongest.push(i);
        }
    }

    // Print the results
    for (let i = 0; i < aLongest.length; i++) {
        console.log("[" + aLongest[i] + "," + iLongest + "]");
    }
};