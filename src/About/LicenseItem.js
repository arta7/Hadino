import React,{useEffect,useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Alert,Image,ActivityIndicator, FlatList, TextInput
  } from 'react-native';
import {Icon} from 'react-native-elements';
// import { I18nManager,View ,Image,Text,StyleSheet,useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';


const BodyString = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در'



export default  LicenseItem=(props)=> {
    
  return (
    <View style={{flex:1,marginTop:20}}>

<View style={{width:wp('95%'),marginHorizontal:wp('2.5%'),marginBottom:5
    ,marginTop:5,padding:5}}>
    <Text style={{color:'black',fontSize:wp('4%'),fontFamily:'Digikala'}}>{BodyString}</Text>
  </View>

     </View>


    
  );

}