import React,{useEffect,useState} from 'react';

import {Icon} from 'react-native-elements';
import { I18nManager,View ,Image,Text,StyleSheet,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen';


export default  CustomList  =(props)=> {
   return(
    <View style={{flex:1,flexDirection:'row'}}>
    
     <View style={{flex:0.30,elevation:1,backgroundColor:'#f5f5f5'}}>
     <ScrollView>
      {
        props._SectionList
      }

    </ScrollView>

     </View>

     <View style={{flex:0.70,backgroundColor:'white'}}>
      <ScrollView>
      {
        props._SectionItem
      }
      </ScrollView>
     </View>

    </View>
   )
    }
  