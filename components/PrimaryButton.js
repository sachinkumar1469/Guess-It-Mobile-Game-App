import React from 'react'
import { Pressable,View,Text,StyleSheet } from 'react-native'



function PrimaryButton({children,onPress}) {
  return (
    <View style={style.container}>
        <Pressable onPress={onPress} android_ripple={style.android_ripple} style={style.press}>
            <Text style={style.btnText}>{children}</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton;


const style = StyleSheet.create({
    container:{
        backgroundColor:'rgb(205, 9, 205)',
        borderRadius:10,
        elevation:20,
        marginVertical:5,
        overflow:'hidden'
    },
    btnText:{
        color:'white',
        textAlign:'center',
        padding:8,
        borderRadius:10,
        fontSize:18
    },
    android_ripple:{
        color:'violet',
        borderRadius:10
    },
    press:{
        borderRadius:10
    }
})
