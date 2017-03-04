/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
let licenseKeyFormatting = function(S, K) {
    S = S.toUpperCase();

    // Replace the dashes
    S = S.replace(/-/g, '');

    // Iterate from the back and build
    let result = "";
    let iters = 0;
    for (let i = S.length - 1; i >= 0; i--) {
        let c = S.charAt(i);

        iters++;
        if (iters % K === 0 && i > 0) {
            result = '-' + c + result
        } else {
            result = c + result;
        }
    }

    return result;
};

module.exports = licenseKeyFormatting;