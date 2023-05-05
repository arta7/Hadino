import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'


const Comments =(props)=>{
  

  return (
    <View style={styles.container}>
     
     <View style={{alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:hp('5%')}}>
     <Text style={{fontFamily:'Yekan',textAlign:'center'}}>
       Comming Soon ...
       </Text>     
 </View>
    

       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default Comments;


