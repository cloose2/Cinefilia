import React,{Component} from 'react';
import { View,Text, ListView,TouchableHighlight,StyleSheet,Image,ImageBackground } from 'react-native';
import {InteressesFetch, interesse} from '../actions/Filmes';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

class telaInteresse extends Component  {

    componentWillMount(){
        this.props.InteressesFetch();
        this.criaFontedeDados(this.props.interesses);
    }
    criaFontedeDados(interesses){
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        this.fonteDeDados = ds.cloneWithRows(interesses)
    }

    componentWillReceiveProps(nextProps){
        this.criaFontedeDados(nextProps.interesses);
    }
    detalhesItem(obj){
        Actions.detalhesGeral({titulo:obj.data.titulo,sobre:obj.data.sobre,imagem:obj.data.imagem,id:obj.data.uid});

    }
    render(){
        return(
            <ListView
            enableEmptySections
            dataSource={this.fonteDeDados}
            renderRow={data =>{
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
    const interesses = _.map(state.FilmesReducer,(val ,uid)=>{
        return {...val,uid}
    })
    return{interesses:interesses}
}



export default connect(mapStateToProps,{InteressesFetch})(telaInteresse);