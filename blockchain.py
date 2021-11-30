import hashlib
import firebase_admin
from firebase_admin import db

cred_obj = firebase_admin.credentials.Certificate('medi-group-project-firebase-adminsdk-iwgck-5cc8536e31.json')
databaseURL = "https://medi-group-project-default-rtdb.firebaseio.com/"

default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':databaseURL
	})


class MediBlock:
    def __init__(self, previous_hash, data):
        self.previous_hash = previous_hash
        self.data = data
        self.hash = hashlib.sha256(str(self.data).encode()).hexdigest()
        
    

block = MediBlock(None, data={"name":"Marin", "lastname": "KGB", "age":21})

ref = db.reference("/Patient")
print(ref.get())
# print(block.data)
# print(block.hash)