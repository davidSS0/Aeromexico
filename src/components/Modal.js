import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { crearNuevoRegistroAction, modalAcciones } from '../redux/actions/registrosAction';
import Input from '../ui/input';
import Radio from '../ui/radio';
import Select from '../ui/select';

const Modal = () => {
    const dispatch = useDispatch();
    const modalAccion = (data) => dispatch(modalAcciones(data));
    const registro = (data) => dispatch(crearNuevoRegistroAction(data));
    const[error,setError]=useState(false);
    const { name, dateOfBirth, eyeColour, hairColour, house, alive, tipo, onInputChange, formState } = useForm({
        name: '',
        dateOfBirth: '',
        eyeColour: '',
        hairColour: '',
        house: '',
        alive: '',
        tipo: ''
    });

    const submit = (e) => {
        e.preventDefault();
        if (name === '' || dateOfBirth === '' || eyeColour === '' || hairColour === '' || house === '' || alive === '' || tipo === '') {
            setError(true);
        } else {
            const id = Math.floor(Math.random() * (1000 - 20) + 20);
            formState.id = id;
            formState.hogwartsStudent = formState.tipo === 'student' ? true : false;
            formState.hogwartsStaff = formState.tipo === 'staff' ? true : false;
            formState.alive = formState.alive === 'vivo' ? true : false;
            registro(formState);
        }
    }


    return (
        <div className="modal-container">
            <div className="data-container">
                <div className="modal-title">
                    <p>Agrega un personaje</p>
                </div>
                <div className="modal-close">
                    <button onClick={() => modalAccion(false)}>X</button>
                </div>
                <form onSubmit={submit} >
                    <div className="flex row gap">
                        <Input
                            name="name"
                            change={onInputChange}
                            className="row-50"
                            title="Nombre" />

                        <Input
                            name="dateOfBirth"
                            change={onInputChange}
                            className="row-50"
                            title="Cumpleaños"
                        />
                    </div>

                    <div className="flex row gap">
                        <Input
                            name="eyeColour"
                            change={onInputChange}
                            className="row-50"
                            title="Color ojos" />
                        <Input
                            name="hairColour"
                            change={onInputChange}
                            className="row-50"
                            title="Color pelo" />
                    </div>
                    <div className="flex row gap">
                        <div className="row-50">
                            <label>Genero</label>
                            <div className="flex row">
                                <Radio
                                    name="gender"
                                    change={onInputChange}
                                    value="male"
                                    titleInput="Hombre"
                                />
                                <Radio
                                    name="gender"
                                    change={onInputChange}
                                    value="female"
                                    titleInput="Mujer"
                                />
                            </div>
                        </div>
                        <div className="row-50">
                            <label>Posición</label>
                            <div className="flex row">
                                <Radio
                                    name="tipo"
                                    change={onInputChange}
                                    value="student"
                                    titleInput="Estudiante"
                                />
                                <Radio
                                    name="tipo"
                                    change={onInputChange}
                                    value="staff"
                                    titleInput="Staff"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex row gap">
                        <div className="row-50">
                            <Select
                                name="house"
                                change={onInputChange}
                                title="Casa"
                            />
                        </div>
                        <div className="row-50">
                            <label>Estado</label>
                            <div className="flex row">
                                <Radio
                                    name="alive"
                                    change={onInputChange}
                                    value="vivo"
                                    titleInput="Vivo"
                                />
                                <Radio
                                    name="alive"
                                    change={onInputChange}
                                    value="muerto"
                                    titleInput="Muerto"
                                />
                            </div>

                        </div>

                    </div>
                    { error && <p>Llena todos los campos</p>}
                    <div className="flex justify-center margin-top">
                        <button type="submit" className="button">Guardar</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Modal;
