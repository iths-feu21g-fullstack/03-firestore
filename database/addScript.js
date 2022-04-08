import { collection, addDoc } from "firebase/firestore"

import { db } from './firebase.js'



let newObject = {
	name: 'lejon',
	eats: 'schimpanser'
}

const colRef = collection(db, "animals");

// lägg till objekt som ett dokument i en collection
// addDoc returnerar Promise<DocumentReference>
const newDocRef = await addDoc(colRef, newObject)

console.log('Lade till nytt dokument med id=', newDocRef.id)