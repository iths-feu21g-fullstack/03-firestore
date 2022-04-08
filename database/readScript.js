// Självständigt skript som hämtar data från databasen
import { collection, getDocs, doc, getDoc } from "firebase/firestore"

import { db } from './firebase.js'


// Referens till animals collection
const collectionRef = collection(db, 'animals')

// Referens till gorilla-dokumentet
const docRef = doc(collectionRef, 'TbeSmTG3wUra468OjsGj')

// Get-funktionen är asynkron. Den hämtar datan från databasen och lägger inuti snapshot-objektet
const snapshot = await getDoc(docRef)

// Hämta datan - data är ett vanligt JavaScript-objekt
const data = snapshot.data()

console.log('data: ', data)
