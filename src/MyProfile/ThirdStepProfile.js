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
import CenterModal from '../Components/CenterModal';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-crop-picker';
const DegreeType = [{id:'0',title:'زیر دیپلم'},{id:'1',title:'دیپلم'},{id:'2',title:'فوق دیپلم'},{id:'3',title:'کارشناسی'},
{id:'4',title:'کارشناسی ارشد'},{id:'5',title:'دکتری'},]

 let CurrentSatte=0;

const ThirdStepProfile =(props)=>{
  const[MainName,setMainName]= useState('')
  const[SecondName,setSecondName]= useState('')
  const[MainId,setMainId]= useState('')
  const[MainIdName,setMainIdName]= useState('')
  const[SecondId,setSecondId]= useState('')
  const[SecondIdName,setSecondIdName]= useState('')



    const [UnDegreeDoctor,setUnDegreeDoctor] = useState('')
    const [License,setLicense] = useState('')
    const [Agency,setAgency] = useState('')

   
     const[showPicker,setshowPicker] = useState(false)

  const[ShowMain,setShowMain] =useState(false)
  const[ShowSecond,setShowSecond] =useState(false)

    useEffect(()=>{
       
    },[])

    
     

    
      let UpdateProfiles=()=>{

        var axiosConfig = {
          headers:{
            'Content-Type': 'multipart/form-data',
            'Authorization' : LoginData.type + ' ' + LoginData.token
                  }
         }

         var params = new FormData();
         params.append('Email',props.currentpage.state.FirstPageItem.email)
         params.append('Name',props.currentpage.state.FirstPageItem.name)
         params.append('LastName',props.currentpage.state.FirstPageItem.Family)
         params.append('Bio',props.currentpage.state.FirstPageItem.bio)
         params.append('Image',props.currentpage.state.SecondPageItem.imageFile)
        //  params.append('Video',null)
         params.append('Gender',props.currentpage.state.FirstPageItem.genderId)
         params.append('NationalCode',props.currentpage.state.FirstPageItem.nationaolCode)
         params.append('BirthDate',props.currentpage.state.FirstPageItem.birthDate)
        //  params.append('Fields',props.currentpage.state.FirstPageItem)
        //  params.append('RequiredFile',props.currentpage.state.FirstPageItem)


        axios.put(APIMaster.URL + APIMaster.MyProfile.UpdateProfile,params,axiosConfig)
        .then((response)=> {
                
          console.log(response.data.statusCode)  
          if(response.data.statusCode == 200)
          {
               Alert.alert('','اطلاعات با موفقیت ویرایش گردید.')
               props.navigation.replace('Profiles')
          }
                
        })
        .catch( (error)=> {
          console.log('error pud data',error)
          Alert.alert('Error Response :',error.response.data.errors[0])  
          // setErrorShowModals(true)
         
        })






      }

     


      let pickImage=async(useCamera,state)=> {
        const opt = {
          width: 300,
          height: 400,
          cropping: true,
        }
        try {
          const imageSource1 = useCamera
            ? await ImagePicker.openCamera(opt)
            : await ImagePicker.openPicker(opt);
            //setImageAddress(imageSource1.path)
            setshowPicker(false);

            var fileImage = {
              uri: imageSource1.path,
              type:imageSource1.mime,
              name:imageSource1.filename,
             }
             if(state == 0)
             setUnDegreeDoctor(fileImage)
             else  if(state ==2)
             {
                 setAgency(fileImage)
             }
             else
             {
                 setLicense(fileImage)
             }
              
        }
         catch {
      
        }
      }



  return (
    <View style={styles.container}>

          <Modal
isVisible={showPicker}
onBackdropPress={()=>{setshowPicker(false)}}
>
<View style={styles.modalContainer}>
  <Text style={{ textAlign: "center", paddingVertical: 10 }}>
    انتخاب عکس
  </Text>
  <View style={styles.line} />
  <View style={styles.modalInner}>
    <TouchableOpacity
      style={styles.modalBtn}
      onPress={() => {

        pickImage(false,CurrentSatte)
      }}
    >
      <Text style={styles.modalBtnText}>
        انتخاب از گالری
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.modalBtn}
      onPress={() => {pickImage(true,CurrentSatte)}}
    >
      <Text style={styles.modalBtnText}>
        عکس
      </Text>
    </TouchableOpacity>
  </View>
</View>
</Modal>
     
        <Textinputs
       Title = 'عنوان تخصص اصلی '
       changeText = {(v)=>{setMainName(v)}}
       values = {MainName}
       secure={false}
       TextStyle={{textAlign:'right',color:'black',
       fontSize:wp('3%'),borderWidth:0.5,borderColor:'black',marginLeft:'10%',marginRight:'10%'}}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={{marginLeft:'10%'}}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />
   
     <Textinputs
       Title = 'مدرک اصلی '
       changeText = {()=>{}}
       values = {MainIdName}
       secure={false}
       TextStyle={{textAlign:'right',
       fontSize:wp('3%'),borderWidth:0.5,borderColor:'black'
       ,marginLeft:'10%',marginRight:'10%',color:'black'}}
       TitleStyle={{marginLeft:'10%'}}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setShowMain(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />
         <Textinputs
       Title = 'عنوان تخصص ثانویه'
       changeText = {(v)=>{setSecondName(v)}}
       values = {SecondName}
       secure={false}
       TextStyle={{textAlign:'right',color:'black',
       fontSize:wp('3%'),borderWidth:0.5,borderColor:'black',marginLeft:'10%',marginRight:'10%'}}
       ErrorTitleStyle={{marginLeft:'10%'}}
       TitleStyle={{marginLeft:'10%'}}
       Edit={true}
      //  ErrorTitle={ErrorServiceName}
      
     />
         <Textinputs
       Title = 'مدرک ثانویه '
       changeText = {()=>{}}
       values = {SecondIdName}
       secure={false}
       TextStyle={{textAlign:'right',
       fontSize:wp('3%'),borderWidth:0.5,borderColor:'black'
       ,marginLeft:'10%',marginRight:'10%',color:'black'}}
       TitleStyle={{marginLeft:'10%'}}
       ErrorTitleStyle={{marginLeft:'10%'}}
       Edit={false}
       TextPress={()=>{setShowSecond(true)}}
      //  ErrorTitle={ErrorSubCategory}
      
     />

  <View style={{marginVertical:'10%',width:wp('90%'),marginHorizontal:wp('5%')}}>
        <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'orange'}}>اسناد </Text>
        </View>
     <View style={{flexDirection:'row-reverse',justifyContent:'space-between'
       ,width:wp('90%'),marginHorizontal:wp('5%')}}>
          <View>
              <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'black'}}>مدرک دانشگاه</Text>
          </View>
          <TouchableOpacity onPress={()=>{
            CurrentSatte =2 ;
            setshowPicker(true)
          }}>
            <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'orange'}}>Browse</Text>
            </TouchableOpacity>

       </View>
      
       <View style={{width:wp('90%'),marginHorizontal:wp('5%'),height:hp('5%')}}>
       { Agency != '' &&
            <View style={{width:'80%',height:'100%',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
            <Text style={{fontSize:wp('3%'),color:'black',padding:10}}>{Agency.uri.split('/')[Agency.uri.split('/').length-1]}</Text>
            </View>
       }
       </View>
       

   <View style={{flexDirection:'row-reverse',justifyContent:'space-between'
       ,width:wp('90%'),marginHorizontal:wp('5%')}}>
          <View>
              <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'black'}}>مدرک دفتر</Text>
          </View>

          <TouchableOpacity onPress={()=>{
            CurrentSatte =1;
            setshowPicker(true)
          }}>
            <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'orange'}}>Browse</Text>
            </TouchableOpacity>

       </View>
       
       <View style={{width:wp('90%'),marginHorizontal:wp('5%'),height:hp('5%')}}>
       { License != '' &&
       <View style={{width:'80%',height:'100%',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
            <Text style={{fontSize:wp('3%'),color:'black',padding:10}}>{License.uri.split('/')[License.uri.split('/').length-1]}</Text>
            </View>
       }
        </View>
       

          <View style={{flexDirection:'row-reverse',justifyContent:'space-between'
       ,width:wp('90%'),marginHorizontal:wp('5%')}}>
          <View>
              <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'black'}}>مدرک پزشکی</Text>
          </View>

          <TouchableOpacity onPress={()=>{
            CurrentSatte =0;
            setshowPicker(true)
          }}>
            <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'orange'}}>Browse</Text>
            </TouchableOpacity>

       </View>
      
       <View style={{width:wp('90%'),marginHorizontal:wp('5%'),height:hp('5%')}}>
       { UnDegreeDoctor != '' &&
       <View style={{width:'80%',height:'100%',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
             <Text style={{fontSize:wp('3%'),color:'black',padding:10}}>{UnDegreeDoctor.uri.split('/')[UnDegreeDoctor.uri.split('/').length-1]}</Text>
            </View>
       }
        </View> 
         













        {/* <View style={{marginVertical:'10%',width:wp('90%'),marginHorizontal:wp('5%')}}>
        <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'orange'}}> اسناد اقتصادی</Text>
        </View> */}

 {/* <View style={{flexDirection:'row-reverse',justifyContent:'space-between'
       ,width:wp('90%'),marginHorizontal:wp('5%')}}>
          <View>
              <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'black'}}>مدرک دانشگاه</Text>
          </View>

          <TouchableOpacity>
            <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'orange'}}>Browse</Text>
            </TouchableOpacity>

       </View>

       <View style={{width:wp('90%'),marginHorizontal:wp('5%'),height:hp('15%')}}>
       <View style={{width:'80',height:'100%',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
             <Text>{}</Text>
            </View>
        </View> */}









<TouchableOpacity style={{width:'40%',height:hp('7%'),justifyContent:'center'
            ,alignItems:'center',borderRadius:10,elevation:2,borderColor:'white',alignSelf:'center',marginBottom:'10%'}}
            onPress={()=>{
              UpdateProfiles()

            }}>
            
               <Text style={{fontFamily:'Yekan',textAlign:'center',color:'orange',fontSize:wp('4%')}}>تایید</Text>
            </TouchableOpacity>


       <CenterModal showModal={ShowMain} 
       closeModal={()=>setShowMain(false)}  dataSource={DegreeType}
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('50%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={MainIdName}  setCategorySelected={setMainIdName}
       CategorySelectedId={MainId}  setCategorySelectedId={setMainId}
        />


           <CenterModal showModal={ShowSecond} 
       closeModal={()=>setShowSecond(false)}  dataSource={DegreeType}
       ModalStyle={{width:'60%',marginRight:'20%',marginLeft:'20%'}}
       ViewStyle={{height:hp('50%'),backgroundColor: 'white',
       borderRadius: 10,borderColor: 'white',width:'100%'}}
       ItemTitle='Title'
       CategorySelected={SecondIdName}  setCategorySelected={setSecondIdName}
       CategorySelectedId={SecondId}  setCategorySelectedId={setSecondId}
        />



       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
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
    voiceMsgContainer: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      flexDirection: "row",
      marginVertical: 5,
      elevation: 2,
      borderRadius: 14,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    },
  
    modalContainer: {
      backgroundColor: "white",
      borderRadius: 10,
      width: "80%",
      alignSelf: "center",
      height: 140,
    },
    modalInner: {
      flex: 1,
      justifyContent: "space-around",
      padding: 15,
    },
    modalBtn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalBtnText: {
      fontSize:10,
      color: "#0B7CC1",
    },
    line: {
      backgroundColor: "#ddd",
      width: "100%",
      height: 1,
    },
    })



export default ThirdStepProfile;


