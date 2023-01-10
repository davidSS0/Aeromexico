import clienteAxios from "../../config/api";
import { AGREGAR_REGISTRO, AGREGAR_REGISTRO_EXITO, AGREGAR_REGISTRO_ERROR, ABRIR_CERRAR_MODAL,COMENZAR_DESCARGA_REGISTROS,
    DESCARGA_REGISTRO_EXITO,DESCARGA_REGISTRO_ERROR,COMENZAR_DESCARGA_FAVORITOS,DESCARGA_FAVORITOS_EXITO,DESCARGA_FAVORITOS_ERROR,
    AGREGAR_FAVORITO } from "../types";


// ACCIONES DEL MODAL

export function modalAcciones(bandera) {
    return (dispatch) => {
        dispatch(mostrarModal(bandera));
    }
}
const mostrarModal = alert => ({
    type: ABRIR_CERRAR_MODAL,
    payload: alert
})

//ACCIONES DE LOS REGISTROS
export function crearNuevoRegistroAction(registro) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            const data=await clienteAxios.post('/students', registro);
            console.log(data);
            dispatch(agregarRegistroExito(registro));
            
        } catch (error) {
        }

    }
}

const agregarProducto = () => ({
    type: AGREGAR_REGISTRO
})
const agregarRegistroExito = (registro) => ({
    type: AGREGAR_REGISTRO_EXITO,
    payload: registro
})

export function obtenerRegistros(parametro) {
    return async (dispatch) => {
        dispatch(descargarRegistros())
        try {
            const respuesta = await clienteAxios.get(`/students`);
            dispatch(descargaRegistroExitoso({data:respuesta.data,parametro:parametro}));

        } catch (error) {
            dispatch(descargaRegistroError(true))
        }
    }
}

const descargarRegistros = () => ({
    type: COMENZAR_DESCARGA_REGISTROS,
    payload: true
})

const descargaRegistroExitoso = (data) => ({
    type: DESCARGA_REGISTRO_EXITO,
    payload: data
})
const descargaRegistroError = (estado) => ({
    type: DESCARGA_REGISTRO_ERROR,
    payload: estado
});
//FAVORITOS
export function obtenerFavoritos() {
    return async (dispatch) => {
        dispatch(descargarFavoritos())
       
    }
}

const descargarFavoritos = () => ({
    type: COMENZAR_DESCARGA_FAVORITOS
});

export function editarRegistroAction(id) {
    return async (dispatch) => {
        //dispatch(editarProducto());
        try {
            const respuesta = await clienteAxios.get(`/students/${id}`);
            respuesta.data.isFavorite=!respuesta.data.isFavorite;
            await clienteAxios.put(`/students/${id}`,respuesta.data);
            console.log('mi id',id);
            dispatch(agregaFavorito(id));
        } catch (err) {

        }
    }
}


const agregaFavorito = (id) => ({
    type: AGREGAR_FAVORITO,
    payload:id
})
