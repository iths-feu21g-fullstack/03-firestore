import express from 'express'
const router = express.Router()

import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from '../database/firebase.js'


// Data hämtas från Firestore!

// Routes
// RESTful == har GET, POST, PUT och DELETE
router.get('/', async (req, res) => {
	const colRef = collection(db, "animals");
	let animals = [];

	const snapshot = await getDocs(colRef)
	snapshot.docs.forEach((docSnapshot) => {
		animals.push({ ...docSnapshot.data(), id: docSnapshot.id });
	});
	console.log(animals);

	res.send( animals )
})

export default router
