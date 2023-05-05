import React, { Component } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity} from "react-native";
import { Icon }  from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
export default class TextInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowIcon:false
    };
  }
  render() {
    return (
     
      <View style={[styles.root,this.props.style]}>
         <Text style={[{color:'black',fontFamily:'Digikala',fontSize:wp('4%')},this.props.TitleStyle]}>{this.props.Title}</Text>
         <TouchableOpacity onPress={this.props.TextPress}
          disabled={this.props.Edit}
         style={[{height:55},this.props.TouchStyle]}
         >
         <TextInput placeholder={this.props.placeHolder} 
         style={[styles.inputStyle,this.props.TextStyle]}
         
          onChangeText={this.props.changeText}
          placeholderTextColor={this.props.placeHolderColor}
           value={this.props.values}
           secureTextEntry={this.props.secure}
           editable={this.props.Edit}
            keyboardType = {this.props.keyboardtype}
            multiline={this.props.multiline}
          />
          </TouchableOpacity>
        { 
           <Text style={[{color:'red',fontFamily:'Digikala'
           ,fontSize:wp('2.5%'),marginBottom:2},this.props.ErrorTitleStyle]}>{this.props.ErrorTitle}</Text>
        }
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  root: {
  //  flex: 1,
    // backgroundColor: "white",
    // flexDirection: "row-reverse",
   

  },
  iconStyle: {
   
    paddingRight: 10
  },
  inputStyle: {
    flex: 1, 
    textAlign:'right',
    color:'white',
    borderColor: "white",
    borderWidth: 1,
    borderRadius:5,marginBottom:5,marginTop:5
    ,fontFamily:'Yekan',fontSize:wp('4.5%')
    ,textAlignVertical:'center'
   
  }
});
