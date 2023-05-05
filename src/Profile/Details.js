import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Linking,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator, FlatList
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {Header,Icon} from 'react-native-elements'
import DetailsItem from './../Components/DetailsItem'
import {APIMaster} from  './../API/APIMaster'
import Buttons from './../Components/Buttons'
import PaymentModal from '../Components/PaymentModal';
import { LoginData } from '../Redux/LoginData';
import {DotIndicator} from 'react-native-indicators';

  let DataValue = []
   let DurationTime = 0;
const Details =(props)=>{
    
   const[Data,SetData] = useState([])
   const[showModal,setshowModal] = useState(false)
   const[serviceName,setserviceName] = useState('')
   const[Price,setPrice] = useState('')
   const[showLoader,setshowLoader] = useState(false)
    const[UserId,setUserId]=useState('')


  let  closeModals=()=>{
    setshowModal(false)
  }

   
   let UpdateRequest=()=>{
        var axiosConfig = {
      headers:{
        "accept": "*",
        'Authorization' : LoginData.type + ' ' + LoginData.token
              }
              
     }
    
   axios.get(APIMaster.URL +
     APIMaster.Request.GetAllMyClientRequest+'?serviceRequestStatus=2',axiosConfig)
   .then( (response)=> {     
    // console.log('response.data.result.data.id1 : ',response.data.result.data[0].baseServiceId)
           if(response.data.result.data.length >0)
           {
             
             for(let i=0;i<response.data.result.data.length;i++)
             {
               if(response.data.result.data[i].serviceTypes == 2 || response.data.result.data[i].serviceTypes == 1)
              CancelRequestId(response.data.result.data[i].id)
             }
            
           }
   })
   .catch( (error)=> {
     console.log('error update request',error)  
   })
    
    
   axios.get(APIMaster.URL +
     APIMaster.Request.GetAllMyClientRequest+'?serviceRequestStatus=1',axiosConfig)
   .then( (response)=> {     
            // console.log('response.data.result.data.id : ',response.data.result.data)
           if(response.data.result.data.length >0)
           {
             for(let i=0;i<response.data.result.data.length;i++)
             {
              if(response.data.result.data[i].serviceTypes == 2 || response.data.result.data[i].serviceTypes == 1)
             CancelRequestId(response.data.result.data[i].id)
             }
           }
   })
   .catch( (error)=> {
    console.log('error update request',error)  
   })
    

   }


   let CancelRequestId=(id)=>{
    var axiosConfig = {
      headers:{
        "accept": "*",
        'Authorization' : LoginData.type + ' ' + LoginData.token
              }
              
     }
      console.log('id : ',id)
   axios.get(APIMaster.URL + 
     APIMaster.Request.CancelTheCallByClient+'?requestId='+id,axiosConfig)
   .then( (response)=> {     
           
            console.log(response)
           
   })
   .catch( (error)=> {
    console.log('error delete request',error)  
     
   })
   }
   






  let   SendPayment=(price)=>{
    var axiosConfig = {
      headers:{
        'Authorization' : LoginData.type + ' ' + LoginData.token
              }
     }
     var params ={
      "amount":price
     }
      axios.post(APIMaster.URL + APIMaster.Payment.Payment,params,axiosConfig)
      .then( (response)=> {
        Linking.openURL(response.data.result.data.descriptor.url.toString());
              // Alert.alert('',JSON.stringify(response.data.result.data.descriptor.url))
      })
      .catch( (error)=> {
        if(error.response.status == 401)
      {
        LoginData.lastPage='Profile' 
        props.navigation.replace('Login')
      }
      else
        console.log(error)  
         
       
      })
    
     }




    let GetWalletInventory=()=>{
      console.log('walletinventory')
      var axiosConfig = {
        headers:{
          'Authorization' :  LoginData.type + ' ' + LoginData.token
                }
       }
      axios.get(APIMaster.URL + APIMaster.Card.GetWalletInventory,axiosConfig)
      .then( (response)=> {
        console.log('Inventory : ',response.data.result.data)  
            LoginData.Inventory = response.data.result.data
      })
      .catch( (error)=> {
        if(error.response.status == 401)
        {
          LoginData.lastPage='Profile' 
          props.navigation.replace('Login')
        }
        else
          console.log(error)  
         
      })
    }


 

 let GetLists=()=>{
           
          setshowLoader(true)
         console.log('props.DetailsId',props.DetailsId)

        axios.get(APIMaster.URL + APIMaster.Services.GetUsersServiceDetailsById 
          + '?baseServiceId=' + props.DetailsId
           //+ props.navigation.state.params.baseServiceId
           )
        .then((response)=> {
                //"priceForNativeCustomer
           console.log('response.data.result.data:') 
                console.log(response.data.result.data)  
                setserviceName(response.data.result.data.serviceName)
                  if(response.data.result.data.chatService.packageType == 0)
                  {
                 SetData([{'Title':'پیام های رایگان','Value':response.data.result.data.chatService.freeMessageCount,type:0},
                 {'Title':'دسته اصلی','Value':response.data.result.data.categoryName,type:0}
                 ,{'Title':'زیر دسته','Value':response.data.result.data.subCategoryName,type:0}
                 ,{'Title':'قیمت' ,'Value': response.data.result.data.chatService.priceForNativeCustomer,type:2}])
                 setPrice(response.data.result.data.chatService.priceForNativeCustomer)
                 setUserId(response.data.result.data.userId)
                  }
                  else if(response.data.result.data.chatService.packageType == 1 || 
                  response.data.result.data.chatService.packageType == 2 )
                  {
                    SetData([{'Title':'زمان','Value':response.data.result.data.chatService.duration,type:1},
                    {'Title':' دسته اصلی','Value':response.data.result.data.categoryName,type:0}
                    ,{'Title':'زیر دسته','Value':response.data.result.data.subCategoryName,type:0}
                    ,{'Title':'قیمت' ,'Value': response.data.result.data.chatService.priceForNativeCustomer,type:2}])
                    setPrice(response.data.result.data.chatService.priceForNativeCustomer)
                    DurationTime = response.data.result.data.chatService.duration;
                    setUserId(response.data.result.data.userId)
                  }
                  setshowLoader(false)
        })
        .catch( (error)=> {
          console.log(error)  
          setshowLoader(false)
         
        })

       }
  
       
     
     let  RequestsCall=async()=>{
    
        if(LoginData.token == '')
        {
       var value = await AsyncStorage.getItem('token');
       if (value != '' && value!=null)
       {
         LoginData.token = value
       }
         }
       var axiosConfig = {
         headers:{
           "accept": "*",
           'Authorization' : LoginData.type + ' ' + LoginData.token
                 }
                 
        }
       //CancelTheCallByProvider  9e9087   9116838658
       
      axios.get(APIMaster.URL + 
        APIMaster.Request.RejectCallRequest+'?requestId='
        +LoginData.RequestId,axiosConfig)
      .then( (response)=> {     
              
                props.navigation.push('App')
              
      })
      .catch( (error)=> {
        if(error.response.status == 401)
        {
          LoginData.lastPage='Profile' 
          props.navigation.replace('Login')
        }
        else
          console.log(error)  
        
      })
       }





       function handleOpenURL(event){
        console.log('test details1', event.url.split('/')[2])
        if(event.url.split('/')[2] == "callindoor.ir")
        {
          //   if(props.serviceTypes == "1")
          // props.navigation.push('CallScreenClient',{serviceId:props.DetailsId,
          //   })
          console.log('props.serviceTypes',props.serviceTypes)
          // if(props.serviceTypes == "1")
          // {
          // props.navigation.push('VideoCallScreenClient',{serviceId:props.DetailsId,
          //    imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
          //   })
          // }
          //   else if(props.serviceTypes == "2")
          //   {
          //     props.navigation.push('VoiceCallScreenClient',{serviceId:props.DetailsId,
          //       imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
          //      })
          //   }
          //   else
          //   {
          //     Alert.alert('اخطار','نوع این فایل از نوع صوتی یا تصویری نمی باشد')
          //   }
          if(props.serviceTypes == "1")
          {

          props.navigation.push('VideoCallScreenClient',
          {serviceId:props.DetailsId,
             imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
            })
          
          }
          else if(props.serviceTypes == "2")
            {

              props.navigation.push('VoiceCallScreenClient',{serviceId:props.DetailsId,
                imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
               })
         
            }
            else if(props.serviceTypes == "0")
            {

              props.navigation.push('ChatScreen',{serviceId:props.DetailsId,
                imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
               })
         
            }
            else
            {
              Alert.alert('اخطار','نوع این فایل مشخص نمی باشد')
            }  
            setshowLoader(false)
        }
        
      }


      let CheckUserActiveWithOutPayment=()=>{
        console.log('UserId : ',UserId)
      
    
        var axiosConfig = {
          headers:{
            "accept": "*",
            'Authorization' :  LoginData.type + ' ' + LoginData.token
                  }
         }
        axios.get(APIMaster.URL + APIMaster.Account.IsUserActive+'?userId='+UserId
          ,axiosConfig)
        .then( (response)=> {
          console.log('data ',response.data.result.data)

          if(response.data.result.data)
          {

            if(props.serviceTypes == "1")
            {
  
            props.navigation.push('VideoCallScreenClient',
            {serviceId:props.DetailsId,
               imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
              })
            
            }
            else if(props.serviceTypes == "2")
              {
  
                props.navigation.push('VoiceCallScreenClient',{serviceId:props.DetailsId,
                  imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
                 })
           
              }
              else if(props.serviceTypes == "0")
              {
  
                props.navigation.push('ChatScreen',{serviceId:props.DetailsId,
                  imageAddress:APIMaster.URL + '/' + props.dataImage.imageAddress
                 })
           
              }
              else
              {
                Alert.alert('اخطار','نوع این فایل مشخص نمی باشد')
              }  
          }
          else
          {
            Alert.alert('اخطار','این شخص آنلاین نمی باشد لطفا بعدا تلاش کنید')
          }

          setshowLoader(false) 
         
        })
        .catch( (error)=> {
          console.log(error.response)  
          setshowLoader(false)
          if(error.response.status == 401)
          {
            props.navigation.replace('Login')
          }
          else
            console.log(error.response)  
          //  props.navigation.goBack()
        })
       }
      

      let CheckUserActive=()=>{
        console.log('UserId : ',UserId)
        var axiosConfig = {
          headers:{
            "accept": "*",
            'Authorization' :  LoginData.type + ' ' + LoginData.token
                  }
         }
        axios.get(APIMaster.URL + APIMaster.Account.IsUserActive+'?userId='+UserId
          ,axiosConfig)
        .then( (response)=> {
          console.log('data ',response.data.result.data)
          setshowLoader(false)
          if(response.data.result.data)
          {

             return (response.data.result.data)
          }
          else
          {
           
            // Alert.alert('اخطار','این شخص آنلاین نمی باشد لطفا بعدا تلاش کنید')
            return (false)
          }

            
         
        })
        .catch( (error)=> {
          setshowLoader(false)
          console.log(error.response)  
          if(error.response.status == 401)
          {
            props.navigation.replace('Login')
          }
          else
            console.log(error.response)  
          //  props.navigation.goBack()
        })
       }





   useEffect(()=>{

    console.log('test details')
    Linking.getInitialURL().then(url => {

      if(url == "https://callindoor.ir")
      {
        props.navigation.push('VideoCallScreenClient')
      }
    })
    Linking.addEventListener('url', handleOpenURL);


    GetWalletInventory()
    GetLists()
    UpdateRequest()
    return () => {
      Linking.removeEventListener('url', handleOpenURL);
    }

   },[])


  return (
    <View style={styles.container}>
      <PaymentModal 
       showModal={showModal}
       closeModals={closeModals}
       Title = {serviceName}
      />
       <View style={{marginBottom:hp('10%')}}>
          <FlatList 
          data={Data}
          renderItem={({item,index}) =>  
           <DetailsItem Title={item.Title} SubTitle={item.Value}
              SubtitleStyle={{color:'gray',textAlign:'right'}}
              Type={item.type}
              />
           }

         />
</View>
    {
     showLoader &&
     <DotIndicator color='#ef7145' size={13} count={4} />
     }

<Buttons 
      ButtonStyle = {styles.TouchableLoginStyle}
      titleStyle = {styles.textStyleLogin}
      titleText = 'درخواست سرویس'
      ButtonOperator = {()=>{
        setshowLoader(true)
        if(Price != '' && Price != null)
        {
          if(Number(Price.toString()) <= Number(LoginData.Inventory.toString()))
          {
            CheckUserActiveWithOutPayment()
  
          }
          else
          {
            if(CheckUserActive())
              {
                SendPayment(Price)
              }
              else
              {
                setshowLoader(false)
                Alert.alert('اخطار','این سرویس دهنده آنلاین نمی باشد لطفا بعدا تلاش کنید')
              }
        }
      }
        else
        {
          setshowLoader(false)
          Alert.alert('اخطار','این فایل قیمت ندارد ابتدا قیمت  توسط سرویس دهنده تعریف شود')
        }
      }}
      />
       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
      TouchableLoginStyle: {
        borderRadius:10,borderColor:'black',
        borderWidth:0.5,backgroundColor:'white'
        ,width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
        ,height:50,alignSelf:'center',justifyContent:'center',alignSelf:'center'
        ,position:'absolute',bottom:20
      },
      textStyleLogin:{
        textAlign:'center',color:'#F07B3F',fontSize:wp('4%')
      },
    })



export default Details;


