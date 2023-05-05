import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import { Icon }  from "react-native-elements";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const ColorRange=[
  '#eb5853', '#eb5b52', '#ec5d50', '#ec604f',
     '#ec624e', '#ec654c', '#ed674b', '#ed6a49', 
     '#ee6d47', '#ef7145', '#ef7443', '#f07841']

export default CustomModals =(props)=>{
        
    return ( 
    
<Modal isVisible={props.showModal} style={[{justifyContent: 'center',
width:wp('80%')
,marginRight:'10%',marginLeft:'10%',
               },props.ModalStyle]}
               onBackdropPress={props.closeModal}
              >
    
                <View style={[{
                borderRadius: 10,
                borderColor: 'white',
                height:'auto',padding:20,width:'100%',backgroundColor:'white'
                },props.ViewStyle]}>
                {
                    props.ModalData
                }


</View>
</Modal>
    );
  }


