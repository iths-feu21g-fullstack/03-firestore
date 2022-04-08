import { collection, doc, updateDoc } from "firebase/firestore"

import { db } from './firebase.js'


const newObject = {
	name: 'lejon',
	eats: 'antilop'
}

// Varning! Id kommer att ändras varje gång man tar bort och lägger till lejonet med de andra skripten
const oldDocId = 'D21YsOsCBssqv99KoCDA'

const collectionRef = collection(db, 'animals')
const oldDocRef = doc(collectionRef, oldDocId)

// updateDoc - ändrar i ett befintligt document
// setDoc - ändrar eller lägger till ett document

updateDoc(oldDocRef, newObject)
