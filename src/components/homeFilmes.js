import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
  Button,
  View,
  ImageBackground
} from 'react-native';
import axios from 'axios';
import Filmes from './listaFilmes';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {detalhes} from '../actions/AuthActions';



class homeFilmes extends Component{
    constructor(props){
        super(props);
        this.state = { homeFilmes:[]}
      }
      componentWillMount(){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8ceadfa3e0151feffa1607d01ddae116&language=pt-BR')
        .then((response) =>
      {
        this.setState({homeFilmes:response.data.results});
      }).catch(()=>{
        console.log('Erro');
      });
    
      }

    detalhesItem(obj)
    {
      const filme = obj.item;
     // const filme = obj.item;
      this.props.detalhes({filme});
    }

    render(){
        return (
            <ScrollView style={{backgroundColor:'#DDD'}}>
            <ImageBackground  style={{width:'100%'}} source = {require('../imgs/fundo.jpg')} >
            <View style={{flex:1}}>
               { this.state.homeFilmes.map((item) => {return(
              <TouchableHighlight onPress={()=>this.detalhesItem({item})} underlayColor="#F25D4D" >
                <Filmes  item={item}/>
              </TouchableHighlight>
               )})}
               </View>
            </ImageBackground>
            </ScrollView>
        );
    }
}

const mapStateToProps = state=>({
  filme: state.AuthReducer.filme,
});

export default connect(mapStateToProps,{detalhes})(homeFilmes);

