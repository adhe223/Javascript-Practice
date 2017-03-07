let MinStackNode = require('../Helpers/MinStackNode');

function MinStack() {
    this.backStack = [];
}

MinStack.prototype.push = function(oNode) {
    let oOldNode = this.peek();

    let newMin = null;
    if (oOldNode) {
        let oldMin = oOldNode.min;
        newMin = oNode.value < oldMin ? oNode.value : oldMin;
    } else {
        newMin = oNode.value;
    }

    let oNewNode = new MinStackNode(oNode.value);
    oNewNode.min = newMin;
    this.backStack.push(oNewNode);
};

MinStack.prototype.peek = function() {
    if (this.backStack.length === 0) {
        return null;
    }
    return this.backStack[this.backStack.length - 1];
};

MinStack.prototype.pop = function() {
    if (this.backStack.length !== 0) {
        return this.backStack.pop();
    } else {
        return null;
    }
};

MinStack.prototype.getMin = function() {
    let min = null;
    if (this.peek()) {
        return this.peek().min;
    } else {
        return null;
    }
};

module.exports = MinStack;