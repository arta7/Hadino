import React, {Component} from 'react';
import {Text, View,StyleSheet} from "react-native";
import {DotIndicator,} from 'react-native-indicators';
export default class Loading extends Component{
    render(){
        return (
            <View style={styles.container}>
                <DotIndicator color='#B00A44' size={11} count={4} />
                
            </View>
        );
    }
};

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',alignSelf:'center'
    }
});