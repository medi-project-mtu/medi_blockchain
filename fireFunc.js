const admin = require("firebase-admin");
const MediBlock = require("./MediBlock");
const MediBlockchain = require("./MediBlockChain");
const fs = require("fs");
const path = require("path");
var serviceAccount = require("./medi-group-project-firebase-adminsdk-iwgck-5cc8536e31.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://medi-group-project-default-rtdb.firebaseio.com",
});

const db = admin.database();

const blockchain = new MediBlockchain();

function listenToChange() {
    const ref = db.ref("/Patient");

    ref.on("child_added", (snapshot) => {
        console.log("child_added");
        blockchain.addNewBlock(new MediBlock(snapshot.val()));
        getBlockChain();
    });

    ref.on("child_removed", (snapshot) => {
        console.log("child_removed");
        blockchain.addNewBlock(new MediBlock(snapshot.val()));
        getBlockChain();
    });

    ref.on("child_changed", (snapshot) => {
        console.log("child_changed");
        blockchain.addNewBlock(new MediBlock(snapshot.val()));
        getBlockChain();
    });
}

function getBlockChain() {
    blockchainJson = JSON.stringify(blockchain, null, 4);
    const filePath = path.join(process.cwd(), "mediBlockChain.json");

    fs.writeFile(filePath, blockchainJson, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File written successfully");
        }
    });
}

module.exports = { listenToChange, getBlockChain };
