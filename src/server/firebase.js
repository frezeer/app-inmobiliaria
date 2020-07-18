import app from 'firebase/app';


const config ={
/*configuracion de firebase borrada aproposito  */
/*Esto deberia subirse a github*/ 
};

class Firebase {

    constructor()
    {
        app.initializeApp(config);
        this.db = app.firestore();
    }


}

export default Firebase;