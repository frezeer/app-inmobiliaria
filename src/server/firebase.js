import app from 'firebase/app';

const config ={
/*configuracion de firebase borrada aproposito  */
  apiKey: "AIzaSyDDQt3pLX179ADjSwvJc93oqSjzZoCITNE",
  authDomain: "home-66bc0.firebaseapp.com",
  databaseURL: "https://home-66bc0.firebaseio.com",
  projectId: "home-66bc0",
  storageBucket: "home-66bc0.appspot.com",
  messagingSenderId: "293016688130",
  appId: "1:293016688130:web:8166b47d18718bc62a391b",
  measurementId: "G-P772H7J1VZ"
};

class Firebase {

    constructor()
    {
        app.initializeApp(config);
        this.db = app.firestore();
    }


}

export default Firebase;