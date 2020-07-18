import app from './firebase/app';

const config ={
/*configuracion de firebase borrada aproposito  */

};

class Firebase {

    constructor()
    {
        app.initializeApp(config);
        this.db = app.firestore();
    }


}

export default Firebase;