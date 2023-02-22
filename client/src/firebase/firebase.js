import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAC0g-3fVbqDpHtwC0knCA78Nv7O5FKXM",
  authDomain: "auth-lab4-bc128.firebaseapp.com",
  projectId: "auth-lab4-bc128",
  storageBucket: "auth-lab4-bc128.appspot.com",
  messagingSenderId: "763657973939",
  appId: "1:763657973939:web:f63a53269f4263ffaa80c6",
  measurementId: "G-8T7M0MJC2R"
});

export default firebaseApp;