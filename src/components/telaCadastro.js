import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  TextInput,
  StatusBar,
  Button,
  View,
  ImageBackground,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {modificaEmail,modificaSenha,modificaIdade,modificaNome,cadastraUsuario} from '../actions/AuthActions';



class telaCadastro extends Component{

    _cadastraUsuario(){
        //alert('oi');
        const email = this.props.email;
        const senha = this.props.senha;
        const nome = this.props.nome;
        const idade = this.props.idade;
        this.props.cadastraUsuario({email,senha,nome,idade});
    }

    render(){
        return (
            <ImageBackground  style={{width: '100%', height: '100%',backgroundColor:'#404042'}}  >
                <StatusBar backgroundColor='#404042'/>
                <View style={{flex:1}}>
                    <View style={{alignItems:'center',flex:1,justifyContent:'center',marginTop:100}}>
                        <Image style={{width:300,height:300}} source={require('../imgs/logo.png')}/>
                    </View>
                    <View style={{flex:6,justifyContent:'center',alignItems:'center'}}>
                        <TextInput value={this.props.nome} placeholderTextColor='#fff' onChangeText={(texto) => this.props.modificaNome(texto)} underlineColorAndroid='#F25D4D' style={{fontSize:20,height:45,width:'100%'}} placeholder="Digite seu Nome"/>
                        <TextInput value={this.props.email} onChangeText={(texto) => this.props.modificaEmail(texto)} placeholderTextColor='#fff' underlineColorAndroid='#F25D4D' style={{fontSize:20,height:45,width:'100%'}} placeholder="Digite seu Email"/>
                        <TextInput value={this.props.idade} onChangeText={(texto) => this.props.modificaIdade(texto)} placeholderTextColor='#fff' underlineColorAndroid='#F25D4D' keyboardType='numeric' style={{fontSize:20,height:45,width:'100%'}} placeholder="Digite sua Idade"/>
                        <TextInput value={this.props.senha} secureTextEntry={true} placeholderTextColor='#fff' onChangeText={(texto) => this.props.modificaSenha(texto)} underlineColorAndroid='#F25D4D' style={{fontSize:20,color:'#fff',height:45,width:'100%'}} placeholder="Digite sua Senha"/>
                    </View>
                    <View style={{flex:2}}>
                        <Button 
                            title ="Cadastrar"
                            color='#F25D4D'
                            onPress={()=>this._cadastraUsuario()}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state=>({
    nome: state.AuthReducer.nome,
    email: state.AuthReducer.email,
    idade: state.AuthReducer.idade,
    senha: state.AuthReducer.senha,
});

export default connect(mapStateToProps,{modificaEmail,modificaSenha,modificaIdade,modificaNome,cadastraUsuario})(telaCadastro);