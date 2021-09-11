import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// firebase config object
const firebaseConfig = {
  apiKey: 'AIzaSyBk6MutvaZihWh0bJcdJCAx1FHRZIN78sU',
  authDomain: 'disneyplus-clone-42d5c.firebaseapp.com',
  projectId: 'disneyplus-clone-42d5c',
  storageBucket: 'disneyplus-clone-42d5c.appspot.com',
  messagingSenderId: '925267438517',
  appId: '1:925267438517:web:13b82fa5ec41722f1887fc',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// firebase database
const db = getFirestore()

// firebase authentication object
export const auth = getAuth(app)

// add googleAuth API object
export const provider = new GoogleAuthProvider()
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

//setting language to default
auth.languageCode = 'it'

provider.setCustomParameters({
  prompt: 'select_account',
})

export default db
