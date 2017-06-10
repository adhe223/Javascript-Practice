TinyURL.prototype.CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
TinyURL.prototype.MAX_LENGTH = 6;

function TinyURL() {
    this.oURLToTiny = {};
    this.oTinyToUrl = {};
}

TinyURL.prototype.URLCreator = function(strURL) {
    let strTinyURL = this._tinyURLGen();
    while (oTinyToUrl[strTinyURL]) {
        strTinyURL = this._tinyURLGen();
    }
    return strTinyURL;
};

TinyURL.prototype.getTiny = function(strURL) {
    let tinyURL;
    if (!this.oURLToTiny[strURL]) {
        tinyURL = this.URLCreator(strURL);
        this.oURLToTiny[strURL] = tinyURL;
        this.oTinyToUrl[tinyURL] = strURL;
    } else {
        tinyURL = this.oURLToTiny[strURL];
    }

    return tinyURL;
};

TinyURL.prototype._tinyURLGen = function() {
    const iCharsLength = this.CHARS.length;
    
    let strResult = "";
    for (let i = 0; i < this.MAX_LENGTH; i++) {
        let iCharIndx = Math.floor(Math.random()*(iCharsLength+1));
        strResult += this.CHARS.charAt(iCharIndx);
    }
    
    return strResult;
};

module.exports = TinyURL;