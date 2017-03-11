function MyQueue() {
    this.sIn = [];
    this.sOut = [];
}

MyQueue.prototype.enq = function(val) {
    this.sIn.push(val);
};

MyQueue.prototype.deq = function() {
    if (this.sOut.length === 0) {
        while (this.sIn.length > 0) {
            this.sOut.push(this.sIn.pop());
        }
    }

    if (this.sOut.length === 0) {
        return null;
    }

    return this.sOut.pop();
};

module.exports = MyQueue;