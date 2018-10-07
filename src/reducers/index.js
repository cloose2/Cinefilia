import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import FilmesReducer from './FilmesReducer';
import VistoReducer from './VistoReducer';

export default combineReducers({
    AuthReducer: AuthReducer,
    FilmesReducer:FilmesReducer,
    VistoReducer:VistoReducer,

});