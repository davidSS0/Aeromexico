import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { crearNuevoRegistroAction, modalAcciones } from '../redux/actions/registrosAction';
import Input from '../ui/input';

const Loading = () => {
    


    return (
        <div className="modal-container ">
             <p className="title-loading">Cargando.....</p>   
        </div>
    );
}

export default Loading;
