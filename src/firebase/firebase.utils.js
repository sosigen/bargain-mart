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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('error creating user')
      console.log(err.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoole = () => auth.signInWithPopup(provider)

export default firebase