const INITIAL_STATE={
    nome:'',
    email:'',
    senha:'',
    idade:'',
    filme:[],
}

import {
    MODIFICA_EMAIL,
    MODIFICA_IDADE,
    MODIFICA_NOME,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_ERRO,
    DETALHES_FILME,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    LOGIN_USUARIO_SUCESSO,
    CADASTRO_EM_ANDAMENTO } from '../actions/types';

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case MODIFICA_NOME :
            return { ...state, nome: action.payload }
        case MODIFICA_SENHA :
            return { ...state, senha: action.payload }
        case MODIFICA_EMAIL :
            return { ...state, email: action.payload }
        case MODIFICA_IDADE :
            return { ...state, idade: action.payload }
        case DETALHES_FILME :
            console.log('reducer');
            return {...state,filme:action.payload}
        default:
            return state;
    }
}