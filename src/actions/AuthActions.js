import {
    MODIFICA_EMAIL,
    MODIFICA_IDADE,
    MODIFICA_NOME,
    MODIFICA_SENHA,
    DETALHES_FILME,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO } from './types';

import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';



export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaIdade = (texto) =>{
    return{
        type: MODIFICA_IDADE,
        payload:texto
    }
}
export const modificaNome = (texto) =>{
    return{
        type: MODIFICA_NOME,
        payload:texto
    }
}
export const modificaSenha = (texto) =>{
    return{
        type: MODIFICA_SENHA,
        payload:texto
    }
}

export const cadastraUsuario = ({email,senha,nome,idade}) =>{
    return (dispatch) =>{

        firebase.auth().createUserWithEmailAndPassword(email,senha)
        .then(user=> {
            let emailB64 =b64.encode(email);
            firebase.database().ref('/perfil/'+emailB64)
                .push({nome:nome,idade:idade})
                .then(Actions.telaLogin()) 
                .then(alert('Cadastro efetuado com sucesso'))
        });
    }
}

export const autenticarUsuario = ({email,senha}) =>{
    return(dispatch)=>{

    firebase.auth().signInWithEmailAndPassword(email,senha)
        .then(Actions.menu());
    }
}

export const detalhes = ({filme})=>{
    return(dispatch)=>{
    //console.log('Actions',filme);
    Actions.detalhesFilmes({titulo:filme.title,imagem:filme.poster_path,sobre:filme.overview,pontuacao:filme.vote_average});
    }
}





