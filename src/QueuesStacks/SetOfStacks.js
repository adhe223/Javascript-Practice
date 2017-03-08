function SetOfStacks(iCapacity) {
    this.iCapacity = iCapacity;
    this.aStacks = [];
    this.aStacks.push([]);
}

SetOfStacks.prototype.push = function(value) {
    if (!this.aStacks[this.aStacks.length - 1]) {
        this.aStacks.push([]);
    }

    if (this.aStacks[this.aStacks.length - 1].length === this.iCapacity) {
        this.aStacks.push([]);
    }
    this.aStacks[this.aStacks.length - 1].push(value);
};

SetOfStacks.prototype.pop = function() {
    let retVal;

    if (!this.aStacks[this.aStacks.length - 1]) {
        return null;
    }

    retVal = this.aStacks[this.aStacks.length - 1].pop();
    if (this.aStacks[this.aStacks.length - 1].length === 0) {
        this.aStacks.pop();
    }

    return retVal;
};

module.exports = SetOfStacks;