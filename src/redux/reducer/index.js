import { combineReducers} from 'redux';
import registrosReducer from './registrosReducer';


export default combineReducers({
    registros:registrosReducer,
})