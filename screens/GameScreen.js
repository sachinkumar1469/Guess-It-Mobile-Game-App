import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import {Ionicons} from '@expo/vector-icons'

function genrateRandomNum(min,max,exclude){
  let random = Math.floor(Math.random() * (max-min)) + min;

  if(random == exclude){
    return genrateRandomNum(min,max,exclude);
  } else {
    return random;
  }
}

let min = 1;
  let max = 100;

function GameScreen({selectedValue,setGameOver}) {

  const [currGuess,setCurrGuess] = useState(genrateRandomNum(1,99,selectedValue));

  

  function onNew(direction){

    if(
      (direction=="lower" && currGuess<selectedValue) ||
      (direction=="higher" && currGuess>selectedValue)
    ){
      Alert.alert("Wrong Guess","Don't Lie :)",[{text:"Cancel", style:"cancel"}]);
      return;
    }

    if(direction === 'lower'){
      max = currGuess;
      setCurrGuess(genrateRandomNum(min,max,currGuess));
    }

    if(direction === 'higher'){
      min = currGuess+1;
      setCurrGuess(genrateRandomNum(min,max,currGuess));
    }
  }
  
  useEffect(()=>{
    if(currGuess == selectedValue){
      setGameOver(true);
    }
  },[currGuess])

  return (
    <View style={style.container}>
      <View style={style.wrapper}>        
        <Title>Opponent's Guess</Title>
        <View style={style.innerCont}>
          <Text style={style.currGuess}>{currGuess}</Text>
          <View style={style.controller}>
            <Text style={style.cmt}>Higher Or Lower?</Text>
            <View style={style.btnCont}>
              <PrimaryButton onPress={onNew.bind(this,"lower")} customStyle={{width:50,marginRight:15}}>-</PrimaryButton>
              <PrimaryButton onPress={onNew.bind(this,"higher")} customStyle={{width:50}}>+</PrimaryButton>
            </View>
          </View>
        </View>
        </View>

    </View>
  )
}

export default GameScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:12,  
    },
    wrapper:{
      backgroundColor:"white",
      padding:8,
      borderRadius:5,
      paddingVertical:15,
    },
    innerCont:{
      alignItems:'center',
      marginTop:25,
      width:"100%",
      // borderWidth:1
    },
    btnCont:{
      flexDirection:'row',
      width:"100%",
      justifyContent:'center',
      
    },
    controller:{
      width:'100%',
      // borderWidth:1,
      alignItems:'center'
    },
    currGuess:{
        fontSize:23,
        fontWeight:"bold",
        color:"#ddb52f",
        textAlign:'center',
        borderWidth:1,
        padding:8,
        width:70,
        borderRadius:20,
        borderColor:"#ffb300"
    },
    cmt:{
      margin:15,
      fontSize:20,
      opacity:0.8
    }
})
