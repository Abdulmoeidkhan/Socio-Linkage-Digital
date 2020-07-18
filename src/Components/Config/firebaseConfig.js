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

    async getAllData() {
        let dataToBeReturn
        let arr = []
        let myData = this.db.ref("/").child("users").once("value", snap => {
            dataToBeReturn = snap.val()
        }
        ).then(() => {
            let val
            for (val in dataToBeReturn) {
                let obj = {
                    name: val,
                    value: dataToBeReturn[val]
                }
                arr.push(obj)
            }
        })
        await myData
        return (arr)
    }

    async getContent() {
        let dataToBeReturn
        let myData = this.db.ref("/").child("content").once("value", snap => {
            dataToBeReturn = snap.val()
        }
        )
        await myData
        return dataToBeReturn
    }
    async setContent(content) {
        let status
        let myData = this.db.ref("/").child("content").set(content, function (error) {
            if (error) {
                status = "Data could not be saved." + error;
            } else {
                status = "Data saved successfully.";
            }
        })
        await myData
        return status
    }
    async adminLogin(email, password) {
        let response = {}
        let userType
        await this.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            response.message = error.message
        })
        if (this.auth.currentUser) {
            await this.db.ref("/").child("admin").child(this.auth.currentUser.uid).once("value", snap => {
                userType = snap.val()
            }).then(() => {
                if (userType) {
                    if ("admin" === userType.type) {
                        response.flag = true;
                        response.message = "You are Sign in as admin"
                    }
                }
                else {
                    response.flag = false
                    response.message = "You are not registeredas admin"
                    this.logout()
                }
            }).catch(function (error) {
                response.message = error.message
            })
        }
        return (response)

    }
    async currenAdminUser(){
        let response = {}
        let userType
        if (this.auth.currentUser) {
            await this.db.ref("/").child("admin").child(this.auth.currentUser.uid).once("value", snap => {
                userType = snap.val()
            }).then(() => {
                if (userType) {
                    if ("admin" === userType.type) {
                        response.flag = true;
                        response.message = "You are Sign in as admin"
                    }
                    else{
                        response.flag = false;
                    }
                }
            })
        }
        else{
            response.flag=false
        }
        return(response)
    }

    currentUsers() {
        return this.auth.currentUser
    }
    async login(email, password) {
        await this.auth.signInWithEmailAndPassword(email, password)
        return this.auth.currentUser
    }
    async logout() {
        let returnLog = this.auth.signOut().then(() => this.currentUsers())
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
            dataToBeReturn = snap.val()
        }
        )
        await myData
        return (dataToBeReturn)
    }
    async formSubmit(object) {
        let data = this.db.ref("/").child("users").child(this.auth.currentUser.uid).child("form").set(object)
        await data
        return ("Form is Submitted Successfully")
    }
    async getFormData() {
        let formData = {}
        let data = this.db.ref("users").child(this.auth.currentUser.uid).once("value", snap => {
            formData = snap.val()
        })
        await data
        return formData
    }
}

export default new Firebase