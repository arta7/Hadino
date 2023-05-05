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
import {Header,Icon,Avatar,ListItem} from 'react-native-elements'
import TransactionList from './TransactionList'
import Headers from './../Components/Headers'

import { FloatingAction } from "react-native-floating-action";
import LinearGradient from 'react-native-linear-gradient';
// import { LoginData } from '../Redux/LoginData';
// import { APIMaster } from '../API/APIMaster';
import CustomModals from '../Components/CustomModal';
import Textinputs from '../Components/Textinputs';
import CenterModal from '../Components/CenterModal';
// const ColorRange= ['rgba(234,84,85,0.5)', 'rgba(240,123,63,1)', 'rgba(240,123,63,1)','#f07b3f']
import {TransactionLists} from '../Data/StableData'
const actions = [
  {
    text: " واریز",
     icon:   null,
    name: "Deposit",
    position: 1,
    color:'transparent'
  },
  { 
    text:"برداشت",
    icon: null,
    name: "Withdraw",
    position: 2,
    color:'transparent'
  }
];

const Transaction =(props)=>{
  // const[TransactionLists,setTransactionLists] = useState([])
  const[showModals,setshowModals] = useState(false)
  const[showModalsDeposit,setshowModalsDeposit] = useState(false)
  const[showCardList,setshowCardList] = useState(false)
  const[AllCards,setAllCards] = useState([])
  const[OpacityPage,setOpacityPage] = useState(1)
  const[Amount,setAmount] = useState('')
  const[CardNumber,setCardNumber] = useState([])
  const[selectedCardNumber,setselectedCardNumber] = useState('')
  const[selectedCardId,setselectedCardId] = useState('')
  const[Inventory,setInventory] = useState('0')
  // let  GetAllCards= ()=>{
    
  //   var axiosConfig = {
  //       headers:{
  //         "Access-Control-Allow-Origin": "*",
  //         'Authorization' :  LoginData.type + ' ' + LoginData.token
  //               }
  //      }
       
  //     axios.get(APIMaster.URL + APIMaster.Card.GetAllCards,axiosConfig)
  //     .then( (response)=> {
             
  //             console.log(response.data.result.data) 
  //             var data = response.data.result.data
  //             var DataSource=[]
  //             for(let i=0;i<data.length;i++)
  //             {
  //               DataSource.push({id:data[i].id,title:data[i].cardNumber})
  //             }
  //             setAllCards(DataSource)
             
  //     })
  //     .catch( (error)=> {
  //       console.log(error)  
  //       if(error.response.status == 401)
  //       {
  //         LoginData.lastPage='Transaction' 
  //         props.navigation.replace('Login')
  //       }
  //       else
  //       {
  //         //setdataSource(response.data)
  //       console.log('list card Error',error)  
  //       }
       
       
  //     })
  //   }


    let addComma=( number_input )=> {
      console.log('add comma : ',number_input)
    number_input += '';
    number_input = number_input.replace(',', ''); number_input = number_input.replace(',', ''); number_input = number_input.replace(',', '');
    number_input = number_input.replace(',', ''); number_input = number_input.replace(',', ''); number_input = number_input.replace(',', '');
    
    console.log('add comma1 : ',number_input)
    var x = number_input.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
       x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
    }

    // let  GetWalletInventory= ()=>{
    //   var axiosConfig = {
    //       headers:{
    //         "Access-Control-Allow-Origin": "*",
    //         'Authorization' : LoginData.type + ' ' + LoginData.token
    //               }
    //      }
    //     axios.get(APIMaster.URL + APIMaster.Transaction.GetWalteBalance,axiosConfig)
    //     .then( (response)=> {
               
    //             console.log('Amount',Amount,response.data.result.data) 
          
    //           if(Number(response.data.result.data) >= Number(Amount))
    //           {
    //             WithdrawOrder()
    //           }
    //           else
    //           {
    //             Alert.alert('اخطار','میزان برداشت از حساب باید کمتر از موجودی باشد')
    //           }
               
    //     })
    //     .catch( (error)=> {
    //       console.log(error)  
    //       if(error.response.status == 401)
    //       {
    //         LoginData.lastPage='Wallet' 
    //         props.navigation.replace('Login')
    //       }
    //       else
    //       {
    //         //setdataSource(response.data)
    //       console.log('chats Error',error)  
    //       }
         
         
    //     })
    //   }


    // let WithdrawOrder=()=>{
    //   console.log('LoginData',LoginData.token)
    //   var params ={
    //       "amount": Amount ,
    //       "cardId": selectedCardId
    //   }

    //   var axiosConfig = {
    //     headers:{
    //       "accept": "*",
    //       "Content-Type": "application/json-patch+json",
    //       'Authorization' :  LoginData.type + ' ' + LoginData.token
    //             }
    //    }
       
    //   axios.post(APIMaster.URL + APIMaster.Transaction.AddWithdrawlRequest,params,axiosConfig)
    // .then( (response)=> {     
    //   GetAlltransaction()
    // })
    // .catch( (error)=> {
    //   if(error.response.status == 401)
    //         {
    //           console.log('ADD card Error ',error)  
    //           props.navigator.replace('Login')
    //         }
    //         else
    //         {
    //           //setdataSource(response.data)
    //         console.log(' Error ',error.response.data)  
    //         Alert.alert('اخطار',error.response.data.errors[0])
    //         }
    // })
    //  }








  let DataModalDeposit = 
    <ScrollView>
    <View style={{width:'100%',height:40,marginBottom:'10%'}}>
      <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('4%'),paddingLeft:10,paddingTop:5}}>سرمایه گذاری</Text>
     </View>


<Textinputs
       changeText = {(value)=> setAmount(value)}
       values = {addComma(Amount.toString())}
       Title='مبلغ به تومان'
       TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
       Edit={true}
       TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
       fontSize:wp('3.5%'),backgroundColor:'white',borderColor:'black',borderWidth:0.5,fontFamily:'Digikala'}}
       keyboardtype='numeric'
     />


     <View style={{width:'80%',marginHorizontal:'10%',borderRadius:10,padding:10,height:hp('12%')
     ,backgroundColor:'#B00A44',flexDirection:'row-reverse',opacity:0.3}}>
     <View style={{width:'15%'}}>
     <Icon name='info' color='#B00A44'/>
     </View>
     <View style={{width:'85%'}}>
     <Text style={{fontFamily:'Digikala',fontSize:wp('4%'),color:'#B00A44'}}>
     میزان شارژ حساب باید از مقدار 10,000 تومان بیشتر باشد 
     </Text>
     </View>
     </View>

       <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
        <TouchableOpacity style={{width:'80%',height:45,
        marginHorizontal:'10%',alignItems:'center',justifyContent:'center',borderRadius:10,elevation:5
        ,backgroundColor:'white',marginBottom:5}}
        onPress={()=>{}}
        >
            <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('4%')}}>سرمایه گذاری</Text>
        </TouchableOpacity>
       </View>


     </ScrollView>


let DataModalWithdraw = 
<ScrollView>
<View style={{width:'100%',height:40,marginBottom:'10%'}}>
  <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('4%')
  ,paddingLeft:10,paddingTop:5}}>برداشت</Text>
 </View>


<Textinputs
   changeText = {(value)=> setAmount(value)}
   values = {addComma(Amount.toString())}
   Title=' مبلغ به تومان'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={true}
   TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderColor:'black',borderWidth:0.5,fontFamily:'Digikala'}}
   keyboardtype='numeric'
 />
   
   <Textinputs
   changeText = {(value)=> setselectedCardNumberCardNumber(value)}
   values = {selectedCardNumber}
   Title='شماره کارت'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={false}
   TextPress={()=>{setshowCardList(true)}}
   TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderColor:'black',borderWidth:0.5,fontFamily:'Digikala'}}
 />


   <View style={{alignItems:'center',justifyContent:'center',madrginTop:20}}>
    <TouchableOpacity style={{width:'80%',height:45,
    marginHorizontal:'10%',alignItems:'center',justifyContent:'center',borderRadius:10,elevation:5,marginBottom:20
    ,backgroundColor:'white',marginBottom:5}}
    onPress={()=>{
    //   if(selectedCardId != '')
    //       {
    //     if((Amount != ''))
    //         {
    //       if(Number(Amount) >= 10000 )
    //       GetWalletInventory()
    //       else
    //       {
    //         Alert.alert('اخطار','لطفا مبلغ را بزرگتر از ده هزار تومان وارد کنید')
    //       }
    //          }
    //          else
    //          {
    //           Alert.alert('اخطار','لطفا مبلغ را  وارد کنید')
    //          }
    //       }
    // else
    // {
    //   Alert.alert('اخطار','لطفا شماره کارت را انتخاب کنید')
    // }
    }}
    >
        <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('4%')}}>برداشت</Text>
    </TouchableOpacity>
   </View>


 </ScrollView>








  // let  GetAlltransaction= ()=>{
  //   var axiosConfig = {
  //       headers:{
  //         "accept": "*/*" ,
  //         'Authorization' : LoginData.type + ' ' + LoginData.token
  //        }
  //      }
  //     axios.get(APIMaster.URL + APIMaster.Transaction.GetAlltransactionsForUser,axiosConfig)
  //     .then( (response)=> {
             
  //             console.log('response.data',response.data.result.data)  
  //             setTransactionLists(response.data.result.data)
  //     })
  //     .catch( (error)=> {
  //       console.log('error',error)  
  //       if(error.response.status == 401)
  //       {
  //         LoginData.lastPage='Transactions' 
  //         props.navigation.replace('Login')
  //       }
  //       else
  //       {
  //         //setdataSource(response.data)
  //       console.log('chats Error',error)  
  //       }
       
       
  //     })
  //   }



   useEffect(()=>{
    // GetAlltransaction()
    // GetAllCards()
   },[])


  return (
    <View style={[styles.container,{}]}>
        

     
       <TransactionList TransactionLists={TransactionLists}/>
    
       <FloatingAction
    actions={actions}
    onPressItem={name => {
      if(name == 'Deposit')
      {   

        setAmount('')
        setshowModalsDeposit(true)
      }
      else  if(name == 'Withdraw')     
      {   
        setAmount('')
        setselectedCardNumber('')
        setselectedCardId('')
        setshowModals(true)
         
      }
    }}
    position='right'
    color='#B00A44'
    // overlayColor='red'
  />

    <CustomModals showModal={showModalsDeposit}
  closeModal={()=>setshowModalsDeposit(false)}
   ModalData={DataModalDeposit}
  />

   <CustomModals showModal={showModals}
  closeModal={()=>setshowModals(false)}
   ModalData={DataModalWithdraw}
  />


   <CenterModal showModal={showCardList} 
   dataSource={AllCards} closeModal={()=>{setshowCardList(false)}}
      setCategorySelected={setselectedCardNumber}
      setCategorySelectedId={setselectedCardId}
      CategorySelectedId={selectedCardId}
      ItemTitle={'Title'}
      />


       </View>

  )
}
const styles = StyleSheet.create({
  container: 
      {
      flex: 1
      },
    })



export default Transaction;


