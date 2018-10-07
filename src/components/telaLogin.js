import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  StatusBar,
  Button,
  View,
  ImageBackground,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,autenticarUsuario} from '../actions/AuthActions';


class telaLogin extends Component{
    _autenticaUsuario(){
        const email =this.props.email;  
        const senha =this.props.senha;
        this.props.autenticarUsuario({email,senha});
    }

    render(){
        return (
            <ImageBackground  style={{width: '100%', height: '100%',backgroundColor:'#404042'}}  >
                <StatusBar backgroundColor='#404042'/>
                <View style={styles.tela}>
                    <View style={{flex:1,
                        justifyContent:'center',//altura
                        alignItems:'center'}}>
                        <Image style={{width:300,height:300}} source={require('../imgs/logo.png')}/>
                    </View>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                        <TextInput placeholderTextColor='#fff' value={this.props.email}  onChangeText={texto => this.props.modificaEmail(texto) } style={{fontSize:20,height:45,color:'white',width:'100%'}} underlineColorAndroid='#F25D4D' placeholder="Digite seu Email"/>
                        <TextInput secureTextEntry={true} placeholderTextColor='#fff' value={this.props.senha} onChangeText={texto => this.props.modificaSenha(texto) } underlineColorAndroid='#F25D4D' style={{fontSize:20,height:45,color:'white',width:'100%'}} placeholder="Digite sua Senha"/>
                        <TouchableHighlight onPress={()=>Actions.telaCadastro()} underlayColor="#F25D4D">
                            <Text style={{fontSize:20,marginTop:10,color:'#fff'}}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{flex:1}}>
                        <Button 
                            title ="Acessar"
                            color='#F25D4D'
                            onPress={()=>this._autenticaUsuario()}
                        /> 
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state =>({
    email: state.AuthReducer.email,
    senha: state.AuthReducer.senha,
});
export default connect(mapStateToProps,{modificaEmail,modificaSenha,autenticarUsuario})(telaLogin);


styles = StyleSheet.create({
    tela:{
        flex:1,
        padding:10
    },
    ViewTitulo :{
        flex:1,
        justifyContent:'center',//altura
        alignItems:'center',
    },
    TextoTitulo:{
        fontSize:25,
        marginTop:50
    },
    ViewFormulario :{
        flex:2
    },
    TextoForm:{
        fontSize:20,
        height:45
    },
    ViewBotao :{
        flex:2
    },
});