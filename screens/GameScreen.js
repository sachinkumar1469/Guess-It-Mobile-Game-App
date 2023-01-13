import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

function GameScreen() {
  return (
    <View style={style.container}>
        <Text>Text</Text>
    </View>
  )
}

export default GameScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:12,
        
    }
})
