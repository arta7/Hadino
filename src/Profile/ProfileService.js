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
import {Header,Icon} from 'react-native-elements'
import ProfileServiceItems from './ProfileServiceItems'
import Headers from './../Components/Headers'
import {APIMaster} from './../API/APIMaster'
import Avatars from './../Components/Avatars'
import RoundList from './../Components/RoundList'

const ProfileService =(props)=>{
  


      useEffect(()=>{
        console.log(props.navigation.state.params.CategoryData)
        console.log('props.navigation.state.params.dataResume :',props.navigation.state.params.dataResume)
      },)

  return (
    <View style={styles.container}>
     <ScrollView>
     <Headers TitleScreen='سرویس ' ShowHeader={false}
     navigation={props.navigation}
     showLinear={true}
     />

     { props.navigation.state.params.CategoryData.length > 0 &&
       <View style={{width:'100%',height:hp('15%')
       ,borderBottomWidth:0.5,borderBottomColor:'gray'
       ,borderStyle:'dotted',borderTopColor:'gray',borderTopWidth:0.5}}>
         <View style={{height:'40%',width:wp('100%')}}>
       <Text style={{fontFamily:'Yekan',textAlignVertical:'center',
       fontSize:wp('4.5%'),padding:10}}>
         {props.navigation.state.params.CategoryData[0].serviceName}</Text>
       </View>

          <View style={{flexDirection:'row'
          ,width:wp('100%'),height:'60%'}}>
          <RoundList ShowIcon={false}    
         Title='test'
         ButtonStyle={{borderWidth:1,width:'auto'
        ,borderRadius:20,borderColor:'red'
       ,backgroundColor:'red',
        paddingLeft:wp('5%'),paddingRight:wp('5%')
        ,margin:5,height:'60%'
        ,justifyContent:'center',alignItems:'center'
        ,alignSelf:'center'}}
       TitleStyle={{fontSize:wp('4%'),textAlign:'center'
       ,color:'white'}}
       
       />
            </View> 

       </View>
       } 

<View style={{flexDirection:'row'
            ,height:hp('10%'),width:'100%'}}>

               <TouchableOpacity style={{ width:'70%'
               }}
               onPress={()=>{
                //  console.log('test')
                props.navigation.navigate('Profile',{userId:props.navigation.state.params.dataResume.userId})
                }}
               >
             
                 <Avatars 
                 avatar={APIMaster.URL + '/' + props.navigation.state.params.dataResume.imageAddress}
                  Title={props.navigation.state.params.dataResume.name + ' ' + props.navigation.state.params.dataResume.lastName}
                   Subtitles={props.navigation.state.params.dataResume.starCount}
                  ButtonStyle={{flex:1,
                    justifyContent:'center',marginLeft:'5%'
                   }}
                  Accessory={false}
                  ButtonOperator={()=>{}}
                  />
               </TouchableOpacity>
               <View style={{width:'30%',marginTop:'1%'
               ,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Yekan',textAlignVertical:'center',fontSize:wp('3%')}}>نمایش پروفایل</Text>
               </View>
            </View>


       <ProfileServiceItems navigation={props.navigation} DetailsId={props.navigation.state.params.DetailsId}
        serviceTypes={props.navigation.state.params.serviceTypes}
        dataImage={props.navigation.state.params.dataResume}
        />

       </ScrollView>
       </View>

  )
}

const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })

export default ProfileService;


