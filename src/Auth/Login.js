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
import CenterModal from './../Components/CenterModal'
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
  import Buttons from './../Components/Buttons'
  import Textinputs from './../Components/Textinputs';;
// import {APIMaster} from '../API/APIMaster';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {ColorRange} from './../Data/StableData';



const Login =(props)=>{
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [showIndicator,setshowIndicator] = useState(false)
    const[Country,setCountry] = useState({Code:'+98',Title:'Iran'})  
    const [PassError,setPassError] = useState('')
    const[ShowModals,setShowModals] = useState(false)
    const[ErrorShowModals,setErrorShowModals] = useState(false)

    
    closeModals=()=>{
      setShowModals(false)
    }

      // CheckLogin=async(phone,pass,code)=>{
      //   setshowIndicator(true)
      //   var params = {
      //     phoneNumber: phone,
      //     password:pass,
      //     countryCode:code
      //   }
      //   var axiosConfig = {
      //     headers:{
      //       "Access-Control-Allow-Origin": "*"
      //             }
      //    }
      //   console.log(params)

      //   axios.post(APIMaster.URL +
      //      APIMaster.Account.Login,params,axiosConfig)
      //   .then((response)=> {
                
      //           console.log(response)  

      //           LoginData.token = response.data.result.data.token;
      //           LoginData.Phone = phone;
      //           LoginData.Code = code;
      //           CheckUserActive();
      //   })
      //   .catch( (error)=> {
      //     console.log('Error : ',error)  
      //     setshowIndicator(false)
      //     //setshowIndicator(false)
         
      //   })
      // }
      // CheckUserActive= ()=>{
      // var axiosConfig = {
      //     headers:{
      //       "Access-Control-Allow-Origin": "*",
      //       'Authorization' : LoginData.type + ' ' + LoginData.token
      //             }
      //    }
      //   axios.get(APIMaster.URL + APIMaster.Account.IsActive,axiosConfig)
      //   .then( (response)=> {
               
      //           console.log(response.data.result.data) 
      //           if(!response.data.result.data)
      //           {
      //             AsyncStorage.setItem("Token",LoginData.token)
      //             AsyncStorage.setItem("Phone",LoginData.Phone)
      //             AsyncStorage.setItem("Code",LoginData.Code)
      //             if(LoginData.lastPage == '')
      //             props.navigation.replace('Controls')
      //             else
      //             {
      //               props.navigation.replace(LoginData.lastPage)
      //             }
                  
      //           } 
      //           else
      //           {
            
      //           }
      //           setshowIndicator(false)
      //           // props.navigation.replace('Controls') 
      //   })
      //   .catch( (error)=> {
      //     console.log(error)  
      //     setshowIndicator(false)
      //     return false;
         
      //   })
      // }
    





  return (
    <View style={styles.container}>
       <ScrollView>
      {/* <CenterModal showModal={ShowModals} dataSource={Data} closeModal={()=>{closeModals()}}
      sendData={setCountry} */}
      {/* /> */}
      {/* <ErrorModal showModal={ErrorShowModals} dataSource={Data} closeModal={()=>{closeModals()}}
      sendData={setCountry}
      /> */}
   {/* <LinearGradient colors={ColorRange} style={{height:hp('100%')}}>   */}
  
   <View style={{width:'100%',height:hp('23%'),marginTop:'10%'}}> 
     <View style={{width:wp('90%'),height:'100%',position:'absolute'
     ,marginLeft:wp('5%'),marginRight:wp('5%')}}> 
     <Image source={require('./../Images/MainImage.png')} 
     style={{width:'80%',height:'80%'}} 
      resizeMode='contain'
     />
  
     </View>
     <View style={{justifyContent:'center'
    ,alignItems:'center',alignSelf:'center',marginTop:hp('10%')}}>
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
    <Text style={{color:'white',fontSize:wp('6%'),fontWeight:'bold',fontFamily:'Digikala'}}>ورود</Text>
  </View>

<View style={styles.ViewTextInputView}>
    
    <Textinputs
       changeText = {(value)=>setusername(value)}
       values = {username}
       TextStyle={{fontFamily:'Digikala'}}
       Edit={true}
       Title='شماره تلفن همراه یا ایمیل'
     />
      

    <Textinputs
       changeText = {(value)=>setpassword(value)}
       values = {password}
       TextStyle={{fontFamily:'Digikala'}}
       secure={true}
       Title='رمز عبور'
     />
      {  
            PassError != ''  &&
            <Text style={styles.ErrorFiled}>{PassError}</Text>
      }
     </View>
    
     <View style={{marginTop:hp('3%')}}>
{
  showIndicator ?
  <ActivityIndicator 
   size='large' color='white'
  />
:
   <Buttons 
      ButtonStyle = {styles.TouchableLoginStyle}
      titleStyle = {styles.textStyleLogin}
      titleText = 'ورود'
      ButtonOperator = {()=>{props.navigation.navigate('Verify')}}
      />
}
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}}>
<Text style={styles.StyleLogin}>
   عضویت
</Text>
</TouchableOpacity>
</View>
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
  ImageView:{
      justifyContent:'center',alignItems:'center',alignSelf:'center'
      // ,width:wp('40%'),height:wp('40%')
    
    },
  ViewContainer :{
     alignSelf:'center',justifyContent:'center',alignSelf:'center'
    //  ,flex:0.3
    //  ,position:'absolute'
     ,height:hp('15%')
  },
  TouchableLoginStyle: {
  borderRadius:10,borderColor:'white',
  borderWidth:1,backgroundColor:'white',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
  ,height:55,
   alignSelf:'center',justifyContent:'center',alignSelf:'center',
},
ViewTextInputView:{
    justifyContent:'center',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
    ,height:hp('40%')
    
},
  textStyleLogin:{
    textAlign:'center',color:'#cc3333',fontSize:wp('4%'),fontFamily:'Digikala'
  },
  textStyleSignUp:{
    textAlign:'center',color:'white',fontSize:wp('4%'),fontFamily:'Digikala'
  }, 
  StyleLogin:{
    textAlign:'center',color:'white',fontSize:wp('4.5%'),fontFamily:'Digikala'
  },
  ViewStyle:{
      justifyContent:'center'
      ,alignItems:'center',alignSelf:'center'
      ,marginTop:10,marginBottom:20
  },
  ErrorFiled:{
    textAlign:'right',color:'yellow',fontSize:15,marginTop:3
  }
  
});
export default Login;


