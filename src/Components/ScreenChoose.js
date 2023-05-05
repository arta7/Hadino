import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon,Avatar }  from "react-native-elements";
import Avatars from './Avatars';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
// import { APIMaster } from "../API/APIMaster";
const  ScreenChoose=(props)=>  {
 
    return (
        <TouchableOpacity style={[{opacity:1},props.ButtonStyle]}
        onPress={props.ButtonOperator}>
        
 
         <Avatar 
         source={props.Icon}
        //  activeOpacity={1}
         size={props.Size}
         containerStyle={[{opacity:0.9,justifyContent:'center'},props.ContainerStyle]}
         avatarStyle={{resizeMode:'contain'}}
         />
          <Text style={[{fontFamily:'Digikala'},props.TitleStyle]}>
             { props.Title }
         </Text>
         <View style={[{borderRadius:5,borderColor:'white',alignSelf:'center',alignItems:'center'
         ,justifyContent:'center',backgroundColor:'white'
         ,width:'auto',opacity:0.6,height:20,padding:3},props.SubtitleStyles]}>
         <Text style={[{fontFamily:'Digikala'},props.SubTitleStyle]}>
             { props.SubTitle }
         </Text>
         </View>
         {/* </View> */}

       </TouchableOpacity>
    );
  
}
export default ScreenChoose;

