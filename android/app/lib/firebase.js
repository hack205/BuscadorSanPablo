import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyBawGYY9z6ZalFxKsyLzUDZQ_N2GwKuh4k",
            authDomain: "buscadorsp-4894a.firebaseapp.com",
            projectId: "buscadorsp-4894a",
            storageBucket: "buscadorsp-4894a.appspot.com",
            messagingSenderId: "804355271229",
  }

  firebase.initializeApp(config)

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth