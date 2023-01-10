import React from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarRegistroAction } from '../redux/actions/registrosAction';

const Card = () => {
    const dispatch = useDispatch();
    const favorito = (id) => dispatch(editarRegistroAction(id));
    //state redux
    const registros = useSelector(state => state.registros.registros);
    return (
        <Fragment>
            {registros.length === 0 ? 'No hay registros' : (
                registros.map(data => (
                    <div className="row-25-responsive margin-bottom" key={data.id}>
                    <div className="flex row-responsive b-radius-16">
                        <div className=" flex align-center p-10 " style={data.house==='Gryffindor' ? styles.Gryffindor : data.house==='Slytherin' ? styles.Slytherin : data.house==='Hufflepuff' ? styles.Hufflepuff : styles.Ravenclaw }>
                            <img onClick={()=>favorito(data.id)} className="circle" src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/10/Harry-Potter-png.png?resize=600%2C600&ssl=1" />
                        </div>
                        <div className="degradado flex-1  color-primary p-10 " style={data.alive ? styles.vivo : styles.muertito}>

                            <div className="flex row align-center justify-between">
                                <p >{data.alive ? 'VIVO' : 'MUERTO'}/{data.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}</p>
                                <a onClick={()=>favorito(data.id)}>
                                <svg className="r" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8.60073C1 5.01771 1 3.2262 2.09835 2.1131C3.1967 1 4.96447 1 8.5 1H13.5C17.0355 1 18.8033 1 19.9017 2.1131C21 3.2262 21 5.01771 21 8.60073V17.2499C21 20.649 21 22.3486 19.9446 22.8684C18.8893 23.3883 17.5706 22.3382 14.9332 20.2382L14.0891 19.5661C12.6061 18.3852 11.8647 17.7948 11 17.7948C10.1353 17.7948 9.39386 18.3852 7.91089 19.5661L7.06683 20.2382C4.42943 22.3382 3.11073 23.3883 2.05537 22.8684C1 22.3486 1 20.649 1 17.2499V8.60073Z" stroke="#999999" fill={data.isFavorite ? 'black' : 'white'} />
                                </svg>
                                </a>


                            </div>
                            <h2>{data.name}</h2>
                            <p className="visible-responsible">Cumpleaños <span className="color-secondary">{data.dateOfBirth}</span></p>
                            <p className="visible-responsible">genero <span className="color-secondary">{data.gender ? 'Masculino' : 'Femenino'}</span></p>
                            <p className="visible-responsible">Color de ojos <span className="color-secondary">{data.eyeColour}</span></p>
                            <p className="visible-responsible">Color de pelo <span className="color-secondary">{data.hairColour}</span></p>
                        </div>
                    </div>
                    </div>
                ))
            )}
        </Fragment>
    );
}
const styles = {
    Gryffindor: {
        backgroundColor: 'orange'
    },
    Slytherin: {
        backgroundColor: 'green'
    },
    Hufflepuff: {
        backgroundColor: 'blue'
    },
    Ravenclaw: {
        backgroundColor: 'yellow'
    },
    vivo: {
        backgroundColor: 'white'
    },
    muertito: {
        backgroundColor: '#CCCCCC'
    },
}


export default Card;
