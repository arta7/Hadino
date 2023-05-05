import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator
} from 'react-native';
import CenterModal from './../Components/CenterModal'
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
  import Buttons from './../Components/Buttons'
  import Textinputs from './../Components/Textinputs';;
import {APIMaster} from '../API/APIMaster';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LoginData} from './../Redux/LoginData'
  const ColorRange=[
   '#eb5853', '#eb5b52', '#ec5d50', '#ec604f',
       '#ec624e', '#ec654c', '#ed674b', '#ed6a49', 
       '#ee6d47', '#ef7145', '#ef7443', '#f07841']

    const Data=[{title:'Iran(+98)',Code:'+98'},{title:'afghanestan(+99)',Code:'+99'}]


const Splash =(props)=>{
    const [username,setusername] = useState('')
  
            let CheckLogin=async()=>{
              let Token =  await AsyncStorage.getItem("Token")
              let Phone =  await AsyncStorage.getItem("Phone")
              let Code = await AsyncStorage.getItem("Code")
              console.log('Token',Token)
                if(Token != '' && Token != null)
                {
                  LoginData.token = Token.toString();
                  console.log('Token1', LoginData.token)
                  LoginData.Phone = Phone.toString()
                  LoginData.Code = Code.toString()
                }
             }

     useEffect(()=>{
     
      CheckLogin()

      //  props.navigation.replace('Controls')
     },[])
  
  return (
    <View style={styles.container}>
 
     
  </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageView:{
      justifyContent:'center',alignItems:'center',alignSelf:'center'
      ,width:wp('40%'),height:wp('40%')
    
    },
  ViewContainer :{
     alignSelf:'center',justifyContent:'center',alignSelf:'center'
    //  ,flex:0.3
    //  ,position:'absolute'
     ,height:hp('15%')
  },
  TouchableLoginStyle: {
  borderRadius:10,borderColor:'white',
  borderWidth:1,backgroundColor:'white',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
  ,height:60,
   alignSelf:'center',justifyContent:'center',alignSelf:'center',
},
ViewTextInputView:{
    justifyContent:'center',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
    ,height:hp('40%')
    
},
  textStyleLogin:{
    textAlign:'center',color:'#F07B3F',fontSize:wp('4%')
  },
  textStyleSignUp:{
    textAlign:'center',color:'white',fontSize:wp('4%')
  }, 
  StyleLogin:{
    textAlign:'center',color:'white',fontSize:wp('4%'),marginLeft:20
  },
  ViewStyle:{
      flexDirection:'row',justifyContent:'space-between'
      ,alignItems:'center',alignSelf:'center'
      ,marginTop:10
  },
  ErrorFiled:{
    textAlign:'right',color:'yellow',fontSize:15,marginTop:3
  }
  
});
export default Splash;


