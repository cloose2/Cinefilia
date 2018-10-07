import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  View
} from 'react-native';




export default class listaFilmes extends Component {
  render() {
    return (
    
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={{width:100,height:100}} source={{uri:'https://image.tmdb.org/t/p/w500/'+this.props.item.backdrop_path}}/>
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}>{this.props.item.title}</Text>
          <Text style={styles.txtValor}>Nota: {this.props.item.vote_average}</Text>
          <Text style={styles.txtDetalhes}>Data da Publicação: {this.props.item.release_date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    borderWidth:0.5,
    borderColor:'#999',
    backgroundColor:'#FFF',
    margin:10,
    padding:10,
    flexDirection:'row'
  },
  foto:{
    width:102,
    height:102,
  },
  detalhesItem:{
    marginLeft:20,
    flex:1
  },
  txtTitulo:{
    fontSize:20,
    color:'#F25D4D',
    marginBottom:5
  },
  txtValor:{
    fontSize:16,
    fontWeight:'bold'
  },
  txtDetalhes:{
    fontSize:16
  },
});
