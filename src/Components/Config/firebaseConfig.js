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
        this.db = app.database()
    }

    currentUsers() {
        return this.auth.currentUser
    }
    async login(email, password) {
        await this.auth.signInWithEmailAndPassword(email, password)
        return this.auth.currentUser
    }
    async logout() {
        let returnLog=this.auth.signOut().then(()=>this.currentUsers())
        await returnLog
        return returnLog
    }
    async signUp(userName, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        await this.auth.currentUser.updateProfile({
            displayName: userName
        }).then(
            this.db.ref("/").child("users").child(this.auth.currentUser.uid).set({ name: userName, email: email, id: this.auth.currentUser.uid })
        )
        return this.auth.currentUser
    }
    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
    async getDateData() {
        let dataToBeReturn
        let myData = this.db.ref("events").once("value", snap => {
                dataToBeReturn=snap.val()
        }
        )
        await myData
        return(dataToBeReturn)
    }
    async formSubmit(object){
        let data=this.db.ref("/").child("users").child(this.auth.currentUser.uid).child("form").set(object)
        await data
        return ("Form is Submitted Successfully")
    }
    async getFormData() {
        let formData={}
        let data=this.db.ref("users").child(this.auth.currentUser.uid).once("value", snap => {
            formData=snap.val()
        })
        await data
        return formData
    }
}

export default new Firebase