import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity,Image} from "react-native";
import { Icon }  from "react-native-elements";
const  RoundList=(props)=>  {
 
    return (
        <TouchableOpacity style={props.ButtonStyle}
        onPress={props.ButtonOperator}
        disabled={props.disable}
        >
            {/* <View style={styles.ViewStyle}> */}
 
            {
               <View style={{justifyContent:'center',alignItems:'center',paddingRight:props.ShowIcon ?10 : 0}}>
         <Text style={props.TitleStyle}>
             { props.Title }
         </Text>
         </View>
           }
            { props.ShowIcon &&
         <View style={[{justifyContent:'center',alignItems:'center'},props.IconStyle]}>
          <Icon name={props.ImageIcon}  size={props.IconSize}
           type={props.IconType} color={props.IconColor} />
         </View>
           }
            { props.ShowImage &&
         <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={{uri:props.uri}} style={props.ImageStyle} />
         </View>
           }
           
       </TouchableOpacity>
    );
  
}

const  styles= StyleSheet.create({
    ViewStyle:{
        flexDirection:'row',width:'auto'
        // ,justifyContent:'center'
    }
})
export default RoundList;