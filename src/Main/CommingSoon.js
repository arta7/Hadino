import React, {Component} from 'react';
import {Text, View,StyleSheet} from "react-native";
// import {Spinner} from "native-base";
// import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class CommingSoon extends Component{
    render(){
        return (
            <View style={styles.container}>
               
                <Text style={styles.textStyle}>Comming Soon</Text>
            </View>
        );
    }
};

const styles=StyleSheet.create({
    textStyle:{
       // fontFamily:'$IS',
        fontSize:wp('5%'),color:'#B00A44',fontFamily:'Digikala'
      //  ,fontFamily:HeaderControl['Header'].FontName
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',alignSelf:'center',alignContent:'center'
    }
});