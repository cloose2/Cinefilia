import React from 'react';
import {Router,Scene,Schema} from 'react-native-router-flux';
import telaLogin from './components/telaLogin';
import telaCadastro from './components/telaCadastro';
import detalhesGeral from './components/detalhesGeral';
import detalhesFilmes from './components/detalhesFilmes';
import detalhesVistos from './components/detalhesVistos';
import Principal from './components/Principal';



export default props => (
    <Router navigationBarStyle={{backgroundColor:'#404042'}} titleStyle={{color:'#fff'}}>
        <Scene key = 'telaLogin' component={telaLogin} title="Login"  initial hideNavBar={true}/>       
        <Scene key ='telaCadastro' component ={telaCadastro} title="Cadastro"   hideNavBar={false}/>
        <Scene key = 'menu' component={Principal} title = "ds"   hideNavBar={true}/>
        <Scene key = 'detalhesGeral' component={detalhesGeral} title = "Detalhes"   hideNavBar={false}/>
        <Scene key ='detalhesFilmes' component = {detalhesFilmes} title = "Detalhes" hideNavBar={false}    />
        <Scene key ='detalhesVistos' component = {detalhesVistos} title = "Detalhes" hideNavBar={false}    />
    </Router>
);