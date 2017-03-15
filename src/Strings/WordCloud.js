const PUNCTUATION = [',','\'','-',';','.','!','?'];

function WordCloud(strInput) {
    this.strInput = strInput;
    this.oWordHash = {};
}

WordCloud.prototype.buildHash = function() {
    let iStart = 0;
    for (let i = 0; i < this.strInput.length; i++) {
        let c = this.strInput.charAt(i);
    }
};