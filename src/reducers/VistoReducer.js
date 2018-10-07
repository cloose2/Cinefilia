import {
   LISTA_VISTOS
} from '../actions/types';


const INITIAL_STATE={

}




export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LISTA_VISTOS:
            return action.payload
        default:
            return state;
    }
}