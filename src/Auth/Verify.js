import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,ActivityIndicator,Image
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from './../Components/Buttons'
import Textinputs from './../Components/Textinputs'
// import {APIMaster} from '../API/APIMaster';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import RoundList from '../Components/RoundList'

import {ColorRange} from './../Data/StableData';


const Verify =(props)=>{
    const [showIndicator,setshowIndicator] = useState(false)
    const [CodeError,setCodeError] = useState('')
    const [Timer,setTimer] = useState(120)
    const [Code,setCode] = useState('')
      
    let TimerIntervel=null;

     
    function n(n){
      return n > 9 ? "" + n: "0" + n;
  }
    let formatSeconds = (sec, minute = 0) => {
        return sec < 60
          ? `${n(minute)}:${n(sec)}`
          : formatSeconds(sec - 60, minute + 1);
      };





  useEffect(()=>{
    
    TimerIntervel = setInterval(() => {
      if(Timer != 0)
          setTimer(Timer-1)
    }, 1000);

    return () => clearInterval(TimerIntervel)


  },[Timer])






  return (
    <View style={styles.container}>
       <ScrollView>
   {/* <LinearGradient colors={ColorRange} style={{height:hp('100%')}}>   */}
  

   
   <View style={{width:'100%',height:hp('23%'),marginTop:20}}> 
     <View style={{width:wp('100%'),height:'100%',position:'absolute'
     ,marginLeft:wp('5%'),marginRight:wp('5%')}}> 
     <Image source={require('./../Images/MainImage.png')} 
     style={{width:'100%',height:'80%'}} 
      resizeMode='contain'
     />
  
     </View>
   <View style={{justifyContent:'center'
    ,alignItems:'center',alignSelf:'center',marginTop:hp('12%')}}>
    <Image source={require('./../Images/Rectangle.png')}
     style={[styles.ImageView,{position:'absolute'}]} 
    />
     <Image source={require('./../Images/Group.png')}
      style={[styles.ImageView,{position:'absolute',width:wp('20%'),height:wp('20%')}]} 
      resizeMode='stretch'
    />
     </View>

   </View>



   <View style={{marginBottom:20,width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:30}}>
    <Text style={{color:'white',fontSize:wp('5.5%'),fontWeight:'bold'}}>تایید کد امنیتی</Text>
    
  </View>
    <View>
    <RoundList  ShowIcon={true} Title='لطفا کد پیامک شده را وارد کنید' ButtonStyle =
     {{flexDirection:'row-reverse',borderWidth:1,borderColor:'transparent',elevation:0.5,height:40,width:wp('80%')
     ,Opacity:0.6,marginRight:wp('10%'),marginLeft:wp('10%')
     ,justifyContent:'center',alignItems:'center',borderRadius:10}} 
     TitleStyle={{color:'white',fontSize:wp('3%'),textAlign:'right',padding:5,fontFamily:'Digikala'}} ShowIcon={true}
     ImageIcon={'alert-circle'}
     IconType={'feather'}
     IconSize={wp('5%')}
     IconColor='white'
     />
      </View>      
   


    <View style={styles.ViewTextInputView}>
     <Textinputs
       Title = 'کد'
       changeText = {(value)=>setCode(value)}
       values = {Code}
       
     />
     {  
      CodeError != ''  &&
      <Text style={styles.ErrorFiled}>{CodeError}</Text>
      }
  </View>
 


    {Timer !=0 && 
     <Text style={styles.StyleLogin}>
 {formatSeconds(Timer)}
</Text>
}
{
  Timer ==0 &&
  <TouchableOpacity onPress={()=>{setTimer(120)}}  style={styles.ViewStyle}>
<Text style={[styles.StyleLogin,{fontWeight:'bold',marginTop:10,fontSize:wp('4.5%')}]}>
    ارسال مجدد کد
</Text>
</TouchableOpacity>
}
<View style={{marginTop:40}}>

{
  showIndicator ?
 <ActivityIndicator 
  size='large' color='white'
 />
:
   <Buttons 
      ButtonStyle = {styles.TouchableSignUpStyle}
      titleStyle = {styles.textStyleSignUp}
      titleText = 'تایید'
      ButtonOperator = {()=>{ props.navigation.navigate('AccountControl')}}
      />
}

<View style={styles.ViewStyle}>

<TouchableOpacity onPress={()=>{props.navigation.goBack()}}  style={styles.ViewStyle}>
<Text style={[styles.StyleLogin,{fontWeight:'bold',marginTop:10}]}>
      {' بازگشت > ' }
</Text>
</TouchableOpacity>
</View>
   
</View>


      {/* </LinearGradient> */}
      </ScrollView> 
  </View>

  )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,backgroundColor:'#0ab076'
    },
    ViewContainer :{
       alignSelf:'center',justifyContent:'center',alignSelf:'center',width:wp('100%')
        ,position:'absolute',bottom:hp('30%')
    },
    TouchableSignUpStyle: {   
      borderRadius:10,borderColor:'white',
      borderWidth:1,backgroundColor:'white',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
      ,height:55,
       alignSelf:'center',justifyContent:'center',alignSelf:'center'
  },
    textStyleSignUp:{
      textAlign:'center',color:'#0ab076',fontSize:wp('4%'),fontFamily:'Digikala'
    },
   ErrorFiled:{
    textAlign:'right',color:'yellow',fontSize:wp('4%'),marginTop:30,fontFamily:'Digikala'
    },
    StyleLogin:{
      textAlign:'center',color:'white',fontSize:wp('4%'),marginTop:30,fontFamily:'Digikala'
    },
    ViewStyle:{
       justifyContent:'center'
        ,alignItems:'center',alignSelf:'center',marginBottom:10
    },
    ImageView:{
        justifyContent:'center',alignItems:'center',alignSelf:'center'
        // ,top:'10%'
      },
      ViewTextInputView:{
        justifyContent:'center',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
        ,marginTop:10
       
    },
    
  });
export default Verify;


