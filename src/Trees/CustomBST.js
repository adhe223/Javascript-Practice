// This isn't correct. It isn't equally distributed. Blah blah blah math math mat

function CustomBST(oHead) {
    this.oHead = oHead;
}

CustomBST.prototype.getRandomNode = function(){
    if (!this.oHead) {return null;}
    return this._decideNode(this.oHead);
};

CustomBST.prototype._decideNode = function (oNode) {
    let iOptions = 1;

    if (oNode.left) {iOptions++;}
    if (oNode.right) {iOptions++;}
    if (iOptions === 1) {return oNode;}

    // Now decide if we're continuing down the tree, or stopping
    let iRandom = (Math.random() * 100) + 1;    // Random number between 1 and 100

    if (iOptions === 2) {
        if (iRandom <= 50) {
            // Continue traversing
            if (oNode.left) {return this._decideNode(oNode.left);}
            if (oNode.right) {return this._decideNode(oNode.right);}
        } else {
            // Stop
            return oNode;
        }
    } else {    // Have left right and current as options
        let iRandom2 = (Math.random() * 100) + 1;    // Random number between 1 and 100
        if (iRandom2 <= 33) {
            return this._decideNode(oNode.left);
        } else if (iRandom2 <= 66) {
            return this._decideNode(oNode.right);
        } else {
            return oNode;
        }
    }
};

module.exports = CustomBST;