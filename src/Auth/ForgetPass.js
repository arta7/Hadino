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
import {APIMaster} from '../API/APIMaster';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import {ColorRange} from './../Data/StableData'


       const Data=[{title:'Iran(+98)',Code:'+98'},{title:'afghanestan(+99)',Code:'+99'}]


const ForgetPass =(props)=>{
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [showIndicator,setshowIndicator] = useState(false)
    const[Country,setCountry] = useState({Code:'+98',Title:'Iran'})  
    const [PassError,setPassError] = useState('')
    const[ShowModals,setShowModals] = useState(false)
     

    
    closeModals=()=>{
      setShowModals(false)
    }

  return (
    <View style={styles.container}>
       <ScrollView>
      <CenterModal showModal={ShowModals} dataSource={Data} closeModal={()=>{closeModals()}}
      sendData={setCountry}
      />
   <LinearGradient colors={ColorRange} style={{height:hp('100%')}}>  
  
   <View style={{width:'100%',height:hp('26%'),marginTop:20}}> 
     <View style={{width:wp('90%'),height:'100%',position:'absolute'
     ,marginLeft:wp('5%'),marginRight:wp('5%')}}> 
     <Image source={require('./../Images/MainImage.png')} 
     style={{width:'100%',height:'100%'}} 
      resizeMode='contain'
     />
  
     </View>
   <View style={{justifyContent:'center'
    ,alignItems:'center',alignSelf:'center',marginTop:hp('10%')}}>
    <Image source={require('./../Images/Rectangle.png')}
     style={[styles.ImageView,{position:'absolute'}]} 
    />
     <Text style={{textAlign:'center',fontWeight:'bold'
     ,color:'#F07B3F',fontSize:wp('4.5%'),fontFamily:'Digikala'}}>Call In Door</Text>
     </View>

   </View>



   <View style={{width:wp('90%'),marginLeft:wp('5%'),marginRight:wp('5%')}}>
    <Text style={{color:'white',fontSize:wp('5%'),fontWeight:'bold',fontFamily:'Digikala'}}>ورود</Text>
  </View>

<View style={styles.ViewTextInputView}>
    
    <Textinputs
      //  placeHolder = 'Phone Number or Email'
       changeText = {(value)=>setCountry(value)}
       values = {Country !=null ? Country.Title : ''}
       Title='Country'
       Edit={false}
       TextPress={()=>{setShowModals(true)}}
       TextStyle={{fontSize:wp('4%'),color:'white',fontFamily:'Digikala'}}

     />   

     

     <View style={{flexDirection:'row'
    }}>
       
     <Textinputs
      //  changeText = {(value)=>setEmail(value)}
       values = {Country !=null ? Country.Code : ''}
       Title='Phone Number'
       TextStyle={{width:wp('20%'),textAlign:'center',
       fontSize:wp('4%'),backgroundColor:'#eb5853',opacity:0.7,fontFamily:'Digikala'}}
       Edit={false}
     />
     <Textinputs
       changeText = {(value)=>setusername(value)}
       values = {username}
       Title=''
       TextStyle={{width:wp('50%'),marginRight:20,fontFamily:'Digikala'}}
       Edit={true}
     />
      
      </View>

     </View>
    
<View style={styles.ViewContainer}>
{
  showIndicator ?
  <ActivityIndicator 
   size='large' color='white'
  />
:
   <Buttons 
      ButtonStyle = {styles.TouchableLoginStyle}
      titleStyle = {styles.textStyleLogin}
      titleText = 'Submit'
      ButtonOperator = {()=>{}}
      />
}
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}}>
<Text style={styles.StyleLogin}>
   I want to Login 
</Text>
</TouchableOpacity>

</View>
</View>

      </LinearGradient>
      </ScrollView>
     
  </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ImageView:{
      justifyContent:'center',alignItems:'center',alignSelf:'center'
      ,width:wp('40%'),height:wp('40%')
    
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
  ,height:60,
   alignSelf:'center',justifyContent:'center',alignSelf:'center',
},
ViewTextInputView:{
    justifyContent:'center',width:wp('80%'),marginLeft:wp('10%'),marginRight:wp('10%')
    ,height:hp('40%')
    
},
  textStyleLogin:{
    textAlign:'center',color:'#F07B3F',fontSize:wp('4%'),fontFamily:'Digikala'
  },
  textStyleSignUp:{
    textAlign:'center',color:'white',fontSize:wp('4%'),fontFamily:'Digikala'
  }, 
  StyleLogin:{
    textAlign:'center',color:'white',fontSize:wp('4%'),marginLeft:20,fontFamily:'Digikala'
  },
  ViewStyle:{
     justifyContent:'space-between'
      ,alignItems:'center',alignSelf:'center'
      ,marginTop:10
  },
  ErrorFiled:{
    textAlign:'right',color:'yellow',fontSize:15,marginTop:3
  }
  
});
export default ForgetPass;


