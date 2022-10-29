import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCme1eqoFCkNKSmHySR5uxbIBQAc6s9Mzk",
  authDomain: "project-management-f4e91.firebaseapp.com",
  projectId: "project-management-f4e91",
  storageBucket: "project-management-f4e91.appspot.com",
  messagingSenderId: "462337984861",
  appId: "1:462337984861:web:3d5d830438fbcc7aaf40b4"
};
  firebase.initializeApp(firebaseConfig)

const projectfirestore=firebase.firestore()
const projectauth=firebase.auth()
const projectstorage=firebase.storage()


const timestamp=firebase.firestore.Timestamp



export {projectfirestore,projectauth,timestamp,projectstorage}