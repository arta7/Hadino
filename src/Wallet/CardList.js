import React,{useEffect, useState,useRef} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,View,TouchableOpacity,FlatList,Text,ScrollView,Alert
} from 'react-native';
// import CreditCard from 'react-native-credit-card-form-ui';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
// import { LoginData } from '../Redux/LoginData';
// import { APIMaster } from '../API/APIMaster';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import {Header,Icon,Avatar,ListItem} from 'react-native-elements'
import CustomModals from '../Components/CustomModal';
import Textinputs from '../Components/Textinputs';
import {CardLists} from '../Data/StableData'
import {ColorRange2} from './../Data/StableData';
import LinearGradient from 'react-native-linear-gradient';

export default  CardList=(props)=> {
  const creditCardRef = useRef() ;
  const[AllCards,setAllCards] = useState([])
  const[showModals,setshowModals] = useState(false)
  const[showModalsAdd,setshowModalsAdd] = useState(false)
   
   const[CardName,setCardName] = useState('')
   const[CardNumber,setCardNumber] = useState('')
   const[CardId,setCardId] = useState('')


  let DataModal = 
    <ScrollView>
    <View style={{width:'100%',height:40,marginBottom:20}}>
      <Text style={{fontFamily:'Digikala',color:'white',fontSize:wp('3.5%'),paddingLeft:10,paddingTop:5}}>افزودن کارت</Text>
     </View>


<Textinputs
       changeText = {(value)=> setCardName(value)}
       values = {CardName}
       Title='نام کارت'
       TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
       Edit={true}
       TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
       fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}

     />

     <Textinputs
       changeText = {(value)=> setCardNumber(value)}
       values = {CardNumber}
       Title='شماره کارت'
       TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
       Edit={true}
       TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
       fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}

     />

       <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
        <TouchableOpacity style={{width:'40%',height:40,
        marginHorizontal:'5%',alignItems:'center',justifyContent:'center',borderRadius:10,elevation:5
        ,backgroundColor:'white',marginBottom:10}}
        onPress={()=>{
          // console.log('close',CardName,CardNumber)
          setshowModals(false)
         // UpdatesCardWithId()
        
        }}
        >
            <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('4%')}}>ویرایش</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{width:'40%',height:hp('5%'),
        marginHorizontal:'5%',alignItems:'center',justifyContent:'center'
        ,borderRadius:10,elevation:5,backgroundColor:'#f77'}}>
            <Text style={{fontFamily:'Yekan',color:'white',fontSize:wp('4%')}}>حذف</Text>
        </TouchableOpacity> */}
       </View>

     </ScrollView>



let DataModalAdd = 
<ScrollView>
<View style={{width:'100%',height:40,marginBottom:20}}>
  <Text style={{fontFamily:'Digikala',color:'#EA5455',
  fontSize:wp('3.5%'),paddingLeft:10,paddingTop:5}}>افزودن کارت</Text>
 </View>


<Textinputs
   changeText = {(value)=> setCardName(value)}
   values = {CardName}
   Title='نام کارت'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={true}
   TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}

 />

 <Textinputs
   changeText = {(value)=> setCardNumber(value)}
   values = {CardNumber}
   Title='شماره کارت'
   TitleStyle={{fontSize:wp('3.5%'),color:'black',paddingLeft:15,paddingTop:5,marginTop:10,fontFamily:'Digikala'}}
   Edit={true}
   TextStyle={{color:'black',textAlign:'right',width:'80%',marginHorizontal:'10%',
   fontSize:wp('3.5%'),backgroundColor:'white',borderWidth:0.5,borderColor:'black',fontFamily:'Digikala'}}

 />

   <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
    <TouchableOpacity style={{width:'80%',height:45,
    marginHorizontal:'10%',alignItems:'center',justifyContent:'center',borderRadius:10,elevation:5
    ,backgroundColor:'white',marginBottom:10}}
    onPress={()=>{
      setshowModalsAdd(false)
      // AddCards()
    
    }}
    >
        <Text style={{fontFamily:'Digikala',color:'#B00A44',fontSize:wp('4%')}}>افزودن کارت</Text>
    </TouchableOpacity>
   </View>

 </ScrollView>

  



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
        
  //             setAllCards(response.data.result.data)
             
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
  //       console.log('chats Error',error)  
  //       }
       
       
  //     })
  //   }

    


     
    // let UpdatesCardWithId=()=>{
    //   console.log('LoginData',CardName,CardNumber,CardId)
    //   const options = {
    //     method: 'PUT',
    //     headers: { "accept": "*",
    //     'Authorization' : LoginData.type + ' ' + LoginData.token },
    //     data:{
    //       "id": CardId,
    //       "cardName": CardName.toString(),
    //       "cardNumber": CardNumber.toString()

    //     },
    //     url:APIMaster.URL + APIMaster.Card.UpdateCard
    //   };
    // axios(options)
    // .then( (response)=> {     
    //         console.log('update card :',response)
    //         GetAllCards()
    // })
    // .catch( (error)=> {
    //   if(error.response.status == 401)
    //         {
    //           console.log('update card Error ',error)  
    //           props.navigator.replace('Login')
    //         }
    //         else
    //         {
    //           //setdataSource(response.data)
    //         console.log('update card ',error.response.data)  
    //         Alert.alert('اخطار',error.response.data.errors[0])
    //         }
    // })
    //  }


     
     
    // let AddCards=()=>{
    //   console.log('LoginData',LoginData.token)
    //   var params ={
    //     id:0,
    //       "cardName": CardName,
    //       "cardNumber": CardNumber
    //   }

    //   var axiosConfig = {
    //     headers:{
    //       "accept": "*",
    //       "Content-Type": "application/json-patch+json",
    //       'Authorization' :  LoginData.type + ' ' + LoginData.token
    //             }
    //    }
       
    //   axios.post(APIMaster.URL + APIMaster.Card.AddCard,params,axiosConfig)
    // .then( (response)=> {     
    //   GetAllCards()
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
    //         console.log('Add card Error ',error.response.data)  
    //         Alert.alert('اخطار',error.response.data.errors[0])
    //         }
    // })
    //  }





    useEffect(()=>{
      setAllCards(CardLists)
      // GetAllCards()
    },[])


  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
        <FlatList
        data={AllCards}
        renderItem={({item,index})=>
        <TouchableOpacity style={{width:wp('80%'),height:hp('25%'),borderRadius:1,
        backgroundColor:'#417288',borderRadius:15,marginBottom:'5%'}}
        onPress={()=>{
          setCardName(item.cardName)
          setCardNumber(item.cardNumber)
          setCardId(item.id)
          setshowModals(true)
        
        }}
        >
            <LinearGradient colors={ColorRange2} style={{width:'100%',height:'100%'
            ,justifyContent:'center',alignItems:'center',borderRadius:10,elevation:5}}
             useAngle={true}
             angle={90} 
             >
          <View style={{width:'100%',height:'50%',
          padding:20,flexDirection:'row-reverse'
          }}>
          <View style={{justifyContent:'center',alignItems:'center',width:'25%',height:'100%'}}>
          <Icon name='credit-card'  color='white' size={wp('10%')} />
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'Digikala',color:'white',fontSize:wp('5%')}}>
             {item.cardName}   
        </Text>
        </View>
        </View> 
        <View style={{borderWidth: 1,borderStyle: 'dotted',borderRadius:1,width:'90%',marginHorizontal:'5%'}}>

</View>
        <View style={{width:'100%',height:'40%',padding:20}}>

 <Text style={{fontFamily:'Digikala',color:'white',fontSize:wp('5%')}}>
             {item.cardNumber.toString().match(/.{1,4}/g).join(' ')}   
        </Text>

        </View>
        </LinearGradient>
      </TouchableOpacity>
        }
       />

       <FloatingAction
onPressMain={() => {
  setCardNumber('')
  setCardName('')
  setshowModalsAdd(true)
}}
position='right'
color='#B00A44'
showBackground={showModalsAdd}
/>


  <CustomModals showModal={showModals}
  closeModal={()=>setshowModals(false)}
   ModalData={DataModal}
  />
<CustomModals showModal={showModalsAdd}
  closeModal={()=>setshowModalsAdd(false)}
   ModalData={DataModalAdd}
  />


    </KeyboardAvoidingView>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:hp('3%')
    // justifyContent: 'center',
  },
});