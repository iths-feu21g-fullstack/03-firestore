// Självständigt skript som hämtar data från databasen
import { collection, getDocs, doc, getDoc } from "firebase/firestore"

import { db } from './firebase.js'


// Hämta alla dokument
const colRef = collection(db, "animals");
let animals = [];

// Man kan använda antingen .then eller async/await
/*getDocs(colRef).then((snapshot) => {
	snapshot.docs.forEach((docSnapshot) => {
		animals.push({ ...docSnapshot.data(), id: docSnapshot.id });
	});
	console.log(animals);
});*/

const snapshot = await getDocs(colRef)
snapshot.docs.forEach((docSnapshot) => {
	animals.push({ ...docSnapshot.data(), id: docSnapshot.id });
});
console.log(animals);
