
import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

const Title = ({children}) => {
  return (
    <View style={style.container}>
        <Text style={style.title}>{children}</Text>
    </View>
  )
}

export default Title


const style = StyleSheet.create({
    container:{
        borderWidth:2,
        padding:8,
        borderColor:"#ffb300"
    },
    title:{
        fontSize:23,
        fontWeight:"bold",
        color:"#ddb52f",
        textAlign:'center'
    }
})
