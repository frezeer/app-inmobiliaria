export const initialState ={
    usuario:{
        nombre: "",
        password:"",
        appellido:"",
        email:"",
        telefono:"",
        id:"",
        foto:""
        
    },
    autenticado: false
    
}

const sesionReducer = (state = initialState, action) => {

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
                usuario : action.nuevoUsuario,
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