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
import RoundList from '../Components/RoundList'
import Avatars from '../Components/Avatars';
import { FloatingAction } from "react-native-floating-action";
import Textinputs from '../Components/Textinputs'
import SwitchChoose from '../Components/SwitchChoose'
import {APIMaster} from  '../API/APIMaster'
import {LoginData} from '../Redux/LoginData'
import {Departments,Groups,Duty,CityList,StateList} from '../Data/StableData'
import CenterModal from '../Components/CenterModal';
import MultiSelector from '../Components/MultiSelector';
// import CalendarModal from '../Components/CalendarModal'

const GenderData =[{title:'مرد',id:'0'},{title:'زن',id:'1'},]


const _departmentData =[]
const _groupData = []
const _dutyData = []

const FirstStepProfile =(props)=>{
  const[Name,setName]= useState('')
  const[Family,setFamily]= useState('')
  const[NationalCode,setNationalCode]=useState('')
  const[Gender,setGender] = useState('')
  const[GenderId,setGenderId] = useState('')

  const[_departemnt,_setDepartment] = useState([])
  const[_departemntId,_setDepartmentId] = useState('')
  const[_state,_setState]=useState('')
  const[_stateId,_setStateId] = useState('')

  const[_city,_setCity]=useState('')
  const[_cityId,_setCityId] = useState('')


  const[selectedDepartemnt,setselectedDepartemnt] = useState([])

  const[_groups,_setGroups] = useState([])
  const[_groupsId,_setGroupsId] = useState('')

  const[_duty,_setDuty] = useState([])
  const[_dutyId,_setDutyId] = useState('')

  const[Address,setAddress] = useState('')
  const[BirthDate,setBirthDate]=useState('')
 

  const[ShowGender,setShowGender] =useState(false)
  const[showState,setshowState] =useState(false)
  const[showCity,setshowCity] =useState(false)
  const[showDepartment,setshowDepartment] =useState(false)
  const[showGroup,setshowGroup] =useState(false)
  const[showDuty,setshowDuty] =useState(false)


  const[showDate,setshowDate] =useState(false)


    useEffect(()=>{
      console.log('departemnts : ',Departments)
    },[])
     
      


  return (
    <View style={styles.container}>
      
      <ScrollView>
    <Textinputs
       Title = 'کد عضویت '
       changeText = {(v)=>{setName(v)}}
       values = {'111232'}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={false}
     />

        <Textinputs
       Title = 'نام '
       changeText = {(v)=>{setName(v)}}
       values = {Name}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />
         <Textinputs
       Title = 'نام خانوادگی '
       changeText = {(v)=>{setFamily(v)}}
       values = {Family}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />

<Textinputs
       Title = 'کد ملی '
       changeText = {(v)=>{setNationalCode(v)}}
       values = {NationalCode}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />
          <Textinputs
       Title = 'تاریخ تولد '
       changeText = {()=>{}}
       values = {BirthDate}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowDate(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

         <Textinputs
       Title = 'جنسیت '
       changeText = {()=>{}}
       values = {Gender}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setShowGender(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />


<Textinputs
       Title = 'دپارتمان کاری '
       changeText = {()=>{}}
       values = {_departemnt}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowDepartment(true)}}
      //  ErrorTitle={ErrorSubCategory}
     />
                <View>
          <FlatList 
            data={_departemnt}
            contentContainerStyle={{flexDirection:'row-reverse',flexWrap:'wrap',borderWidth:_departemnt.length>0 ? 0.5:0
            ,borderRadius:10,borderColor:'grey',marginHorizontal:'10%'}}
            renderItem={({item,index})=>
                <TouchableOpacity 
                style={{ alignSelf:"flex-start",padding:10,
                borderRadius:10,backgroundColor:'#cc3333',margin:10}} 
                 >
                 <Text style={{fontFamily:'Digikala',textAlign:'right',color:'white',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }

            />
            </View>


    <Textinputs
       Title = 'گروه تخصصی '
       changeText = {()=>{}}
       values = {_groups}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowGroup(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

<View>
          <FlatList 
            data={_groups}
            contentContainerStyle={{flexDirection:'row-reverse',flexWrap:'wrap'
            ,borderWidth:_groups.length>0 ? 0.5:0,borderRadius:10,borderColor:'grey',marginHorizontal:'10%'}}
            renderItem={({item,index})=>
                <TouchableOpacity 
                style={{ alignSelf:"flex-start",padding:10,
                borderRadius:10,backgroundColor:'#cc3333',margin:10}} 
                 >
                 <Text style={{fontFamily:'Digikala',textAlign:'right',color:'white',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }

            />
            </View>



    <Textinputs
       Title = 'مهارت ها'
       changeText = {()=>{}}
       values = {_duty}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowDuty(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

<View>
          <FlatList 
            data={_duty}
            contentContainerStyle={{flexDirection:'row-reverse',flexWrap:'wrap'
            ,borderWidth:_duty.length>0 ? 0.5:0,borderRadius:10,borderColor:'grey',marginHorizontal:'10%'}}
            renderItem={({item,index})=>
                <TouchableOpacity 
                style={{ alignSelf:"flex-start",padding:10,
                borderRadius:10,backgroundColor:'#cc3333',margin:10}} 
                 >
                 <Text style={{fontFamily:'Digikala',textAlign:'right',color:'white',
            fontSize:wp('3%')}}>{item.title}</Text>
                </TouchableOpacity>
            }

            />
            </View>




     

<Textinputs
       Title = 'استان'
       changeText = {()=>{}}
       values = {_state}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowState(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

    <Textinputs
       Title = 'شهر'
       changeText = {()=>{}}
       values = {_city}
       secure={false}
       TextStyle={styles.TextStyles}
       TitleStyle={styles.titleStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setshowCity(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />
    
         <Textinputs
       Title = 'آدرس'
       changeText = {(v)=>{setAddress(v)}}
       values = {Address}
       secure={false}
       TextStyle={styles.TextStyles}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={styles.titleStyles}
       Edit={true}
       TouchStyle={{height:200}}
       multiline={true}
       //ErrorTitle={ErrorServiceName}
      
     />



<TouchableOpacity style={{width:wp('80%'),height:50,justifyContent:'center'
            ,alignItems:'center',borderRadius:10,elevation:1,
            borderColor:'white',alignSelf:'center',marginHorizontal:wp('10%'),marginBottom:'10%'}}
            onPress={()=>{
              props.currentpage.viewPager.setPage(1)

            }}>
               <Text style={{fontFamily:'Digikala',textAlign:'center',color:'#cc3333',fontSize:wp('4%')}}>ادامه</Text>
            </TouchableOpacity>


        <CenterModal showModal={ShowGender} 
       closeModal={()=>setShowGender(false)}  dataSource={GenderData}
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('20%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={Gender}  setCategorySelected={setGender}
       CategorySelectedId={GenderId}  setCategorySelectedId={setGenderId}
        />


<CenterModal showModal={showState} 
       closeModal={()=>setshowState(false)}  dataSource={StateList}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={_state}  setCategorySelected={_setState}
       CategorySelectedId={_stateId}  setCategorySelectedId={_setStateId}
        />


<CenterModal showModal={showCity} 
       closeModal={()=>setshowCity(false)}  dataSource={CityList}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={_city}  setCategorySelected={_setCity}
       CategorySelectedId={_cityId}  setCategorySelectedId={_setCityId}
        />

<MultiSelector showModal={showDepartment} 
       closeModal={()=>setshowDepartment(false)}  dataSource={Departments}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       selectedItem={_departemnt}  setselectedItem={_setDepartment}
       data={_departmentData}
        />

<MultiSelector showModal={showGroup} 
       closeModal={()=>setshowGroup(false)}  dataSource={Groups}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       selectedItem={_groups}  setselectedItem={_setGroups}
       data={_groupData}
        />

<MultiSelector showModal={showDuty} 
       closeModal={()=>setshowDuty(false)}  dataSource={Duty}
       ModalStyle={{width:'80%',marginHorizontal:'10%'}}
       ViewStyle={{height:hp('60%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       selectedItem={_duty}  setselectedItem={_setDuty}
       data={_dutyData}
        />

  
        {/* <CalendarModal showModal={showDate}
      closeModal={() => {
        setshowDate(false)
      }}
      selectedCalendar={setBirthDate}
      /> */}
</ScrollView>

       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      //,marginTop:20
      },
    TitleScreenStyle:
    {
    width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('8%')
    },
    TitleScreenStyle1:
    {
    width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginTop:hp('2%')
    },
TopScreenStyle:
    {
    width:wp('100%'),height:hp('10%')
    },
PopularStyle:
    {
    width:wp('70%'),height:hp('25%'),marginLeft:wp('5%')
   ,marginRight:wp('5%'),borderRadius:5,borderWidth:1,borderColor:'gray',padding:10,marginBottom:20
    },
PopularItemStyle:
    {
    width:'50%',height:'100%',justifyContent:'center'
    },
PopularListStyle:
    {
        flexDirection:'row',justifyContent:'space-between',height:'50%',width:'100%'
    },
    TextStyles:
    {
      textAlign:'right',color:'black',
      fontSize:wp('4%'),borderWidth:0.5,borderColor:'black',marginLeft:'10%',marginRight:'10%',fontFamily:'Digikala'
    },
    titleStyles:
    {marginRight:'10%',fontFamily:'Digikala'
  }
    })



export default FirstStepProfile;


