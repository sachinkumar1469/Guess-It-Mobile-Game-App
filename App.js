import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,ImageBackground, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [number,setNumber] = useState();

  return (
    <LinearGradient colors={['#cf23cf','#ab00ab','#790079']} style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.img} resizeMode='cover' imageStyle={{opacity:0.3}}>
        <SafeAreaView style={styles.container}>
          {!number ? <StartGameScreen setNumber={setNumber}/> : <GameScreen selectedValue={number}/>}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style='inverted'/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  img:{
    height:'100%',
    width:'100%',
  }
});
