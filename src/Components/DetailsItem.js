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


const DetailsItem =(props)=>{
  

  return (
    <View style={styles.container}>
     
     <View style={{marginRight:'5%',marginTop:'5%'}}>
     <Text style={[{fontSize:wp('5.5%')
     ,fontWeight:'bold',fontFamily:'Digikala'},props.TitleStyle]}>
        {props.Title}
       </Text>     
       <Text style={[{fontSize:wp('5.5%'),marginTop:'0.7%',fontFamily:'Digikala'}
       ,props.SubtitleStyle]}>
        {props.SubTitle}  {props.Type ==1 ? 'دقیقه' : props.Type ==2 ?'تومان':''}
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



export default DetailsItem;


