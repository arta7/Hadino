import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon,Avatar }  from "react-native-elements";
import Avatars from './Avatars';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
// import { APIMaster } from "../API/APIMaster";
const  AccountChoose=(props)=>  {
 
    return (
        <TouchableOpacity style={[{opacity:1},props.ButtonStyle]}
        onPress={props.ButtonOperator}>
        
          <Text style={[{fontFamily:'Digikala'},props.TitleStyle]}>
             { props.Title }
         </Text>

         <Avatar 
         icon={props.Icon}
         size={props.Size}
        
         containerStyle={[{justifyContent:'flex-end',alignSelf:'flex-start',marginLeft:14},props.ContainerStyle]}
         />

       </TouchableOpacity>
    );
  
}
export default AccountChoose;

