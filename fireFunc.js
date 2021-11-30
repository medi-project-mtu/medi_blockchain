const admin = require("firebase-admin");
var serviceAccount = require("./medi-group-project-firebase-adminsdk-iwgck-5cc8536e31.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://medi-group-project-default-rtdb.firebaseio.com"
});
  
  // Initialize Firebase
const db = admin.database();

  function getAll(){
    const ref = db.ref('/Patient');
    ref.on('child_added', (snapshot) => {
      console.log(snapshot.val());
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    }); 
}

module.exports = {getAll};