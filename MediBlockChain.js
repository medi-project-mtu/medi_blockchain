const MediBlock = require("./MediBlock");

class MediBlockchain {
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
    }
    startGenesisBlock() {
        return new MediBlock("Initial Block in the Chain", "0");
    }
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
}

module.exports = MediBlockchain;
