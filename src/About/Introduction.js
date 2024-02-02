import React,{useEffect,useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Alert,Image,ActivityIndicator, FlatList
  } from 'react-native';
import {Icon} from 'react-native-elements';
// import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';


const BodyString = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در'



export default  AboutItem=(props)=> {
    
  return (
     <View style={{flex:1,marginTop:20}}>

<Image source={require('./../Images/Group.png')}
     style={[styles.ImageView,{justifyContent:'center',alignItems:'center',width:wp('20%'),height:wp('15%')}]} 
     resizeMode='stretch'
    />

<View style={{width:wp('95%'),marginHorizontal:wp('2.5%'),marginBottom:5
    ,marginTop:5,padding:5}}>
    <Text style={{color:'black',fontSize:wp('4%'),fontFamily:'Digikala'}}>{BodyString}</Text>
  </View>





     </View>


    
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:'#cc3333'
  },
  ImageView:{
      justifyContent:'center',alignItems:'center',alignSelf:'center'
      // ,width:wp('40%'),height:wp('40%')
    
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
  ,height:55,
   alignSelf:'center',justifyContent:'center',alignSelf:'center',
},
ViewTextInputView:{
    justifyContent:'center',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
    ,height:hp('40%')
    
},
  textStyleLogin:{
    textAlign:'center',color:'#cc3333',fontSize:wp('4%'),fontFamily:'Digikala'
  },
  textStyleSignUp:{
    textAlign:'center',color:'white',fontSize:wp('4%'),fontFamily:'Digikala'
  }, 
  StyleLogin:{
    textAlign:'center',color:'white',fontSize:wp('4.5%'),fontFamily:'Digikala'
  },
  ViewStyle:{
      justifyContent:'center'
      ,alignItems:'center',alignSelf:'center'
      ,marginTop:10,marginBottom:20
  },
  ErrorFiled:{
    textAlign:'right',color:'yellow',fontSize:15,marginTop:3
  }
  
});