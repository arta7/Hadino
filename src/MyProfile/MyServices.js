import React,{useState,useRef, useEffect} from 'react';
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
import RoundList from './../Components/RoundList'
import Avatars from '../Components/Avatars';
import { FloatingAction } from "react-native-floating-action";

const data =[{Title:'All',Color:'black'},{Title:'Wating',Color:'gray'},{Title:'Accepted',Color:'green'},
{Title:'Rejected',Color:'red'},]


import Modal from 'react-native-modal';
import Toast from "react-native-fast-toast";
import {APIMaster} from  '../API/APIMaster'
import {LoginData} from './../Redux/LoginData'
import LableList from '../Components/LableList';
const actions = [
  {
    text: "Add other services",
     icon:   null,
    name: "Addotherservices",
    position: 1,
    color:'transparent'
  },
  { 
    text:"Add Medical service",
    icon: null,
    name: "AddMedicalservice",
    position: 2,
    color:'transparent'
  }
];



const MyServices =(props)=>{
    const[showAddservice,setshowAddservice] = useState(false)
    const[SelectedService,setSelectedService] = useState('')
    const[SelectedServiceId,setSelectedServiceId] = useState('')
    const[CategoryType,setCategoryType] = useState([])
    const[MyCategoryType,setMyCategoryType] = useState([])
    const[selectedMyCategory,setselectedMyCategory] = useState(0)
    const[selectedMyCategoryColor,setselectedMyCategoryColor] = useState('black')
    const[MyCategoryList,setMyCategoryList] = useState([])


    const toast = useRef(null);


    let GotoLogin=()=>{
      console.log(LoginData.token)
      if(LoginData.token == '')
      {
        //setshowIndicator(false)  
        LoginData.lastPage='MyServices' 
        props.navigation.replace('Login')
      }
      else
       {
        GetAllMyServiceTypes()
        GetAllServiceTypes()
       }

    }

   let GetAllServiceTypes=()=>{

      
     axios.get(APIMaster.URL + APIMaster.Home.GetAllServiceTypes)
     .then( (response)=> {
             
             console.log(response)  
             setCategoryType(response.data.result.data)
             
     })
     .catch( (error)=> {
       console.log(error) 
       if(error.response.status == 401)
          {
            LoginData.lastPage='MyServices' 
            props.navigation.replace('Login')
          }
          else
          {
          console.log('chats Error',error)  
          } 
       //setshowIndicator(false)
      
     })
   }

  let GetAllMyServiceTypes=async()=>{

    var axiosConfig = {
      headers:{
        "Access-Control-Allow-Origin": "*",
        'Authorization' : LoginData.type + ' ' + LoginData.token
              }
     }
    axios.get(APIMaster.URL + APIMaster.Services.GetAllMyServiceCategory,axiosConfig)
    .then( (response)=> {
            
            console.log(response)  
            setMyCategoryType(response.data.result.data)
          console.log('response.data.result.data[0].serviceId',response.data.result.data[0].serviceId)
             GetAllMyService(response.data.result.data[0].serviceId)
             setselectedMyCategoryColor(response.data.result.data[0].color)
    })
    .catch( (error)=> {
      console.log(error)  
      if(error.response.status == 401)
          {
            LoginData.lastPage='MyServices' 
            props.navigation.replace('Login')
          }
          else
          {
          console.log('chats Error',error)  
          }
     
    })
  }

 let GetAllMyService=(Id)=>{

    var axiosConfig = {
      headers:{
        "Access-Control-Allow-Origin": "*",
        'Authorization' : LoginData.type + ' ' + LoginData.token
              }
     }
     console.log(APIMaster.URL + APIMaster.Services.GetAllMyService+'?ServiecTypeId='+Id)
    axios.get(APIMaster.URL + APIMaster.Services.GetAllMyService+'?ServiecTypeId='+Id,axiosConfig)
    .then((response)=> {
            
            console.log(response.data.result.data)  
            setMyCategoryList(response.data.result.data)
            //setMyCategoryType(response.data.result.data)
            
    })
    .catch( (error)=> {
      console.log('error',error)  
      
     
    })
  }


    useEffect(()=>{
     GotoLogin()

   },[])





  return (
    <View style={styles.container}>
     
       <View style={{width:wp('100%'),height:hp('8%')
       ,borderWidth:0.4,borderColor:'gray'}}>
     <FlatList 
         data={MyCategoryType}
         horizontal={true}
         showsHorizontalScrollIndicator={true}
         renderItem={({item,index}) =>  
         
         <RoundList ShowIcon={false}    
         Title={item.serviceName}
         ButtonStyle={{borderWidth:1
        ,borderRadius:wp('6%'),borderColor:item.color
       ,backgroundColor:selectedMyCategory == index ?  item.color:'white'
       , paddingLeft:wp('5%'),paddingRight:wp('5%')
        ,margin:5,justifyContent:'center'}}
       TitleStyle={{fontSize:wp('3%'),textAlign:'center'
       ,color:selectedMyCategory == index ? 'white' :  item.color,fontWeight:'bold'}}
       ButtonOperator={()=>{
         setselectedMyCategory(index)
         setselectedMyCategoryColor(item.color)
         GetAllMyService(item.serviceId)
        }}
       />
         }

         />

       </View>
          
       <FlatList 
         data={MyCategoryList}
         renderItem={({item,index}) =>  
        
         <RoundList  
         Title={item.serviceName}
         IconStyle={{width:wp('6%'),height:wp('6%'),borderWidth:1,
         borderRadius:wp('3%'),borderColor:selectedMyCategoryColor
         ,justifyContent:'center',alignItems:'center',alignSelf:'center'}}
         ShowIcon={true}
         IconType ={  item.serviceTypes == 0 ? "font-awesome" 
         :
         item.serviceTypes == 1 ?"font-awesome"
         : 
         item.serviceTypes == 2 ?"font-awesome"
         : 
         item.serviceTypes == 3 ?"font-awesome-5"
         : 
         item.serviceTypes == 4 ?"font-awesome" 
         : "font-awesome"          
    }
    IconColor={selectedMyCategoryColor}
    IconSize={wp('4%')}
    TitleStyle={{textAlign:'center',fontSize:wp('4%')}}
    ImageIcon = { item.serviceTypes == 0 ? "comment"
         :
         item.serviceTypes == 1 ?"video-camera"
         : 
         item.serviceTypes == 2 ?"phone" 
         : 
         item.serviceTypes == 3 ?"box"
         : 
         item.serviceTypes == 4 ?"edit"
         : "comment"
         }
         
         ButtonStyle={{width:wp('90%'),height:hp('10%'),
         flexDirection:'row',marginLeft:wp('5%'),marginBottom:10}}
       ButtonOperator={()=>{
         console.log('props.navigation',props.navigation)
         props.navigation.navigate('ServiceInfo',{Id:item.id})
        }}
         
         />

        }
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
    }
    })



export default MyServices;


