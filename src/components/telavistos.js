import React,{Component} from 'react';
import { View,Text, ListView,TouchableHighlight,Image,StyleSheet} from 'react-native';
import {FilmesVistos} from '../actions/Filmes';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';


class telavistos extends Component  {
    componentWillMount(){
       // console.log('componentWillMount');
        this.props.FilmesVistos();
        this.criaFontedeDados(this.props.vistos);
    }
    criaFontedeDados(vistos){
        console.log(vistos);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        this.fonteDeDados = ds.cloneWithRows(vistos)
    }
    componentWillReceiveProps(nextProps){
       // console.log('componentWillReceive',nextProps.vistos);//ta vindo vazio
        this.criaFontedeDados(nextProps.vistos);
    }
    detalhesItem(obj){
        Actions.detalhesVistos({titulo:obj.data.titulo,sobre:obj.data.sobre,imagem:obj.data.imagem,id:obj.data.uid});

    }
    render(){
        return(
            <ListView
            enableEmptySections
            dataSource={this.fonteDeDados}
            renderRow={data =>{
                console.log('oi',data);
                return(
                <TouchableHighlight onPress={()=>this.detalhesItem({data})} underlayColor="#F25D4D" >
                <View style={styles.item}>
                    <View style={styles.foto}>
                      <Image style={{width:100,height:100}} source={{uri:'https://image.tmdb.org/t/p/w500/'+data.imagem}}/>
                    </View>
                    <View style={styles.detalhesItem}>
                      <Text style={styles.txtTitulo}>{data.titulo}</Text>
                    </View>
                </View>
                </TouchableHighlight>
                );
            }
        }
            />
        )
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
mapStateToProps = state=>{
    const vistos = _.map(state.VistoReducer,(val ,uid)=>{
        return {...val,uid}
    })
    return{vistos:vistos}
}

export default connect(mapStateToProps,{FilmesVistos})(telavistos);