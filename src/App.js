import { Fragment, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Modal from "./components/Modal";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { obtenerFavoritos, obtenerRegistros } from "./redux/actions/registrosAction";
import Buttons from "./components/Buttons";
import Loading from "./components/Loading";
function App() {
  const dispatch = useDispatch();
  const descargaRegistro = (data) => dispatch(obtenerRegistros(data));
  const descargaFavoritos = () => dispatch(obtenerFavoritos());
  //state redux
  const modal = useSelector(state => state.registros.modal);
  const loading = useSelector(state => state.registros.loading);
  const registros = useSelector(state => state.registros.registros);
  useEffect(() => {
    descargaRegistro('students');
  }, []);
  useEffect(() => {
    descargaFavoritos();
  }, [registros]);
  return (
    <Fragment >
      <div className="all">
        <Header titulo="Selecciona tu filtro" />
        {
          modal
            ?
            <Modal />
            :
            null
        }
        {
          loading ?
            <Loading />
            :
            null
        }
        <div className="a">
          <Card />
        </div>
        <Buttons />
      </div>
    </Fragment>
  );
}

export default App;
