
import { View,Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

const GameoverScreen = () => {
  return (
    <View style={style.container}>
        <View style={style.wrapper}> 
            <Title>Game Over</Title>
            <View style={style.imageView}>
                <Image source={require("../assets/success.png")} style={style.image}/>
            </View>
            <Text style={{fontSize:20,textAlign:'center',marginBottom:10}}>Your Phone Take X Rounds To Guess The Number Y!</Text>
            <PrimaryButton>New Game</PrimaryButton>
        </View>
    </View>
  )
}

export default GameoverScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        
    },
    wrapper:{
        backgroundColor:"white",
        padding:10,
        justifyContent:"space-between",
        borderRadius:5,
    },
    imageView:{
        height:300,
        width:300,
        overflow:"hidden",
        borderRadius:150,
        marginVertical:10,
    },
    image:{
        width:"100%",
        height:"100%"
    }
})
