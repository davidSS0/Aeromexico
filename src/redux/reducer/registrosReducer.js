import {
    AGREGAR_REGISTRO, AGREGAR_REGISTRO_EXITO, AGREGAR_REGISTRO_ERROR, ABRIR_CERRAR_MODAL, COMENZAR_DESCARGA_REGISTROS,
    DESCARGA_REGISTRO_EXITO, DESCARGA_REGISTRO_ERROR, COMENZAR_DESCARGA_FAVORITOS, DESCARGA_FAVORITOS_EXITO, DESCARGA_FAVORITOS_ERROR,
    AGREGAR_FAVORITO
} from "../types";

//cada reducer tiene su state
const initialState = {
    registros: [],
    registrosCompletos: [],
    favoritos: [],
    modal: false,
    error: false,
    loading: false,
    filtroActivo:'students'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_REGISTRO_EXITO:
            return{
                ...state,
                loading:false,
                modal:false,
                registros:[...state.registros,action.payload],
                registrosCompletos:[...state.registrosCompletos,action.payload]
            }
        case AGREGAR_REGISTRO:
            return {
                ...state,
                loading: true
            }
        case ABRIR_CERRAR_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case COMENZAR_DESCARGA_REGISTROS:
            return {
                ...state,
                loading: true,
            }
        case DESCARGA_REGISTRO_EXITO:
            return {
                ...state,
                error: false,
                loading: false,
                registros: action.payload.data.filter(data =>
                    action.payload.parametro == 'students' ? data.hogwartsStudent && data : data.hogwartsStaff && data
                ),
                registrosCompletos: action.payload.data,
                filtroActivo:action.payload.parametro
            }
        case DESCARGA_REGISTRO_EXITO:
            return {
                ...state,
                error: false,
                loading: false,
                registros: action.payload,
            }
        case COMENZAR_DESCARGA_FAVORITOS:
            return {
                ...state,
                error: false,
                loading: false,
                favoritos: state.registrosCompletos.filter(data => data.isFavorite == true && data)
            }
        case AGREGAR_FAVORITO:
            return {
                ...state,
                error: false,
                loading: false,
                registros: state.registros.filter(data =>{
                    if(action.payload==data.id){
                        data.isFavorite=!data.isFavorite;
                        console.log(data.isFavorite);
                    }
                    return data;
                }
                ),
            }
        default:
            return state;
    }
}