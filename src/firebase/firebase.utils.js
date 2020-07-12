import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAZ7TNtyCXCgtiZlZMOI4ieEC11RpyEsDs",
    authDomain: "react-online-store-610d22.firebaseapp.com",
    databaseURL: "https://react-online-store-610d22.firebaseio.com",
    projectId: "react-online-store-610d22",
    storageBucket: "react-online-store-610d22.appspot.com",
    messagingSenderId: "959502291095",
    appId: "1:959502291095:web:c8523cbb7d977863a499d2",
    measurementId: "G-62E21YQSKK"
};

export const createUserProfileDocument = async (userAuth,addtionalData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    //query snapshot object 
    const snapShot = await userRef.get();

  

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            //create a new document with the afrmetioned properties
            await userRef.set({
                    displayName,
                    email,
                createdAt,
                ...addtionalData

            })

        } catch(error){

console.log('error creating user', error.message);
        }
    }
    return userRef;
    }

firebase.initializeApp(config);
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj =>{
       const newDocRef = collectionRef.doc()
       batch.set(newDocRef, obj) 
    })
    return await batch.commit()
}

export const convertCollectionsSnapshot = (collections) => {
    const transformedCollections = collections.docs.map(doc =>{
        const { title, items} = doc.data()
        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items

        }

    })
    return transformedCollections.reduce((accumulator,collection) =>  {
        accumulator[collection.title.toLowerCase()]= collection
        return accumulator },{})

}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;