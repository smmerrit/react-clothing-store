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

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;