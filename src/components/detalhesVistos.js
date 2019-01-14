import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
  Button,
  View,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {interesse,vistos,deletar} from '../actions/Filmes';



class detalhesFilmes extends Component{
    _interesse(){
        const tituloFilme= this.props.titulo;
        const sobre = this.props.sobre;
        const imagem = this.props.imagem;
       // alert(tituloFilme);
        this.props.interesse({tituloFilme,sobre,imagem});
    }
    _vistos(){
        const tituloFilme= this.props.titulo;
        const sobre = this.props.sobre;
        const imagem = this.props.imagem;
       // alert(tituloFilme);
        this.props.vistos({tituloFilme,sobre,imagem});
    }
    _deletar(id){
        this.props.deletar(id);
    }

    render(){
        return (
            <ScrollView style={{backgroundColor:'#DDD',marginTop:50}}>
            <StatusBar backgroundColor='#404042'/>
            <View style={{flex:1}}>
            <View style ={{flex:3,alignItems:'center'}}>
                <Text style={{fontSize:25,color:'#F25D4D',marginBottom:10}}>{this.props.titulo}</Text>
                <Image style={{width:300,height:300,borderRadius: 30,marginBottom:10}} source={{uri:'https://image.tmdb.org/t/p/w500/'+this.props.imagem}}/>
            </View>
            <View style={{flex:1}}>
                <Text style={{fontSize:16,textAlign:'justify',marginBottom:5}}>{this.props.sobre}</Text>
            </View>
            <View style ={{flex:1,flexDirection:'row',marginTop:15,justifyContent: 'center'}}>
            <Button 
                title ="Tirar da Lista"
                color='#F25D4D'
                onPress={()=>this._deletar(this.props.id)}
            /> 
            </View>
            </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state=>({
    
});

export default connect(mapStateToProps,{interesse,vistos,deletar})(detalhesFilmes);

