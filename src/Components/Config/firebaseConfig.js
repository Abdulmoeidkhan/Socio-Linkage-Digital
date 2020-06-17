import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database"

const firebaseConfig = {
    apiKey: "AIzaSyB6SOnFgOBBjSmxHdrHVcvpOlsIKom4Lds",
    authDomain: "socio-linkage.firebaseapp.com",
    databaseURL: "https://socio-linkage.firebaseio.com",
    projectId: "socio-linkage",
    storageBucket: "socio-linkage.appspot.com",
    messagingSenderId: "972614172693",
    appId: "1:972614172693:web:a23a85b73e0b29e7708e1c",
    measurementId: "G-6S00VR2GM5"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.database().ref("/")
    }
    currentUsers(){
        return this.auth.currentUser
    }
    async login(email, password) {
        await this.auth.signInWithEmailAndPassword(email, password)
        return this.auth.currentUser
    }
    logout() {
        return this.auth.signOut()
    }
    async signUp(userName, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        await this.auth.currentUser.updateProfile({
            displayName: userName
        }).then(
            this.db.child("users").push({ name: userName, email: email,id:this.auth.currentUser.uid })
        )
        return this.auth.currentUser
    }
    isInitialized(){
        return new Promise(resolve=>{
            this.auth.onAuthStateChanged(resolve)
        })
    }
}

export default new Firebase