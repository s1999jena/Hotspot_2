import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import fetchlocation from './components/fetchlocation'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Text>Welcome to HotspotShare</Text>
      <fetchlocation onGetLocation={}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
