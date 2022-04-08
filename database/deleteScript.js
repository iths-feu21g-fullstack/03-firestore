import { collection, doc, deleteDoc } from "firebase/firestore"

import { db } from './firebase.js'


const idToRemove = 'DiAUVAMpaaTm42xbDhK4'

const colRef = collection(db, "animals");

const docRef = doc(colRef, idToRemove)

await deleteDoc(docRef)
