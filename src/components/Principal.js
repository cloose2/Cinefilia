import React,{Component} from 'react';
import { Platform,StyleSheet, Text, View,Dimensions, TextInput,Button,ViewPropTypes} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {DrawerNavigator} from 'react-navigation';
import homeFilmes from './homeFilmes';
import telaInteresse from './telaInteresse';
import telavistos from './telavistos';
import TabBarMenu from './TabBarMenu';

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Filmes' },
      { key: 'second', title: 'Interesses' },
      { key: 'third', title: 'Vistos' },
    ],
  };
  _renderHeader = props => <TabBarMenu {...props}/>;
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: homeFilmes,
          second: telaInteresse,
          third: telavistos,
        })}
        renderTabBar={this._renderHeader}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});