import React,{useEffect, useState} from 'react';
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
import {Header,Icon,Avatar,ListItem} from 'react-native-elements'
import DetailsItem from './../Components/DetailsItem'
import { APIMaster } from '../API/APIMaster';
import { LoginData } from '../Redux/LoginData';
import { PropsConsumer } from 'agora-rn-uikit/src/PropsContext';
var moment = require('jalali-moment');
const TransactionList =(props)=>{
  
  
  

   useEffect(()=>{
      

   },[])

   function autocomma(number_input)
   {
     console.log('add comma : ',number_input)
    number_input += '';
    number_input = number_input.replace(',', ''); number_input = number_input.replace(',', ''); number_input = number_input.replace(',', '');
    number_input = number_input.replace(',', ''); number_input = number_input.replace(',', ''); number_input = number_input.replace(',', '');
    
    console.log('add comma1 : ',number_input)
    var x = number_input.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
       x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
  }



  return (
    <View style={styles.container}>

    <FlatList
    data={props.TransactionLists}
    renderItem={({item,index})=>
      
        item.transactionType == 1 ? 
      <ListItem style={{width:wp('100%'),height:hp('13%')
      ,borderWidth:0.3,borderColor:'gray'}}>

<ListItem.Content>
  <ListItem.Title style={{fontSize:wp('3.5%'),marginBottom:10,fontFamily:'Digikala'}}> واریز به حساب</ListItem.Title>
  <ListItem.Title style={{fontSize:wp('3%'),fontFamily:'Digikala'}}>{moment(item.createDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</ListItem.Title>
</ListItem.Content>

<Text style={{fontFamily:'Digikala',color:'#cc3333',fontSize:wp('4%')}}>{autocomma(item.amount.toString())} تومان</Text>

<Avatar
  // rounded
  size={50}
   icon={{name: 'arrow-circle-up',color: '#cc3333', type: 'font-awesome'}}
   overlayContainerStyle={{backgroundColor: '#cc3333',borderRadius:40,opacity:0.5}}
  //  activeOpacity={0.7}
/>

</ListItem>

  :
  <ListItem style={{width:wp('100%'),height:hp('13%')
  ,borderWidth:0.3,borderColor:'gray'}}>

  <ListItem.Content>
    <ListItem.Title style={{fontFamily:'Digikala',fontSize:wp('3.5%'),marginBottom:10}}>برداشت از حساب</ListItem.Title>
    <ListItem.Title style={{fontFamily:'Digikala',fontSize:wp('3%')}}>{moment(item.createDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</ListItem.Title>
  </ListItem.Content>

  <Text style={{fontFamily:'Digikala',color: '#B00A44',fontSize:wp('4%')}}>{autocomma(item.amount.toString())} تومان</Text>
  <Avatar
    // rounded
    size={50}
     icon={{name: 'arrow-circle-down',color: '#B00A44', type: 'font-awesome'}}
     overlayContainerStyle={{backgroundColor: '#B00A44',borderRadius:40,opacity:0.5}}
    //  activeOpacity={0.7}
  />
  </ListItem>


      
    }

    />
       

       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default TransactionList;


