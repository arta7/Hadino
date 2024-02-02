import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, Alert,Image,ActivityIndicator
} from 'react-native';
import axios from 'axios';
import CenterModal from './../Components/CenterModal'
import ErrorModal from './../Components/ErrorModal'
import LinearGradient from 'react-native-linear-gradient';
import Buttons from './../Components/Buttons'
import Textinputs from './../Components/Textinputs'
// import {APIMaster} from '../API/APIMaster';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import SwitchChoose from './../Components/SwitchChoose'
import {ColorRange} from './../Data/StableData';
 
// import Toast from 'react-native-tiny-toast'
import { useToast } from 'react-native-fast-toast'


const SignUp =(props)=>{
  const toast = useToast()
    const [username,setusername] = useState('')
    const [Name,setName] = useState('')
    const [Family,setFamily] = useState('')
    const [password,setpassword] = useState('')
    const [Repassword,setRepassword] = useState('')
    const [showIndicator,setshowIndicator] = useState(false)
    const [nameError,setnameError] = useState('') 
    const [familyError,setfamilyError] = useState('') 
    const [emailError,setemailError] = useState('')
    const [PassError,setPassError] = useState('')
    const[Country,setCountry] = useState({Code:'+98',Title:'Iran'})
    const [passFillError,setpassFillError] = useState('')
    const [repassFillError,setrepassFillError] = useState('')
    const[ShowModals,setShowModals] = useState(false)
    const[ErrorModals,setErrorModals] = useState(false)
    const[switchValue,setswitchValue] = useState(false)

   let closeModals=()=>{
      setShowModals(false)
    }

   let closeErrorModals=()=>{
      setErrorModals(false)
    }


   let Registers=(phone,pass,code,Company)=>{
      if(password != Repassword)
      {
          
      }
      else
      {
      var params = {
        phoneNumber: phone,
        password:pass,
        countryCode:code,
        isCompany:Company
      }
    
      axios.post(APIMaster.URL + APIMaster.Account.Register,params)
      .then( (response)=> {
              
              console.log(response)  
             // setErrorModals(true)

              // Toast.showSuccess('Pay success')

              toast.show("Task finished successfully", {
                duration: 5000,
                style: { padding: 0 },
                textStyle: { fontSize: 20 },
              });
      })
      .catch( (error)=> {
        console.log(error)  
        //setshowIndicator(false)
       
      })
    }
    }





  return (
    <View style={styles.container}>
       <ScrollView>
          {/* <CenterModal showModal={ShowModals} dataSource={Data} closeModal={()=>{closeModals()}}
      sendData={setCountry} Data = {Country} /> */}

          {/* <ErrorModal showModal={ErrorModals}  closeModal={()=>{closeErrorModals()}}
          ErrorIcon =''  ErrorText= '' /> */}


   {/* <LinearGradient colors={ColorRange} style={{height:hp('100%')}}
   >   */}
  

   <View style={{width:'100%',height:hp('23%'),marginTop:20}}> 
     <View style={{width:wp('90%'),height:'100%',position:'absolute'
     ,marginLeft:wp('5%'),marginRight:wp('5%')}}> 
     <Image source={require('./../Images/MainImage.png')} 
     style={{width:'100%',height:'100%'}} 
      resizeMode='contain'
     />
  
     </View>
   <View style={{justifyContent:'center'
    ,alignItems:'center',alignSelf:'center',marginTop:hp('12%')}}>
    <Image source={require('./../Images/Rectangle.png')}
     style={[styles.ImageView,{position:'absolute'}]} 
    />
      <Image source={require('./../Images/Group.png')}
     style={[styles.ImageView,{position:'absolute',width:wp('20%'),height:wp('15%')}]} 
      resizeMode='stretch'
    />
     </View>

   </View>


   <View style={{width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%'),marginBottom:20}}>
    <Text style={{color:'white',fontSize:wp('5.5%'),fontFamily:'Digikala'}}>عضویت</Text>
  </View>


   <View style={styles.ViewTextInputView}>
     
     <Textinputs
       changeText = {(value)=>setusername(value)}
       values = {username}
       textStyle={{fontFamily:'Digikala'}}
       Title='شماره تلفن همراه یا ایمیل'
       Edit={true}
      //  keyboardtype='numeric'
     />
      
   <View>
    <Textinputs
       Title = 'رمز عبور'
       changeText = {(value)=>setpassword(value)}
       values = {password}
       textStyle={{fontFamily:'Digikala'}}
       secure={true}
       Edit={true}
     />
      {  
      passFillError != ''  &&
      <Text style={styles.ErrorFiled}>{passFillError}</Text>
      }
      {  
      PassError != ''  &&
      <Text style={styles.ErrorFiled}>{PassError}</Text>
      }
     <Textinputs
       Title = 'تکرار رمز عبور'
       changeText = {(value)=>setRepassword(value)}
       values = {Repassword}
       textStyle={{fontFamily:'Digikala'}}
       secure={true}
       Edit={true}
     />
     </View>
     </View>
     
<View style={{marginTop:40}}>

{
  showIndicator ?
 <ActivityIndicator 
  size='large' color='white'
 />
:
   <Buttons 
      ButtonStyle = {styles.TouchableSignUpStyle}
      titleStyle = {styles.textStyleSignUp}
      titleText = 'عضویت'
      ButtonOperator = {()=>{props.navigation.navigate('Verify') }}
      />
}


   
</View>

      {/* </LinearGradient> */}
      </ScrollView> 
  </View>

  )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,backgroundColor:'#cc3333'
    },
    ViewContainer :{
       alignSelf:'center',justifyContent:'center',alignSelf:'center',width:wp('100%')
        ,position:'absolute'
        //,bottom:hp('6%')
    },
    TouchableSignUpStyle: {   
    borderRadius:10,borderColor:'white',
    borderWidth:1,backgroundColor:'white'
    ,width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
    ,height:55,
     alignSelf:'center',justifyContent:'center'
     ,alignSelf:'center',bottom:30
  },
    textStyleSignUp:{
      textAlign:'center',color:'#cc3333',fontSize:wp('4%'),fontFamily:'Digikala'
    },
   ErrorFiled:{
    textAlign:'right',color:'yellow',fontSize:15,marginTop:3,fontFamily:'Digikala'
    },
    StyleLogin:{
      textAlign:'center',color:'white',fontSize:wp('4%'),fontFamily:'Digikala'
    },
    ViewStyle:{
        flexDirection:'row',justifyContent:'space-between'
        ,alignItems:'center',alignSelf:'center',marginTop:10
        ,marginBottom:hp('10%')
    },
    ImageView:{
        justifyContent:'center',alignItems:'center',alignSelf:'center'
        // ,top:'10%'
      },
      ViewTextInputView:{
        width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%'),justifyContent:'center',
        // height:hp('30%')
      
       
    },
    ViewContainerButton:{
      width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%'),justifyContent:'center',
      // height:hp('20%')
    }
    
  });
export default SignUp;


