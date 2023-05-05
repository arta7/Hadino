import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, TextInput ,Text,TouchableOpacity, FlatList} from "react-native";

import DatePicker from '@mohamadkh75/react-native-jalali-datepicker';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
var moment = require('jalali-moment');
let ColorRange=['#150e20', '#211645', '#2e1a6d',
     '#3c1c97', '#4d19c3', '#650fb7', '#7505ab'
     , '#8100a0', '#6f0068', '#51023c', '#2e0a1d', '#000000']
     let today =  moment().locale('fa').format('YYYY/MM/DD');
export default CalendarModal =(props)=>{
    
    const[data,setdata] =useState('')
      
    useEffect(()=>{
     
    },[])

    return ( 
        
<Modal isVisible={props.showModal} style={[{justifyContent: 'center',
width:'90%'
,marginRight:'5%',marginLeft:'5%'
               },props.ModalStyle]}
               onBackdropPress={props.closeModal}
              >
    
                <View style={[{
                borderRadius: 10,
                borderColor: 'white',paddingTop:wp('1%'),
                paddingBottom:wp('1%'),height:hp('50%'),width:'100%',elevation:5
                },props.ViewStyle]}>


<DatePicker
  style={{
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#1e272e',
    borderWidth: 1,
    borderColor: '#4bcffa',
    borderRadius: 10,
    elevation: 4,
    flex:0.8
  }}
  selected={today}
  dateSeparator='/'
  minDate='1300/1/18'
  maxDate='1450/1/18'
  headerContainerStyle={{ height: '15%' }}
  yearMonthBoxStyle={{
    width: '30%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10
  }}
  yearMonthTextStyle={{ fontSize: wp('5%'), color: '#4bcffa' }}
  iconContainerStyle={{ width: `${100 / 7}%` }}
  backIconStyle={{
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: '#808e9b'
  }}
  nextIconStyle={{
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: '#4bcffa'
  }}
  eachYearStyle={{
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4bcffa',
    marginTop: '1.5%',
    marginBottom: 5,
    marginHorizontal: '1.5%',
    borderRadius: 10,
    elevation: 3
  }}
  eachYearTextStyle={{
    fontSize: 16,
    color: 'white'
  }}
  eachMonthStyle={{
    width: `${88 / 3}%`,
    height: `${88 / 4}%`,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4bcffa',
    marginBottom: '3%',
    borderRadius: 10,
    elevation: 3
  }}
  eachMonthTextStyle={{ fontSize: wp('4%'), color: 'white' }}
  weekdaysContainerStyle={{ height: '10%' }}
  weekdayStyle={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}
  weekdayTextStyle={{
    fontSize: 16,
    color: '#808e9b',
    marginBottom: 5
  }}
  borderColor='#4bcffa'
  dayStyle={{
    width: `${100 / 7}%`,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1 / 1
  }}
  selectedDayStyle={{
    width: '70%',
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }}
  selectedDayColor='#4bcffa'
  dayTextStyle={{ fontSize: 18 }}
  selectedDayTextColor='white'
  dayTextColor='#4bcffa'
  disabledTextColor='#4bcffa66'
  onDateChange={date => {setdata(date)}}
/>


  <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}>
    <TouchableOpacity style={{height:'50%',width:'30%'
    ,justifyContent:'center',alignItems:'center',
    alignSelf:'center',marginTop:5,
    backgroundColor:'green',borderRadius:10,marginRight:10}}
    onPress={()=>{
      if(data == '')
      {
        setdata(today)
        props.selectedCalendar(today)
      }
      else
      props.selectedCalendar(data)
      props.closeModal()
    }}
    ><Text style={{color:'white'}}>تایید</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{height:'50%',width:'30%'
    ,justifyContent:'center',alignItems:'center',
    alignSelf:'center',marginTop:5,
    backgroundColor:'red',borderRadius:10,flexDirection:'row'}}
    onPress={()=>{props.selectedCalendar('')
    props.closeModal()
  }}
    ><Text style={{color:'white'}}>لغو </Text>
    </TouchableOpacity>
  </View>

</View>

</Modal>

    );
  }


