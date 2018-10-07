import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';

import {
    LISTA_INTERESSES,
    LISTA_VISTOS } from './types';

export const interesse = ({tituloFilme,sobre,imagem})=>{
    return (dispatch) =>{
        const {currentUser} = firebase.auth();
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref('/interesse/'+emailUsuarioB64)
            .push({titulo:tituloFilme,sobre:sobre,imagem:imagem})
            .then(alert('Interesse registrado com sucesso'))
    }
}

export const vistos = ({tituloFilme,sobre,imagem})=>{
    return (dispatch) =>{
        const {currentUser} = firebase.auth();
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref('/vistos/'+emailUsuarioB64)
            .push({titulo:tituloFilme,sobre:sobre,imagem:imagem})
            .then(alert('Filme encaminhado para lista dos Vistos'))
    }
}

export const FilmesVistos = () =>{
    const{currentUser} = firebase.auth();
    return(dispatch) => {
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref('/vistos/'+emailUsuarioB64)
            .on("value",(snapshot)=>{
                //console.log(snapshot.val())
                dispatch({type:LISTA_VISTOS,payload: snapshot.val() })
            })
    }
}


export const InteressesFetch = () =>{
    const{currentUser} = firebase.auth();
    return(dispatch) => {
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref('/interesse/'+emailUsuarioB64)
            .on("value",(snapshot)=>{
                dispatch({type:LISTA_INTERESSES,payload: snapshot.val() })
            })
    }
}

export const deletar = (id) =>{
    const{currentUser} = firebase.auth();
    return(dispatch) => {
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref('/vistos/'+emailUsuarioB64 ).child(id).remove();
        Actions.menu();
    }
}

export const deletarInteresse = (id) =>{
    const{currentUser} = firebase.auth();
    return(dispatch) => {
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref('/interesse/'+emailUsuarioB64 ).child(id).remove();
        Actions.menu();
    }
}

