

const sesionReducer = (state, action) => {

    switch(action.type){
        case "INICIAR_SESSION":
            return {
                ...state,
                usuario : action.session,
                autenticado : action.autenticado
            };
        case "CAMBIAR_SESSION":
            return {
                ...state,
                usuario : nuevoUsuario,
                autenticado : action.autenticado    
            };
        case "SALIR_SESSION":
            return {
                ...state,
                usuario: action.nuevoUsuario,
                autenticado: action.autenticado
            };
        default : 
            return state;
    }
};


export default sesionReducer;