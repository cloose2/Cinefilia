import React from 'react';
import {View,Text,StatusBar,Image,TouchableHighlight} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {habilitaInclusaoContato} from '../actions/Filmes'; 


const TabBarMenu = props =>(
    <View style ={{backgroundColor:'#404042',elevation:4}}>
        <StatusBar backgroundColor='#404042'/>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{height:50,justifyContent:'center'}}>
                <Text 
                style={{color:'#fff',fontSize:20,marginLeft:20}}>
                Cinefilia
                </Text>
            </View>
                <View style={{flexDirection:'row',marginRight:20}}>
                    <View style={{width:50,justifyContent:'center',alignItems:'center'}}>
                    
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <TouchableHighlight onPress ={
                            ()=>firebase.auth().signOut()
                                .then(()=>Actions.telaLogin())
                            }>
                            <Text style={{fontSize:20,color:'#fff'}}>Sair</Text>
                        </TouchableHighlight>
                    </View>
                </View>
        </View>
        <TabBar {...props} style ={{backgroundColor:'#404042',elevation:0}} />
    </View>
);



export default connect(null,{habilitaInclusaoContato})(TabBarMenu);