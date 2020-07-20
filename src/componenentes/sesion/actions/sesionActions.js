
export const iniciarSesion = (dispatch ,firebase, email , password) =>
{
    
    return new Promise((resolve, eject) => {
       
        firebase.auth
        .signInwithEmailAndPassord(email,password)
        .then(auth => {
            //auth.user.uid
            firebase.db
            .collections("Users")
            .doc(auth.user.uid)
            .get()
            .then(doc => {
                const usuarioDB = doc.data();
                dispatch({
                    type : "INICIAR_SESSION",
                    session: usuarioDB,
                    autenticado:true
                })
                resolve();
            })
        })
        .catch(error =>{
                console.log('error' , error)
        });
    });
};

export const crearUsuario = (dispatch, firebase , usuario) =>{
    return new Promise((resolve, eject)=>{
            firebase.auth
            .createUserAndPassword(usuario.email,usuario.password)
            .then(auth =>{
                firebase.db
                .colections("Users")
                .doc(auth.user.uid)
                set({
                    id: auth.user.uid,
                    email : usuario.email,
                    nombre : usuario.nombre,
                    apellido: usuario.apellido
                },merge : true
                ).then(doc =>   {
                    usuario.uid = auth.usuario.uid;
                    dispatch({
                        type: "INICIAR_SESSION",
                        session: usuario,
                        autenticado: true
                    })
                    resolve();
                })
            })
            .catch(error =>{
                console.log('error', error);
            })
        })
    };


    export const salirSesion(dispatch, firebase) =>{
        return new Promise((resolve, eject) =>{
            firebase.auth.signOut().then(salir =>{
                dispatch({
                    type:"SALIR_SESSION",
                    nuevoUsuario :{
                        nombre: "",
                        apellido:"",
                        email:"",
                        foto:"",
                        id:"",
                        telefono:""
                    },
                    autenticado:false
                });
                resolve();
            })
        })
    }

