const SHA256 = require("crypto-js/sha256");

class MediBlock {
    constructor(data, precedingHash = " ") {
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }
    computeHash() {
        return SHA256(
            this.precedingHash + JSON.stringify(this.data)
        ).toString();
    }
}

module.exports = MediBlock;
