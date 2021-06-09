import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC3tkcJyFEQ0IRzrMP9bTfLdNAkmiFNeBA",
  authDomain: "bargain-mart.firebaseapp.com",
  projectId: "bargain-mart",
  storageBucket: "bargain-mart.appspot.com",
  messagingSenderId: "393317014322",
  appId: "1:393317014322:web:6ce615980b9ad903a9952b",
  measurementId: "G-69P38667X3"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoole = () => auth.signInWithPopup(provider)

export default firebase