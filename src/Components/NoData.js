import React, {Component} from 'react';
import {Text, View,StyleSheet} from "react-native";
// import {Spinner} from "native-base";
// import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class NoData extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Icon name='database' size={30} color='#B00A44' style={{textAlign:'center'}} />
                <Text style={styles.textStyle}>اطلاعاتی یافت نشد</Text>
            </View>
        );
    }
};

const styles=StyleSheet.create({
    textStyle:{
       // fontFamily:'$IS',
        fontSize:wp('3%'),color:'#B00A44',fontFamily:'Digikala'
      //  ,fontFamily:HeaderControl['Header'].FontName
    },
    container:{

        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center',alignSelf:'center',alignContent:'center'
    }
});