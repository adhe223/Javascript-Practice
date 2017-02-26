let BTNode = require('../Helpers/BTNode');

function MinimalTreeCreator(sortedNums) {
    this.sortedNums = sortedNums;
    this.root = null;
}

MinimalTreeCreator.prototype.create = function() {
    this._addNodes(this.sortedNums);
    return this.root;
};

MinimalTreeCreator.prototype._addNodes = function(nums) {
    let min = 0;
    let max = nums.length - 1;
    let currentIndex;
    let currentElement;

    if (nums.length == 0) {
        return;
    }

    currentIndex = Math.floor((min + max) / 2);
    currentElement = nums[currentIndex];

    let oRoot;
    if (this.root === null) {
        // First iteration
        this.root = new BTNode(currentElement);
        oRoot = this.root;
    } else {
        oRoot = new BTNode(currentElement);
    }

    // Recurse
    oRoot.left = this._addNodes(nums.slice(0, currentIndex));
    oRoot.right = this._addNodes(nums.slice(currentIndex + 1));

    return oRoot;
};

module.exports = MinimalTreeCreator;