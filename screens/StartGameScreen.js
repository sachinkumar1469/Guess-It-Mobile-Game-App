import React, { useState } from 'react'

import {View,Text,StyleSheet,TextInput,Alert} from 'react-native'

import PrimaryButton from '../components/PrimaryButton'


function StartGameScreen({setNumber}) {

    const [input,setInput] = useState();

    function onInputChange(value){
        setInput(value);
    }

    function alertPressed(){
        setInput();
    }

    function onConfirm(v){
        const intValue = parseInt(input);
        console.log(typeof intValue,intValue);
        if(isNaN(intValue) || intValue<=0 || intValue >=99){
            console.log("True this number is nan");
            // Show Alert
            Alert.alert('Alert','Number is not valid!',[{text:'Ok',style:'default',onPress:alertPressed}])
            return;
        }
        setNumber(intValue);
    }


  return (
    <View style={style.inputContainer}>
        <View style={style.inputContainerNested}>
            <TextInput 
                placeholder='Enter Number' 
                style={style.input} 
                maxLength={2} 
                keyboardType={'number-pad'} 
                autoCorrect={false} 
                autoCapitalize="none" 
                value={input}
                onChangeText={onInputChange}
            />
            <View style={style.btnView}>
                <PrimaryButton onPress={alertPressed}>Reset</PrimaryButton>
                <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
  )
}

export default StartGameScreen;

const style = StyleSheet.create({
    inputContainer:{
        flex:1,
        padding:16,
        paddingTop:25,
        justifyContent:'center',
    },
    inputContainerNested:{
        backgroundColor:'white',
        padding:16,
        paddingVertical:20,
        elevation:20,
        borderRadius:5,
    },
    input:{
        width:"100%",
        borderWidth:1,
        borderColor:"lightgrey",
        padding:0,
        height:57,
        paddingHorizontal:13,
        fontSize:28,
        paddingVertical:5,
        marginBottom:10,
        textAlign:'center'

    },
    btnView:{

    }
})
